import classes from "./Admin.module.css";
import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import buttonSound from "../../assets/button_click.wav";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PageStates } from "../Configuration/Configuration";

const Admin = () => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const navigate = useNavigate();
  const allCases: string[] = JSON.parse(
    localStorage.getItem("allCases") || "[]"
  );

  const [selectedCaseId, setSelectedCaseId] = useState<string>("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedCaseId(selectedValue);
    // Optionally, you could store the selected value back in localStorage or perform other actions
  };
  const { t } = useTranslation();

  useEffect(() => {
    const sound = new Audio(buttonSound);
    setAudio(sound);
  }, []);

  const playSound = () => {
    if (audio) {
      audio.play();
    }
  };

  const redirection = () => {
    if (selectedCaseId) {
      const currentCaseObject = JSON.parse(
        localStorage.getItem(selectedCaseId) || "{}"
      );
      setTimeout(() => {
        if (currentCaseObject.lastVisitedPage) {
          switch (currentCaseObject.lastVisitedPage) {
            case PageStates.Avatar:
              navigate(`/avatar-creation?caseId=${selectedCaseId}`);
              break;
            case PageStates.About:
              navigate(`/about?caseId=${selectedCaseId}`);
              break;
            case PageStates.Wish:
              navigate(`/make-a-wish?caseId=${selectedCaseId}`);
              break;
            case PageStates.Letter:
              navigate(`/letter-to-judge?caseId=${selectedCaseId}`);
              break;
            case PageStates.Summary:
              navigate(`/summary?caseId=${selectedCaseId}`);
              break;
            default:
              break;
          }
        } else {
          navigate(`/avatar-creation?caseId=${selectedCaseId}`);
        }
      }, 500);
    }
  };
  const redirectToSetup = () => {
    setTimeout(() => {
      navigate("/setup");
    }, 500);
  };
  const configureRedirection = () => {
    setTimeout(() => {
      navigate("/configuration");
    }, 500);
  };

  return (
    <div className="container-fluid p-0">
      <div className="row m-0 justify-content-center align-items-center min-vh-100">
        <div className="col-12 p-0">
          <div className={classes.card}>
            <div
              className={classes.backArrow}
              onClick={() => {
                playSound();
                navigate("/home");
              }}
            >
              <i className="bi bi-arrow-left"></i>
            </div>
            <div className="text-center">
              <Card className={classes.customCard} style={{ height: "350px" }}>
                <Card.Body>
                  <Card.Title className={classes.cardTitle}>
                    {t("you_have_unfinished_work")}
                  </Card.Title>
                  <Card.Text className={classes.subText}>
                    {t("choose_case_id")}
                  </Card.Text>
                  <div className={classes.selectDiv}>
                    <select
                      className="form-select"
                      size={5}
                      aria-label="size 3 select example"
                      value={selectedCaseId} // Bind the select value to the state
                      onChange={handleSelectChange} // Handle change event
                    >
                      <option>{`Select one:`}</option>
                      {allCases.map((caseId) => (
                        <option key={caseId} value={caseId}>
                          {caseId}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className={classes.adminButtons}>
                    <button
                      className={classes.continueButton}
                      onClick={() => {
                        playSound();
                        redirection();
                      }}
                    >
                      {t("continue_button")}
                    </button>
                    <button
                      className={classes.newButton}
                      onClick={() => {
                        playSound();
                        redirectToSetup();
                      }}
                    >
                      {t("new_button")}
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div className={classes.configButtonContainer}>
              <button
                className={classes.configButtonStyled}
                onClick={() => {
                  playSound();
                  configureRedirection();
                }}
              >
                {t("configuration")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
