import { useState, useEffect } from "react";
import classes from "./Avatar.module.css";
import body1 from "../../assets/Body/Body-1.png";
import body2 from "../../assets/Body/Body-2.png";
import body3 from "../../assets/Body/Body-3.png";
import body4 from "../../assets/Body/Body-4.png";
import body5 from "../../assets/Body/Body-5.png";
import body6 from "../../assets/Body/Body-6.png";
import body7 from "../../assets/Body/Body-7.png";
import body8 from "../../assets/Body/Body-8.png";
import body9 from "../../assets/Body/Body-9.png";
import body10 from "../../assets/Body/Body-10.png";
import body11 from "../../assets/Body/Body-11.png";
import body12 from "../../assets/Body/Body-12.png";
import head1 from "../../assets/Heads/Head-1.png";
import head2 from "../../assets/Heads/Head-2.png";
import head3 from "../../assets/Heads/Head-3.png";
import head4 from "../../assets/Heads/Head-4.png";
import head5 from "../../assets/Heads/Head-5.png";
import head6 from "../../assets/Heads/Head-6.png";
import head7 from "../../assets/Heads/Head-7.png";
import head8 from "../../assets/Heads/Head-8.png";
import head9 from "../../assets/Heads/Head-9.png";
import head10 from "../../assets/Heads/Head-10.png";
import head11 from "../../assets/Heads/Head-11.png";
import head12 from "../../assets/Heads/Head-12.png";
import head13 from "../../assets/Heads/Head-13.png";
import head14 from "../../assets/Heads/Head-14.png";
import head15 from "../../assets/Heads/Head-15.png";
import head16 from "../../assets/Heads/Head-16.png";
import head17 from "../../assets/Heads/Head-17.png";
import head18 from "../../assets/Heads/Head-18.png";
import head19 from "../../assets/Heads/Head-19.png";
import head20 from "../../assets/Heads/Head-20.png";
import head21 from "../../assets/Heads/Head-21.png";
import head22 from "../../assets/Heads/Head-22.png";
import head23 from "../../assets/Heads/Head-23.png";
import head24 from "../../assets/Heads/Head-24.png";
import head25 from "../../assets/Heads/Head-25.png";
import leg1 from "../../assets/Legs/Legs-1.png";
import leg2 from "../../assets/Legs/Legs-2.png";
import leg3 from "../../assets/Legs/Legs-3.png";
import leg4 from "../../assets/Legs/Legs-4.png";
import leg5 from "../../assets/Legs/Legs-5.png";
import leg6 from "../../assets/Legs/Legs-6.png";
import leg7 from "../../assets/Legs/Legs-7.png";
import leg8 from "../../assets/Legs/Legs-8.png";
import leg9 from "../../assets/Legs/Legs-9.png";
import leg10 from "../../assets/Legs/Legs-10.png";
import leg11 from "../../assets/Legs/Legs-11.png";
import leg12 from "../../assets/Legs/Legs-12.png";
import slope from "../../assets/slope(HD).png";
import { useNavigate } from "react-router-dom";
import buttonSound from "../../assets/button_click.wav";
import about from "../../assets/AboutMe.png";
import rightArrow from "../../assets/RightArrow.png";
import leftArrow from "../../assets/LeftArrow.png";
import { useQuery } from "../../App";
import { PageStates } from "../Configuration/Configuration";
import { useTranslation } from "react-i18next"; // Import useTranslation

export interface IAvatar {
  name: string;
  body: string;
  head: string;
  legs: string;
}

export interface ICase {
  avatar: IAvatar | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  childInfo: any;
}

const Avatar = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const { t } = useTranslation(); // Initialize the translation hook
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [currentCaseObject, setCurrentCaseObject] = useState("");
  const currentCaseId = query.get("caseId");
  const [name, setName] = useState("");

  const imagePaths = [
    body1,
    body2,
    body3,
    body4,
    body5,
    body6,
    body7,
    body8,
    body9,
    body10,
    body11,
    body12,
  ];
  const headImagePaths = [
    head1,
    head2,
    head3,
    head4,
    head5,
    head6,
    head7,
    head8,
    head9,
    head10,
    head11,
    head12,
    head13,
    head14,
    head15,
    head16,
    head17,
    head18,
    head19,
    head20,
    head21,
    head22,
    head23,
    head24,
    head25,
  ];
  const legImagePath = [
    leg1,
    leg2,
    leg3,
    leg4,
    leg5,
    leg6,
    leg7,
    leg8,
    leg9,
    leg10,
    leg11,
    leg12,
  ];

  const [selectedBody, setSelectedBody] = useState(imagePaths[0]);
  const [selectedHead, setSelectedHead] = useState(headImagePaths[0]);
  const [selectedLeg, setSelectedLeg] = useState(legImagePath[0]);

  useEffect(() => {
    const sound = new Audio(buttonSound);
    setAudio(sound);
  }, []);

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

  const playSound = () => {
    if (audio) {
      audio.play();
    }
  };

  const decrementImage = () => {
    const currentIndex = imagePaths.indexOf(selectedBody);
    const previousIndex =
      (currentIndex - 1 + imagePaths.length) % imagePaths.length;
    setSelectedBody(imagePaths[previousIndex]);
  };

  const incrementImage = () => {
    const currentIndex = imagePaths.indexOf(selectedBody);
    const nextIndex = (currentIndex + 1) % imagePaths.length;
    setSelectedBody(imagePaths[nextIndex]);
  };

  const decrementHeadImage = () => {
    const currentHeadIndex = headImagePaths.indexOf(selectedHead);
    const previousHeadIndex =
      (currentHeadIndex - 1 + headImagePaths.length) % headImagePaths.length;
    setSelectedHead(headImagePaths[previousHeadIndex]);
  };

  const incrementHeadImage = () => {
    const currentHeadIndex = headImagePaths.indexOf(selectedHead);
    const nextHeadIndex = (currentHeadIndex + 1) % headImagePaths.length;
    setSelectedHead(headImagePaths[nextHeadIndex]);
  };

  const decrementLegImage = () => {
    const currentLegIndex = legImagePath.indexOf(selectedLeg);
    const previousLegIndex =
      (currentLegIndex - 1 + legImagePath.length) % legImagePath.length;
    setSelectedLeg(legImagePath[previousLegIndex]);
  };

  const incrementLegImage = () => {
    const currentLegIndex = legImagePath.indexOf(selectedLeg);
    const nextLegIndex = (currentLegIndex + 1) % legImagePath.length;
    setSelectedLeg(legImagePath[nextLegIndex]);
  };

  const randomizeImages = () => {
    const randomBody =
      imagePaths[Math.floor(Math.random() * imagePaths.length)];
    const randomHead =
      headImagePaths[Math.floor(Math.random() * headImagePaths.length)];
    const randomLeg =
      legImagePath[Math.floor(Math.random() * legImagePath.length)];
    setSelectedBody(randomBody);
    setSelectedHead(randomHead);
    setSelectedLeg(randomLeg);
  };

  const redirection = async () => {
    if (name === "") {
      return;
    } else {
      if (currentCaseObject && currentCaseId) {
        const caseObject = JSON.parse(currentCaseObject);

        caseObject.avatar = {
          ...caseObject.avatar,
          body: selectedBody,
          head: selectedHead,
          legs: selectedLeg,
          name: name,
        };

        caseObject.lastVisitedPage = PageStates.About;

        const updatedCaseObjectString = JSON.stringify(caseObject);
        localStorage.setItem(currentCaseId, updatedCaseObjectString);

        navigate(`/about?caseId=${currentCaseId}`);
      }
    }
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
                navigate("/admin");
              }}
            >
              <i className="bi bi-arrow-left"></i>
            </div>
            <div className={`${classes.aboutImg} ${classes.stickyTop}`}>
              <img src={about} alt="" />
            </div>
            <div className={classes.labelInputContainer}>
              <label htmlFor="">{t("i_like_to_be_called")}:</label>
              <input
                type="text"
                value={name}
                placeholder={t("enter_your_name_here")}
                size={30}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className={classes.arrowContainer}>
              <img
                src={leftArrow}
                className={classes.arrowLeft}
                onClick={() => {
                  decrementHeadImage();
                  playSound();
                }}
              ></img>
              <img
                src={rightArrow}
                className={classes.arrowRight}
                onClick={() => {
                  incrementHeadImage();
                  playSound();
                }}
              ></img>
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
              <img src={selectedLeg} alt="Legs" className={classes.legImage} />
              <img src={slope} className={classes.imgFluid} alt="" />
              <button
                className={classes.randomizeButton}
                onClick={() => {
                  randomizeImages();
                  playSound();
                }}
              >
                {t("randomize_button")}
              </button>
            </div>

            <div className={classes.arrowContainerBody}>
              <img
                src={leftArrow}
                className={classes.arrowLeft}
                onClick={() => {
                  playSound();
                  decrementImage();
                }}
              ></img>
              <img
                src={rightArrow}
                className={classes.arrowRight}
                onClick={() => {
                  incrementImage();
                  playSound();
                }}
              ></img>
            </div>
            <div className={classes.arrowContainerLegs}>
              <img
                src={leftArrow}
                className={classes.arrowLeft}
                onClick={() => {
                  decrementLegImage();
                  playSound();
                }}
              ></img>
              <img
                src={rightArrow}
                className={classes.arrowRight}
                onClick={() => {
                  incrementLegImage();
                  playSound();
                }}
              ></img>
            </div>

            <div className={classes.startButtonContainer}>
              <button
                className={classes.startButton}
                onClick={() => {
                  playSound();
                  redirection();
                }}
                disabled={name === ""}
              >
                {t("start_button")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
