/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import classes from "./Summary.module.css";
import about from "../../assets/AboutName.png";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import mainMessage from "../../assets/letter-to-judge/mainMessage.png";
import { useEffect, useState } from "react";
import judge from "../../assets/letter-to-judge/judge.png";
import subMessage from "../../assets/letter-to-judge/subMessage.png";
import closeMessageIcon from "../../assets/closeMessageIcon.png";
import questionMark from "../../assets/something_else.png";
import previousTab from "../../assets/goLeft.png";
import allEmojiSelect from "../../assets/allEmojiSelect.png";
import allColorsSelect from "../../assets/allColorsSelect.png";
import clickAllEmojis from "../../assets/clickAllEmojis.png";
import clickAllColors from "../../assets/allColorsClick.png";
import { useQuery } from "../../App";
import buttonSound from "../../assets/button_click.wav"; // Import sound file
import { useTranslation } from "react-i18next"; // Import useTranslation
import { PageStates } from "../Configuration/Configuration";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;


const pdfMake = require("pdfmake/build/pdfmake");
const pdfFonts = require("pdfmake/build/vfs_fonts");

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const Summary = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const currentCaseId = query.get("caseId");
  const [optionSelected] = useState<string>("");
  const [messageBoxVisibleFirst, setMessageBoxVisibleFirst] = useState<boolean>(false);
  const [messageBoxVisibleSecond, setMessageBoxVisibleSecond] = useState<boolean>(false);
  const [currentCategory, setCurrentCategory] = useState<string | null>("");
  const [showFinishPopup, setShowFinishPopup] = useState<boolean>(false);
  const [logoBase64, setLogoBase64] = useState<string | null>(null);
  const [selectedBody, setSelectedBody] = useState("");
  const [selectedHead, setSelectedHead] = useState("");
  const [selectedLeg, setSelectedLeg] = useState("");
  const [name, setName] = useState("");
  const [currentCaseObject, setCurrentCaseObject] = useState("");

  const { t } = useTranslation(); // Initialize translation hook
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null); // State for audio

  // Function to convert image to base64
  const convertToBase64 = (
    url: string,
    callback: (base64: string | ArrayBuffer | null) => void
  ) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      const reader = new FileReader();
      reader.onloadend = function () {
        callback(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  };

  useEffect(() => {
    const sound = new Audio(buttonSound);
    setAudio(sound);

    // Convert logo to Base64
    convertToBase64(logo, (base64) => {
      setLogoBase64(base64 as string);
    });
  }, []);

  const playSound = () => {
    if (audio) {
      audio.play();
    }
  };

  // Function to fetch case details from localStorage
  const getCaseDetails = (caseId: string | null) => {
    if (caseId === null) {
      throw new Error("Case ID cannot be null.");
    }

    // Fetch the case details from localStorage
    const caseDetails = JSON.parse(localStorage.getItem(caseId) || "{}");

    if (!caseDetails || Object.keys(caseDetails).length === 0) {
      throw new Error(`No case found with ID: ${caseId}`);
    }

    // Structure the response object
    const response = {
      practitionerEmail: caseDetails.practitionerEmail,
      childInfo: {
        firstName: caseDetails.childInfo.firstName,
        lastName: caseDetails.childInfo.lastName,
        dateOfBirth: caseDetails.childInfo.dateOfBirth,
        courtId: caseDetails.childInfo.courtId,
      },
      avatar: {
        body: caseDetails.avatar.body,
        head: caseDetails.avatar.head,
        legs: caseDetails.avatar.legs,
        name: caseDetails.avatar.name,
      },
      screenshots: {
        aboutPage: caseDetails.screenshots.aboutPage,
        wish1: caseDetails.screenshots.wish1,
        wish2: caseDetails.screenshots.wish2,
        wish3: caseDetails.screenshots.wish3,
        letterToJudge: caseDetails.screenshots.letterToJudge,
      },
      letterToJudge: caseDetails.letterToJudge,
    };

    return response;
  };

  const generatePDF = (caseData: any) => {
    // @ts-ignore
    const docDefinition: any = {
      header: (currentPage: any, pageCount: any) => {
        return {
          margin: [20, 10, 20, 0],
          columns: [
            {
              image: logoBase64,
              width: 100,
              alignment: "left",
            },
            {
              text: `${t("page")} ${currentPage} ${t("of")} ${pageCount}`,
              alignment: "right",
              margin: [0, 20, 20, 0],
              fontSize: 9,
            },
          ],
        };
      },
      footer: (currentPage: any, pageCount: any) => {
        return {
          text: `${t("page")} ${currentPage} ${t("of")} ${pageCount}`,
          alignment: "center",
          margin: [0, 0, 0, 20],
          fontSize: 9,
        };
      },
      content: [
        {
          text: t("summary_title", { name: caseData.childInfo.firstName }),
          fontSize: 18,
          bold: true,
          alignment: "center",
          margin: [0, 20, 0, 20],
        },
        {
          columns: [
            [
              { text: `${t("first_name")}:`, bold: true, margin: [0, 5, 0, 0] },
              { text: caseData.childInfo.firstName, margin: [0, 0, 0, 10] },
            ],
            [
              { text: `${t("last_name")}:`, bold: true, margin: [0, 5, 0, 0] },
              { text: caseData.childInfo.lastName, margin: [0, 0, 0, 10] },
            ],
            [
              { text: `${t("date_of_birth")}:`, bold: true, margin: [0, 5, 0, 0] },
              { text: caseData.childInfo.dateOfBirth, margin: [0, 0, 0, 10] },
            ],
          ]
        },
        {
          columns: [
            [
              { text: `${t("case_id")}:`, bold: true, margin: [0, 5, 0, 0] },
              { text: currentCaseId, margin: [0, 0, 0, 10] },
            ],
            [
              { text: `${t("court_id")}:`, bold: true, margin: [0, 5, 0, 0] },
              { text: caseData.childInfo.courtId, margin: [0, 0, 0, 10] },
            ],
            [
              { text: `${t("practitioner_email")}:`, bold: true, margin: [0, 5, 0, 0] },
              { text: caseData.practitionerEmail || t("not_available"), margin: [0, 0, 0, 10] },
            ],
          ]
        },
        
        caseData.screenshots.aboutPage
          ? {
              stack: [
                {
                  text: `${t("about_page")}:`,
                  bold: true,
                  margin: [0, 20, 0, 10],
                },
                {
                  image: caseData.screenshots.aboutPage,
                  width: 500,
                  height: 300,
                  alignment: "center",
                },
              ],
              pageBreak: "after",
            }
          : {
              text: t("no_about_page_image"),
              color: "red",
              alignment: "center",
              pageBreak: "after",
            },
        caseData.screenshots.wish1
          ? {
              stack: [
                {
                  text: `${t("wish_1")}:`,
                  bold: true,
                  margin: [0, 20, 0, 10],
                },
                {
                  image: caseData.screenshots.wish1,
                  width: 500,
                  height: 300,
                  alignment: "center",
                },
              ],
              pageBreak: "after",
            }
          : {
              text: t("no_wish_1_image"),
              color: "red",
              alignment: "center",
              pageBreak: "after",
            },
        caseData.screenshots.wish2
          ? {
              stack: [
                {
                  text: `${t("wish_2")}:`,
                  bold: true,
                  margin: [0, 20, 0, 10],
                },
                {
                  image: caseData.screenshots.wish2,
                  width: 500,
                  height: 300,
                  alignment: "center",
                },
              ],
              pageBreak: "after",
            }
          : {
              text: t("no_wish_2_image"),
              color: "red",
              alignment: "center",
              pageBreak: "after",
            },
        caseData.screenshots.wish3
          ? {
              stack: [
                {
                  text: `${t("wish_3")}:`,
                  bold: true,
                  margin: [0, 20, 0, 10],
                },
                {
                  image: caseData.screenshots.wish3,
                  width: 500,
                  height: 300,
                  alignment: "center",
                },
              ],
              pageBreak: "after",
            }
          : {
              text: t("no_wish_3_image"),
              color: "red",
              alignment: "center",
              pageBreak: "after",
            },
        caseData.letterToJudge
          ? {
              stack: [
                {
                  text: `${t("letter_to_judge")}:`,
                  bold: true,
                  margin: [0, 20, 0, 10],
                  alignment: "center",
                },
                {
                  text: caseData.letterToJudge,
                  margin: [0, 0, 0, 10],
                  alignment: "left",
                },
              ],
              pageBreak: "after",
            }
          : {
              text: t("no_letter_to_judge"),
              color: "red",
              alignment: "center",
              pageBreak: "after",
            },
      ],
    };
  
    const filename = `${currentCaseId || "document"}.pdf`;
    pdfMake.createPdf(docDefinition).download(filename);
  };
  

  useEffect(() => {
    try {
      const caseData = getCaseDetails(currentCaseId);

      const previewButton = document.querySelector(".simpleWrite");
      if (previewButton) {
        previewButton.addEventListener("click", () => generatePDF(caseData));
      }
    } catch (error: any) {
      console.error(error.message);
    }
  }, [currentCaseId]);

  const allEmojiSelection = () => {
    setCurrentCategory("faces");
    playSound(); // Play sound on action
  };
  const allColorsSelection = () => {
    setCurrentCategory("colors");
    playSound(); // Play sound on action
  };

  const handleFinishClick = () => {
    setShowFinishPopup(true);
    playSound(); // Play sound on action
  };

  const handleConfirmFinish = () => {
    navigate("/home");
    playSound(); // Play sound on action
  };

  const handleCancelFinish = () => {
    setShowFinishPopup(false);
    playSound(); // Play sound on action
  };

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
              onClick={() => {
                if (
                  JSON.parse(currentCaseObject).availablePages.includes(
                    PageStates.Letter
                  )
                ) {
                  navigate(`/letter-to-judge?caseId=${currentCaseId}`);
                } else {
                  navigate(`/make-a-wish?caseId=${currentCaseId}`);
                }
              }}
            >
              <img src={previousTab} alt="" />
            </div>
            <div className={`${classes.aboutImg} ${classes.stickyTop}`}>
              <img src={about} alt="" />

              <label
                className={classes.aboutLabel}
                style={{ wordSpacing: "0.1em", whiteSpace: "nowrap" }}
              >
                {t("summary_title", { name })}
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
                    onClick={() => generatePDF(getCaseDetails(currentCaseId))}
                  >
                    {t("download_button")}
                  </button>
                  <button
                    className={classes.writeWithHelp}
                    onClick={() => handleFinishClick()}
                  >
                    {t("finish_button")}
                  </button>
                </div>
              ) : optionSelected === "writeWithHelp" ? (
                <div
                  className={classes.textAreaContainer}
                  style={{
                    position: "relative",
                    width: "60%",
                    left: "-2%",
                    top: "-70%",
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
                    {t("write_prompt")}
                  </label>
                  <textarea
                    id="textarea"
                    placeholder={t("type_letter_here")}
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
                      playSound();
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
                      playSound();
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
                <div className={classes.categorySelect}>
                  {currentCategory === "faces" ? (
                    <img
                      src={clickAllEmojis}
                      alt=""
                      onClick={allEmojiSelection}
                      style={{ cursor: "pointer" }}
                    />
                  ) : (
                    <img
                      src={allEmojiSelect}
                      alt=""
                      onClick={allEmojiSelection}
                      style={{ cursor: "pointer" }}
                    />
                  )}

                  {currentCategory === "colors" ? (
                    <img
                      src={clickAllColors}
                      alt=""
                      onClick={allColorsSelection}
                      style={{ cursor: "pointer" }}
                    />
                  ) : (
                    <img
                      src={allColorsSelect}
                      alt=""
                      onClick={allColorsSelection}
                      style={{ cursor: "pointer" }}
                    />
                  )}
                </div>
              )}
            </>
            <>
              {optionSelected !== "" && (
                <div className={classes.stickers}></div>
              )}
            </>
          </div>
        </div>
      </div>

      {/* Finish Popup */}
      {showFinishPopup && (
        <div className={classes.popupOverlay}>
          <div className={classes.popup}>
            <p>{t("finish_confirmation")}</p>
            <div className={classes.popupButtons}>
              <button onClick={handleConfirmFinish}>{t("yes_button")}</button>
              <button onClick={handleCancelFinish}>{t("no_button")}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Summary;
