import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import classes from "./Setup.module.css";
import checkMark from "../../assets/checkMark.png";
import buttonSound from "../../assets/button_click.wav";
import { useNavigate } from "react-router-dom";
import { PageStates } from "../Configuration/Configuration";
import { useTranslation } from "react-i18next";

const Setup = () => {
  const [dateType, setDateType] = useState("text");
  const [childFirstName, setChildFirstName] = useState("");
  const [childLasttName, setChildLastName] = useState("");
  const [childDob, setChildDob] = useState("");
  const [caseId, setCaseId] = useState("");
  const [courtId, setCourtId] = useState("");
  const [formData, setFormData] = useState([false, false, false, false, false]);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const navigate = useNavigate();
  const [dateValue, setDateValue] = useState("");
  const [isClicked2, setIsClicked2] = useState<boolean[]>([]);
  const { t } = useTranslation(); // Initialize the translation hook
  const practitionerEmail = localStorage.getItem("practEmail") || "";
  const [configuredPages, setConfiguredPages] = useState<any[]>([]);
  const [availablePages, setAvailablePages] = useState<string[]>([]);

  const dynamicBoxColors = {
    [t("three_wishes")]: classes.boxRed,
    [t("letter_to_the_judge")]: classes.boxGreen,
    [t("about_me")]: classes.boxLightBlue,
    [t("summary")]: classes.boxOrange,
  };

  const handleBoxClick2 = (index: number, id: string) => {
    setIsClicked2((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
    const newAvailablePages = [...availablePages, id];
    setAvailablePages(newAvailablePages);
  };

  const handleFirstNameChange = (event: any) => {
    if (event.target.value === "") {
      setFormData((prevState) => {
        const newState = [...prevState];
        newState[0] = false;
        return newState;
      });
    } else {
      setFormData((prevState) => {
        const newState = [...prevState];
        newState[0] = true;
        setChildFirstName(event.target.value);
        return newState;
      });
    }
  };

  const handleLastNameChange = (event: any) => {
    if (event.target.value === "") {
      setFormData((prevState) => {
        const newState = [...prevState];
        newState[1] = false;
        return newState;
      });
    } else {
      setFormData((prevState) => {
        const newState = [...prevState];
        newState[1] = true;
        setChildLastName(event.target.value);
        return newState;
      });
    }
  };

  const handleDateChange = (event: any) => {
    if (event.target.value === "") {
      setFormData((prevState) => {
        const newState = [...prevState];
        newState[2] = false;
        return newState;
      });
    } else {
      setFormData((prevState) => {
        const newState = [...prevState];
        newState[2] = true;
        setChildDob(event.target.value);
        return newState;
      });
    }
  };

  const handleCaseIdChange = (event: any) => {
    if (event.target.value === "") {
      setFormData((prevState) => {
        const newState = [...prevState];
        newState[3] = false;
        return newState;
      });
    } else {
      setFormData((prevState) => {
        const newState = [...prevState];
        newState[3] = true;
        setCaseId(event.target.value);
        return newState;
      });
    }
  };

  const handleCourtIdChange = (event: any) => {
    if (event.target.value === "") {
      setFormData((prevState) => {
        const newState = [...prevState];
        newState[4] = false;
        return newState;
      });
    } else {
      setFormData((prevState) => {
        const newState = [...prevState];
        newState[4] = true;
        setCourtId(event.target.value);
        return newState;
      });
    }
  };

  const isAllFalse = (array: boolean[]): boolean => {
    return array.every((element) => element === false);
  };

  const isAnyFalse = (array: boolean[]): boolean => {
    return array.some((element) => element === false);
  };

  const handleFocus = () => {
    setDateType("date");
  };

  const handleBlur = (event: any) => {
    const value = event.target.value;
    if (value) {
      const date = new Date(value);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      const formattedValue = `${day}/${month}/${year}`;
      setDateValue(formattedValue);
    }
    setDateType("text");
  };

  const playSound = () => {
    if (audio) {
      audio.currentTime = 0;
      audio
        .play()
        .catch((error) => console.error("Audio playback error:", error));
    }
  };

  const redirection = () => {
    if (isAllFalse(isClicked2) && !isAnyFalse(formData)) {
      toast.error(t("please_select_one_option"), { autoClose: 3000 });
      return;
    } else if (!isAllFalse(isClicked2) && isAnyFalse(formData)) {
      toast.error(t("please_fill_required_fields"), { autoClose: 3000 });
      return;
    } else if (isAllFalse(isClicked2) && isAnyFalse(formData)) {
      toast.error(t("please_fill_fields_and_select_option"), {
        autoClose: 3000,
      });
      return;
    } else {
      toast.success(t("setup_completed"), { autoClose: 3000 });
      const caseData = {
        practitionerEmail: practitionerEmail,
        childInfo: {
          firstName: childFirstName,
          lastName: childLasttName,
          dateOfBirth: childDob,
          courtId: courtId,
        },
        avatar: {},
        screenshots: {},
        lastVisitedPage: PageStates.Avatar,
        availablePages: availablePages,
      };

      // Store the data in localStorage
      localStorage.setItem(caseId, JSON.stringify(caseData));

      // Retrieve the existing list of case IDs, or start with an empty array if none exist
      let allCases: string[] = JSON.parse(
        localStorage.getItem("allCases") || "[]"
      );

      // Add the new case ID
      allCases.push(caseId);

      // Store the updated list back in localStorage
      localStorage.setItem("allCases", JSON.stringify(allCases));
      setTimeout(() => {
        navigate(`/avatar-creation?caseId=${caseId}`);
      }, 3000);
    }
  };

  useEffect(() => {
    const sound = new Audio(buttonSound);
    setAudio(sound);

    let configuredPages: any[] = JSON.parse(
      localStorage.getItem("configuredPages") || "[]"
    );

    if (configuredPages.length) {
      setConfiguredPages(configuredPages);
    }
  }, []);

  return (
    <div className="container-fluid p-0">
      <ToastContainer />
      <div className="row m-0 min-vh-100">
        <div className="col-12 p-0">
          <div className={classes.card}>
            <div className={`text-center ${classes.configureHead}`}>
              <h1>{t("setup_heading")}</h1>
            </div>
            <div
              className={classes.backArrow}
              onClick={() => {
                playSound();
                navigate(-1);
              }}
            >
              <i className="bi bi-arrow-left"></i>
            </div>
            <div className={`col-md-12 ${classes.details}`}>
              <div className={classes.inputGroup}>
                <label htmlFor="firstName">{t("details_label")}</label>
                <input
                  type="text"
                  id="firstName"
                  placeholder={t("first_name_placeholder")}
                  className={classes.inputField}
                  onChange={handleFirstNameChange}
                />
              </div>
              <div className={classes.inputGroup}>
                <label htmlFor="lastName" className={classes.invisibleLabel}>
                  {t("last_name_placeholder")}
                </label>{" "}
                {/* Add this label */}
                <input
                  type="text"
                  id="lastName"
                  placeholder={t("last_name_placeholder")}
                  className={classes.inputField}
                  onChange={handleLastNameChange}
                />
              </div>
              <div className={classes.inputGroup}>
                <label htmlFor="dateOfBirth">{t("dob_label")}</label>
                <input
                  type={`${dateType}`}
                  id="dateOfBirth"
                  placeholder={t("dob_placeholder")}
                  className={classes.inputField}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  value={dateType === "text" ? dateValue : dateValue}
                  onChange={(e) => {
                    setDateValue(e.target.value), handleDateChange(e);
                  }}
                />
              </div>
            </div>

            <div
              className={classes.details}
              style={{ margin: "30px 30px 30px 40px ", width: "66%" }}
            >
              <div className={classes.inputGroup}>
                <label htmlFor="case">{t("case_id_label")}</label>
                <input
                  type="text"
                  id="case"
                  placeholder={t("case_id_placeholder")}
                  className={classes.inputField}
                  onChange={handleCaseIdChange}
                />
              </div>
              <div className={classes.inputGroup}>
                <label htmlFor="court">{t("court_id_label")}</label>
                <input
                  type="text"
                  id="court"
                  placeholder={t("court_id_placeholder")}
                  className={classes.inputField}
                  onChange={handleCourtIdChange}
                />
              </div>
            </div>
            <div className={classes.boxesContainer}>
              <div className={`${classes.box} ${classes.fixedBox1}`}>
                {t("start_screen")}
              </div>
              <div className={`${classes.box} ${classes.fixedBox2}`}>
                {t("about_me")}
              </div>
              <div className={`${classes.box} ${classes.fixedBox3}`}>
                {t("summary")}
              </div>
              {configuredPages?.map(
                (page, index) =>
                  !page.isDefault && (
                    <div key={index} className={classes.boxContainer}>
                      <div
                        className={`${classes.box} ${
                          dynamicBoxColors[
                            page.label as keyof typeof dynamicBoxColors
                          ] || classes.dynamicBox
                        }`}
                        onClick={() => handleBoxClick2(index, page.id)}
                      >
                        {`${index + 2}. ${page.label}`}
                        <div className={classes.circle}>
                          {isClicked2[index] && (
                            <img
                              src={checkMark}
                              className={classes.checkMark}
                              alt="Check mark"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
            <div
              className={classes.saveButton}
              onClick={() => {
                playSound();
                redirection();
              }}
            >
              <label>{t("save_button")}</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setup;
