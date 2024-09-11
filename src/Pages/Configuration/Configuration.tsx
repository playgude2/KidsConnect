import React, { useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import classes from "./Configuration.module.css";
import buttonSound from "../../assets/button_click.wav";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ItemType = "BOX_ITEM";

interface BoxItemProps {
  color: string;
  label: string;
  index: number;
  boxType: string;
  isInLeftBox: boolean;
  moveItem: (fromIndex: number, toBox: string, toIndex: number) => void;
}

export enum PageStates {
  Avatar = "Avatar",
  About = "About",
  Wish = "Wish",
  Letter = "Letter",
  Summary = "Summary",
}

const BoxItem: React.FC<BoxItemProps> = ({
  color,
  label,
  index,
  boxType,
  isInLeftBox,
}) => {
  const [, ref] = useDrag({
    type: ItemType,
    item: { index, boxType },
  });

  return (
    <div ref={ref} className={`${classes.boxContainer} ${classes[color]}`}>
      <span>{label}</span>
      {isInLeftBox && <div className={classes.circle}></div>}
    </div>
  );
};

const Configuration = () => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [feelBoxes, setFeelBoxes] = useState([
    {
      color: "boxBlue",
      label: t("about_me"),
      id: PageStates.About,
      isDefault: true,
    },
    {
      color: "boxTeal",
      label: t("summary"),
      id: PageStates.Summary,
      isDefault: true,
    },
  ]);
  const [feelBoxes2, setFeelBoxes2] = useState([
    {
      color: "boxLightBlue",
      label: t("letter_to_the_judge"),
      id: PageStates.Letter,
      isDefault: false,
    },
    {
      color: "boxRed",
      label: t("three_wishes"),
      id: PageStates.Wish,
      isDefault: false,
    },
  ]);
  const practitionerEmail = localStorage.getItem("practEmail") || "";
  const [emailValue, setEmailValue] = useState<string>(practitionerEmail || "");

  const moveItem = (fromIndex: number, toBox: string, toIndex: number) => {
    if (toBox === "box1") {
      const [removedItem] = feelBoxes2.splice(fromIndex, 1);
      const newFeelBoxes = [...feelBoxes];
      newFeelBoxes.splice(toIndex, 0, removedItem);
      setFeelBoxes(newFeelBoxes);
      setFeelBoxes2([...feelBoxes2]);
    } else if (toBox === "box2") {
      const [removedItem] = feelBoxes.splice(fromIndex, 1);
      const newFeelBoxes2 = [...feelBoxes2];
      newFeelBoxes2.splice(toIndex, 0, removedItem);
      setFeelBoxes2(newFeelBoxes2);
      setFeelBoxes([...feelBoxes]);
    }
  };

  useEffect(() => {
    const sound = new Audio(buttonSound);
    setAudio(sound);
  }, []);

  const playSound = () => {
    if (audio) {
      audio.currentTime = 0;
      audio
        .play()
        .catch((error) => console.error("Audio playback error:", error));
    }
  };

  const redirection = () => {
    if (feelBoxes.length === 0 && emailValue === "") {
      toast.error(t("please_add_page_and_email"));
      return;
    } else if (feelBoxes.length > 0 && emailValue === "") {
      toast.error(t("please_enter_email"));
      return;
    } else if (feelBoxes.length === 0 && emailValue !== "") {
      toast.error(t("please_add_page"));
      return;
    } else if (feelBoxes.length > 0 && emailValue !== "") {
      toast.success(t("configuration_saved"), {
        autoClose: 3000,
      });
      localStorage.setItem("practEmail", emailValue);
      localStorage.setItem("configuredPages", JSON.stringify(feelBoxes));

      setTimeout(() => {
        navigate("/setup");
      }, 3000);
    }
  };

  const [, dropBox1] = useDrop({
    accept: ItemType,
    drop: (item: { index: number; boxType: string }) => {
      moveItem(item.index, "box1", feelBoxes.length);
    },
  });

  const [, dropBox2] = useDrop({
    accept: ItemType,
    drop: (item: { index: number; boxType: string }) => {
      moveItem(item.index, "box2", feelBoxes2.length);
    },
  });

  useEffect(() => {
    // Retrieve the existing list of case IDs, or start with an empty array if none exist
    let configuredPages: any[] = JSON.parse(
      localStorage.getItem("configuredPages") || "[]"
    );

    if (configuredPages.length) {
      setFeelBoxes(configuredPages);
      const feelBoxIds = configuredPages?.map((box) => box.id);
      const updatedFeelBoxes2 = feelBoxes2.filter(
        (box) => !feelBoxIds.includes(box.id)
      );
      setFeelBoxes2(updatedFeelBoxes2);
    }
  }, []);

  return (
    <div className="container-fluid p-0">
      <ToastContainer />
      <div className="row m-0 min-vh-100">
        <div className="col-12 p-0">
          <div className={classes.card}>
            <div className={`text-center ${classes.configureHead}`}>
              <h1>{t("configuration")}</h1>
            </div>
            <div
              className={classes.backArrow}
              onClick={() => {
                playSound();
                navigate("/admin");
              }}
            >
              <i className="bi bi-arrow-left"></i>
            </div>
            <div className={`col-md-4 ${classes.practitionerData}`}>
              <label htmlFor="practitionerEmail">
                {t("practitioner_email")}
              </label>
              <input
                type="text"
                id="practitionerEmail"
                placeholder={t("enter_practitioner_email")}
                className={classes.inputField}
                onChange={(e) => setEmailValue(e.target.value)}
                value={emailValue}
              />
            </div>
            <div className={classes.boxes}>
              <div ref={dropBox1} className={classes.box1Container}>
                <div className={classes.box1Elements}>
                  {feelBoxes.map((box, index) => (
                    <BoxItem
                      key={index}
                      color={box.color}
                      label={box.label}
                      index={index}
                      boxType="box1"
                      moveItem={moveItem}
                      isInLeftBox={true}
                    />
                  ))}
                </div>
              </div>

              <div ref={dropBox2} className={classes.box2Container}>
                <div className={classes.box2Elements}>
                  {feelBoxes2.map((box, index) => (
                    <BoxItem
                      key={index}
                      color={box.color}
                      label={box.label}
                      index={index}
                      boxType="box2"
                      moveItem={moveItem}
                      isInLeftBox={false}
                    />
                  ))}
                </div>
              </div>
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

export default Configuration;
