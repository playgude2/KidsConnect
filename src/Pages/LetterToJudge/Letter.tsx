import classes from "./Letter.module.css";
import about from "../../assets/AboutName.png";
import { useNavigate } from "react-router-dom";
import mainMessage from "../../assets/letter-to-judge/mainMessage.png";
import { useEffect, useState } from "react";
import judge from "../../assets/letter-to-judge/judge.png";
import subMessage from "../../assets/letter-to-judge/subMessage.png";
import closeMessageIcon from "../../assets/closeMessageIcon.png";
import questionMark from "../../assets/something_else.png";
import previousTab from "../../assets/goLeft.png";
import nextTab from "../../assets/goRight.png";
import { useQuery } from "../../App";
// import html2canvas from "html2canvas";
import { PageStates } from "../Configuration/Configuration";
import { useTranslation } from "react-i18next";

const Letter = () => {
  const query = useQuery();
  const currentCaseId = query.get("caseId");
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [optionSelected, setOptionSelected] = useState<string>("");
  const [messageBoxVisibleFirst, setMessageBoxVisibleFirst] =
    useState<boolean>(false);
  const [messageBoxVisibleSecond, setMessageBoxVisibleSecond] =
    useState<boolean>(false);
  const [step, setStep] = useState<number>(0);
  const [answers, setAnswers] = useState<string[]>(["", "", "", ""]);
  const [letterContent, setLetterContent] = useState<string>("");
  const [selectedBody, setSelectedBody] = useState("");
  const [selectedHead, setSelectedHead] = useState("");
  const [selectedLeg, setSelectedLeg] = useState("");
  const [name, setName] = useState("");
  const [currentCaseObject, setCurrentCaseObject] = useState("");
  const prompts = [
    t("what_stay_same"),
    t("what_needs_change"),
    t("what_happen_next"),
    t("anything_else"),
  ];

  useEffect(() => {
    if (currentCaseId) {
      const currentCaseObject = JSON.parse(
        localStorage.getItem(currentCaseId) || "{}"
      );
      if (currentCaseObject.letterToJudge) {
        const storedLetter = currentCaseObject.letterToJudge;

        const containsAllQuestions = prompts.every((prompt) =>
          storedLetter.includes(prompt)
        );

        if (containsAllQuestions) {
          const extractedAnswers = storedLetter
            .split("\n\n")
            .map((section: string) => {
              const questionIndex = prompts.findIndex((prompt) =>
                section.includes(prompt)
              );
              return questionIndex !== -1 ? section.split("\n")[1] : "";
            })
            .filter((_: any, index: number) => index < prompts.length);

          setAnswers(extractedAnswers);
          setOptionSelected("writeWithHelp");
        } else {
          setLetterContent(storedLetter);
          setOptionSelected("simpleWrite");
        }
      }
    }
  }, [currentCaseId]);

  useEffect(() => {
    if (currentCaseId) {
      const currentCaseObject = JSON.parse(
        localStorage.getItem(currentCaseId) || "{}"
      );
      setCurrentCaseObject(localStorage.getItem(currentCaseId) || "{}");
      if (currentCaseObject.avatar) {
        setName(currentCaseObject.avatar?.name);
        currentCaseObject.avatar.body &&
          setSelectedBody(currentCaseObject.avatar.body);
        currentCaseObject.avatar.head &&
          setSelectedHead(currentCaseObject.avatar.head);
        currentCaseObject.avatar.legs &&
          setSelectedLeg(currentCaseObject.avatar.legs);
      }
    }
  }, [currentCaseId]);

  const handleNextPrompt = () => {
    if (step < prompts.length - 1) {
      setStep(step + 1);
    } else {
      setOptionSelected("preview");
    }
  };

  const handlePrevPrompt = () => {
    if (step === 0 || optionSelected === "simpleWrite") {
      setOptionSelected("");
    } else if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newAnswers = [...answers];
    newAnswers[step] = e.target.value;
    setAnswers(newAnswers);
  };

  const handlePreviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const updatedAnswers = text.split("\n\n").slice(1, -1);
    setAnswers(updatedAnswers);
  };

  const handleScreenshotAndRedirect = async () => {
    if (currentCaseId) {
      const element = document.documentElement;
      if (element) {
        // const canvas = await html2canvas(element, { scale: 2 });
        // const imgData = canvas.toDataURL("image/jpeg", 0.7);

        const currentCaseObject = JSON.parse(
          localStorage.getItem(currentCaseId) || "{}"
        );

        if (!currentCaseObject.screenshots) {
          currentCaseObject.screenshots = {};
        }
        // currentCaseObject.screenshots.letterToJudge = imgData;

        currentCaseObject.lastVisitedPage = PageStates.Summary;

        localStorage.setItem(currentCaseId, JSON.stringify(currentCaseObject));

        navigate(`/summary?caseId=${currentCaseId}`);
      }
    }
  };

  const saveLetterToLocalStorage = (composedLetter: string) => {
    if (currentCaseId) {
      const currentCaseObject = JSON.parse(
        localStorage.getItem(currentCaseId) || "{}"
      );
      currentCaseObject.letterToJudge = composedLetter;
      localStorage.setItem(currentCaseId, JSON.stringify(currentCaseObject));
    }
  };

  useEffect(() => {
    if (optionSelected === "preview") {
      const composedLetter = `${t("what_stay_same")}\n${answers[0]}\n\n${t(
        "what_needs_change"
      )}\n${answers[1]}\n\n${t("what_happen_next")}\n${answers[2]}\n\n${t(
        "anything_else"
      )}\n${answers[3]}\n\n${t("yours_sincerely")},\n${name}`;

      setLetterContent(composedLetter);

      saveLetterToLocalStorage(composedLetter);
    }
  }, [optionSelected, answers, name, currentCaseId, i18n.language]);

  useEffect(() => {
    if (optionSelected === "simpleWrite") {
      saveLetterToLocalStorage(letterContent);
    }
  }, [letterContent, optionSelected, currentCaseId]);

  return (
    <div className="container-fluid p-0">
      <div className="row m-0 justify-content-center align-items-center min-vh-100">
        <div className="col-12 p-0">
          <div className={classes.card}>
            <div
              className={classes.questionMark}
              style={{
                zIndex: 1000,
                opacity:
                  optionSelected === "" ||
                  messageBoxVisibleFirst ||
                  messageBoxVisibleSecond
                    ? "0.5"
                    : "1",
                cursor:
                  optionSelected === "" ||
                  messageBoxVisibleFirst ||
                  messageBoxVisibleSecond
                    ? "not-allowed"
                    : "pointer",
                top:
                  messageBoxVisibleFirst || messageBoxVisibleSecond
                    ? "46%"
                    : "",
                left:
                  messageBoxVisibleFirst || messageBoxVisibleSecond
                    ? "97%"
                    : "",
              }}
            >
              <img
                src={questionMark}
                alt=""
                onClick={() => setMessageBoxVisibleFirst(true)}
              />
            </div>
            <div
              className={classes.goPrev}
              style={{
                zIndex: 1000,
              }}
              onClick={
                optionSelected
                  ? handlePrevPrompt
                  : () =>
                      JSON.parse(currentCaseObject).availablePages.includes(
                        PageStates.Wish
                      )
                        ? navigate(`/make-a-wish?caseId=${currentCaseId}`)
                        : navigate(`/about?caseId=${currentCaseId}`)
              }
            >
              <img src={previousTab} alt="" />
            </div>
            <div
              className={classes.goNext}
              style={{
                zIndex: 1000,
              }}
              onClick={
                optionSelected === "writeWithHelp"
                  ? handleNextPrompt
                  : handleScreenshotAndRedirect
              }
            >
              <img src={nextTab} alt="" />
            </div>

            <div className={`${classes.aboutImg} ${classes.stickyTop}`}>
              <img src={about} alt="" />

              <label
                className={classes.aboutLabel}
                style={{ wordSpacing: "0.1em", whiteSpace: "nowrap" }}
              >
                {name}'s {t("letter_title")}
              </label>
            </div>
            <div className={classes.imageContainer}>
              <img
                src={selectedBody}
                alt="Body"
                className={classes.bodyImage}
              />
              <img
                src={selectedHead}
                alt="Head"
                className={classes.headImage}
              />
              <img
                src={selectedLeg}
                alt="Legs"
                className={classes.legImage}
                style={{
                  top: "140px",
                }}
              />
            </div>
            <>
              {optionSelected === "" ? (
                <div className={classes.mainMessage}>
                  <img src={mainMessage} alt="" />
                  <p className={classes.mainParagraph}>{t("big_decision")}</p>
                  <button
                    className={classes.simpleWrite}
                    onClick={() => {
                      setOptionSelected("simpleWrite");
                    }}
                  >
                    {t("write_letter")}
                  </button>
                  <button
                    className={classes.writeWithHelp}
                    onClick={() => {
                      setOptionSelected("writeWithHelp"),
                        setMessageBoxVisibleFirst(true);
                    }}
                  >
                    {t("write_letter_help")}
                  </button>
                </div>
              ) : optionSelected === "writeWithHelp" ? (
                <div
                  className={classes.textAreaContainer}
                  style={{
                    position: "relative",
                    width: "60%",
                    left: "-2%",
                    top: "-60%",
                  }}
                >
                  <label
                    className={classes.letterLabel}
                    htmlFor="textarea"
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      fontSize: "1.5rem",
                      fontFamily: "Raleway Regular, sans-serif",
                      color: "black",
                      pointerEvents: "none",
                    }}
                  >
                    {prompts[step]}
                  </label>
                  <textarea
                    id="textarea"
                    placeholder={t("type_letter_here")}
                    value={answers[step]}
                    onChange={handleInputChange}
                    style={{
                      width: "100%",
                      height: "63vh",
                      padding: "30px 10px 10px 10px",
                      border: "1px solid #ccc",
                      overflowY: "auto",
                      fontSize: "1.5rem",
                      fontFamily: "Raleway Regular2, sans-serif",
                      lineHeight: "1.5",
                      resize: "none",
                      zIndex: "1000",
                    }}
                  ></textarea>
                </div>
              ) : optionSelected === "simpleWrite" ? (
                <textarea
                  placeholder={t("type_letter_here")}
                  value={letterContent}
                  onChange={(e) => setLetterContent(e.target.value)}
                  className={classes.letter}
                  style={{
                    width: "60%",
                    height: "63vh",
                    padding: "10px",
                    border: "1px solid #ccc",
                    overflowY: "auto",
                    fontSize: "1.5rem",
                    fontFamily: "Raleway Regular2, sans-serif",
                    lineHeight: "1.5",
                    resize: "none",
                    left: "18%",
                  }}
                ></textarea>
              ) : optionSelected === "preview" ? (
                <div
                  className={classes.textAreaContainer}
                  style={{
                    position: "relative",
                    width: "60%",
                    left: "-2%",
                    top: "-60%",
                  }}
                >
                  <label
                    className={classes.letterLabel}
                    htmlFor="textarea"
                    style={{
                      position: "absolute",
                      top: "10px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      fontSize: "1.5rem",
                      fontFamily: "Raleway Regular, sans-serif",
                      color: "black",
                      pointerEvents: "none",
                    }}
                  >
                    {t("dear_judge")}
                  </label>
                  <textarea
                    id="textarea"
                    value={`${t("what_stay_same")}\n${answers[0]}\n\n${t(
                      "what_needs_change"
                    )}\n${answers[1]}\n\n${t("what_happen_next")}\n${
                      answers[2]
                    }\n\n${t("anything_else")}\n${answers[3]}\n\n${t(
                      "yours_sincerely"
                    )},\n${name}`}
                    onChange={handlePreviewChange}
                    style={{
                      width: "100%",
                      height: "63vh",
                      padding: "30px 10px 10px 10px",
                      border: "1px solid #ccc",
                      overflowY: "auto",
                      fontSize: "1.5rem",
                      fontFamily: "Raleway Regular2, sans-serif",
                      lineHeight: "1.5",
                      resize: "none",
                      zIndex: "1000",
                    }}
                  ></textarea>
                </div>
              ) : null}
            </>
            <img className={classes.judgeImg} src={judge} alt="" />
            <>
              {messageBoxVisibleFirst &&
              !messageBoxVisibleSecond &&
              optionSelected !== "" ? (
                <div className={classes.subMessageBox}>
                  <img src={subMessage} alt="" />
                  <img
                    src={closeMessageIcon}
                    alt="Message Box"
                    className={classes.closeIcon}
                    onClick={() => {
                      setMessageBoxVisibleFirst(false),
                        setMessageBoxVisibleSecond(true);
                    }}
                  />
                  <p className={classes.subParagraph}>{t("write_prompt")}</p>
                </div>
              ) : messageBoxVisibleSecond &&
                !messageBoxVisibleFirst &&
                optionSelected !== "" ? (
                <div className={classes.subMessageBox}>
                  <img src={subMessage} alt="" />
                  <img
                    src={closeMessageIcon}
                    alt="Message Box"
                    className={classes.closeIcon}
                    onClick={() => {
                      setMessageBoxVisibleFirst(false),
                        setMessageBoxVisibleSecond(false);
                    }}
                  />
                  <p className={classes.subParagraph} style={{ top: "35%" }}>
                    {t("check_prompt")}
                  </p>
                </div>
              ) : null}
            </>
            <>
              {optionSelected !== "" && (
                <div className={classes.stickers}></div>
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letter;
