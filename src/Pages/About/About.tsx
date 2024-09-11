/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import classes from "./About.module.css";
import { useTranslation } from "react-i18next";
import about from "../../assets/AboutName.png";
import backgroundCircles from "../../assets/circles_bg.png";
import emotion1 from "../../assets/Emojis/Emotions/Emoji-1.png";
import emotion2 from "../../assets/Emojis/Emotions/Emoji-2.png";
import emotion3 from "../../assets/Emojis/Emotions/Emoji-3.png";
import emotion4 from "../../assets/Emojis/Emotions/Emoji-4.png";
import emotion5 from "../../assets/Emojis/Emotions/Emoji-5.png";
import emotion6 from "../../assets/Emojis/Emotions/Emoji-6.png";
import emotion7 from "../../assets/Emojis/Emotions/Emoji-7.png";
import emotion8 from "../../assets/Emojis/Emotions/Emoji-8.png";
import emotion9 from "../../assets/Emojis/Emotions/Emoji-9.png";
import emotion10 from "../../assets/Emojis/Emotions/Emoji-10.png";
import emotion11 from "../../assets/Emojis/Emotions/Emoji-11.png";
import emotion12 from "../../assets/Emojis/Emotions/Emoji- ThumbsUp.png";
import animal1 from "../../assets/Emojis/Animals/Sticker-4.png";
import animal2 from "../../assets/Emojis/Animals/Sticker-7.png";
import animal3 from "../../assets/Emojis/Animals/Sticker-8.png";
import animal4 from "../../assets/Emojis/Animals/Sticker-11.png";
import animal5 from "../../assets/Emojis/Animals/Sticker-13.png";
import animal6 from "../../assets/Emojis/Animals/Sticker-17.png";
import animal7 from "../../assets/Emojis/Animals/Sticker-18.png";
import animal8 from "../../assets/Emojis/Animals/Sticker-20.png";
import animal9 from "../../assets/Emojis/Animals/Sticker-22.png";
import animal10 from "../../assets/Emojis/Animals/Sticker-23.png";
import building1 from "../../assets/Emojis/Buildings/Sticker-1.png";
import building2 from "../../assets/Emojis/Buildings/Sticker-2.png";
import building3 from "../../assets/Emojis/Buildings/Sticker-3.png";
import building4 from "../../assets/Emojis/Buildings/Sticker-5.png";
import building5 from "../../assets/Emojis/Buildings/Sticker-6.png";
import building6 from "../../assets/Emojis/Buildings/Sticker-9.png";
import building7 from "../../assets/Emojis/Buildings/Sticker-10.png";
import building8 from "../../assets/Emojis/Buildings/Sticker-12.png";
import building9 from "../../assets/Emojis/Buildings/Sticker-14.png";
import building10 from "../../assets/Emojis/Buildings/Sticker-15.png";
import building11 from "../../assets/Emojis/Buildings/Sticker-16.png";
import building12 from "../../assets/Emojis/Buildings/Sticker-19.png";
import person1 from "../../assets/Emojis/Persons/Emoji-12.png";
import person2 from "../../assets/Emojis/Persons/Emoji-13.png";
import person3 from "../../assets/Emojis/Persons/Emoji-14.png";
import person4 from "../../assets/Emojis/Persons/Emoji-15.png";
import person5 from "../../assets/Emojis/Persons/Emoji-16.png";
import person6 from "../../assets/Emojis/Persons/Emoji-17.png";
import person7 from "../../assets/Emojis/Persons/Emoji-18.png";
import person8 from "../../assets/Emojis/Persons/Emoji-19.png";
import person9 from "../../assets/Emojis/Persons/Emoji-20.png";
import person10 from "../../assets/Emojis/Persons/Emoji-21.png";
import person11 from "../../assets/Emojis/Persons/Emoji-22.png";
import person12 from "../../assets/Emojis/Persons/Emoji-23.png";
import person13 from "../../assets/Emojis/Persons/Emoji-24.png";
import person14 from "../../assets/Emojis/Persons/Emoji-25.png";
import person15 from "../../assets/Emojis/Persons/Emoji-26.png";
import person16 from "../../assets/Emojis/Persons/Emoji-27.png";
import person17 from "../../assets/Emojis/Persons/Emoji-28.png";
import person18 from "../../assets/Emojis/Persons/Emoji-29.png";
import person19 from "../../assets/Emojis/Persons/Emoji-30.png";
import person20 from "../../assets/Emojis/Persons/Emoji-31.png";
import person21 from "../../assets/Emojis/Persons/Emoji-32.png";
import person22 from "../../assets/Emojis/Persons/Emoji-33.png";
import person23 from "../../assets/Emojis/Persons/Emoji-34.png";
import person24 from "../../assets/Emojis/Persons/Emoji-35.png";
import person25 from "../../assets/Emojis/Persons/Emoji-36.png";
import person26 from "../../assets/Emojis/Persons/Emoji-37.png";
import person27 from "../../assets/Emojis/Persons/Emoji-38.png";
import person28 from "../../assets/Emojis/Persons/Emoji-39.png";
import person29 from "../../assets/Emojis/Persons/Emoji-40.png";
import person30 from "../../assets/Emojis/Persons/Emoji-41.png";
import person31 from "../../assets/Emojis/Persons/Emoji-42.png";
import person32 from "../../assets/Emojis/Persons/Emoji-43.png";
import person33 from "../../assets/Emojis/Persons/Emoji-44.png";
import person34 from "../../assets/Emojis/Persons/Emoji-45.png";
import person35 from "../../assets/Emojis/Persons/Emoji-46.png";
import person36 from "../../assets/Emojis/Persons/Emoji-47.png";
import person37 from "../../assets/Emojis/Persons/Emoji-48.png";
import person38 from "../../assets/Emojis/Persons/Emoji-49.png";
import person39 from "../../assets/Emojis/Persons/Emoji-50.png";
import person40 from "../../assets/Emojis/Persons/Emoji-51.png";
import person41 from "../../assets/Emojis/Persons/Emoji-52.png";
import person42 from "../../assets/Emojis/Persons/Emoji-53.png";
import person43 from "../../assets/Emojis/Persons/Emoji-54.png";
import person44 from "../../assets/Emojis/Persons/Emoji-55.png";
import person45 from "../../assets/Emojis/Persons/Emoji-56.png";
import person46 from "../../assets/Emojis/Persons/Emoji-57.png";
import person47 from "../../assets/Emojis/Persons/Emoji-58.png";
import person48 from "../../assets/Emojis/Persons/Emoji-59.png";
import person49 from "../../assets/Emojis/Persons/Emoji-60.png";
import white from "../../assets/Colors/white.png";
import black from "../../assets/Colors/black.png";
import darkgoldenrod from "../../assets/Colors/darkgoldenrod.png";
import grey from "../../assets/Colors/grey.png";
import red from "../../assets/Colors/red.png";
import orange from "../../assets/Colors/orange.png";
import yellow from "../../assets/Colors/yellow.png";
import lightgreen from "../../assets/Colors/lightGreen.png";
import darkgreen from "../../assets/Colors/darkGreen.png";
import lightblue from "../../assets/Colors/lightBlue.png";
import blue from "../../assets/Colors/blue.png";
import purple from "../../assets/Colors/purple.png";
import pink from "../../assets/Colors/pink.png";
import maxWidthRed from "../../assets/Colors/maxWidthRed.png";
import maxWidthWhite from "../../assets/Colors/maxWidthWhite.png";
import maxWidthPurple from "../../assets/Colors/maxWidthPurple.png";
import maxWidthLightGreen from "../../assets/Colors/maxWidthLightGreen.png";
import maxWidthPink from "../../assets/Colors/maxWidthPink.png";
import maxWidthLightBlue from "../../assets/Colors/maxWidthLightBlue.png";
import maxWidthBlack from "../../assets/Colors/maxWidthBlack.png";
import maxWidthBlue from "../../assets/Colors/maxWidthBlue.png";
import maxWidthDarkGreen from "../../assets/Colors/maxWidthDarkGreen.png";
import maxWidthYellow from "../../assets/Colors/maxWidthYellow.png";
import maxWidthDarkGoldenRod from "../../assets/Colors/maxWidthDarkGoldenRod.png";
import maxWidthGrey from "../../assets/Colors/maxWidthGrey.png";
import maxWidthOrange from "../../assets/Colors/maxWidthOrange.png";
import mediumWidthDarkGreen from "../../assets/Colors/mediumWidthDarkGreen.png";
import mediumWidthRed from "../../assets/Colors/mediumWidthRed.png";
import mediumWidthPurple from "../../assets/Colors/mediumWidthPurple.png";
import mediumWidthLightGreen from "../../assets/Colors/mediumWidthLightGreen.png";
import mediumWidthPink from "../../assets/Colors/mediumWidthPink.png";
import mediumWidthDarkGoldenRod from "../../assets/Colors/mediumWidthDarkGoldenRod.png";
import mediumWidthLightBlue from "../../assets/Colors/mediumWidthLightBlue.png";
import mediumWidthBlue from "../../assets/Colors/mediumWidthBlue.png";
import mediumWidthYellow from "../../assets/Colors/mediumWidthYellow.png";
import mediumWidthOrange from "../../assets/Colors/mediumWidthOrange.png";
import mediumWidthWhite from "../../assets/Colors/mediumWidthWhite.png";
import mediumWidthBlack from "../../assets/Colors/mediumWidthBlack.png";
import mediumWidthGrey from "../../assets/Colors/mediumWidthGrey.png";
import minWidthRed from "../../assets/Colors/minWidthRed.png";
import minWidthDarkGoldenRod from "../../assets/Colors/minWidthDarkGoldenRod.png";
import minWidthPurple from "../../assets/Colors/minWidthPurple.png";
import minWidthLightGreen from "../../assets/Colors/minWidthLightGreen.png";
import minWidthPink from "../../assets/Colors/minWidthPink.png";
import minWidthLightBlue from "../../assets/Colors/minWidthLightBlue.png";
import minWidthBlue from "../../assets/Colors/minWidthBlue.png";
import minWidthDarkGreen from "../../assets/Colors/minWidthDarkGreen.png";
import minWidthYellow from "../../assets/Colors/minWidthYellow.png";
import minWidthOrange from "../../assets/Colors/minWidthOrange.png";
import minWidthWhite from "../../assets/Colors/minWidthWhite.png";
import minWidthBlack from "../../assets/Colors/minWidthBlack.png";
import minWidthGrey from "../../assets/Colors/minWidthGrey.png";
import DropZone from "../../components/DropZone";
import DraggableSticker from "../../components/DraggableSticker";
import animalSelect from "../../assets/animalsSelect.png";
import emotionSelect from "../../assets/emojisSelect.png";
import personSelect from "../../assets/personSelect.png";
import buildingSelect from "../../assets/buildingSelect.png";
import clickAnimal from "../../assets/clickAnimal.png";
import clickPerson from "../../assets/clickPerson.png";
import clickEmotion from "../../assets/clickEmotion.png";
import clickBuilding from "../../assets/clickBuilding.png";
import leftArrow from "../../assets/LeftArrow.png";
import rightArrow from "../../assets/RightArrow.png";
import allEmojiSelect from "../../assets/allEmojiSelect.png";
import allColorsSelect from "../../assets/allColorsSelect.png";
import allTextSelect from "../../assets/allTextSelect.png";
import allTextClick from "../../assets/allTextClick.png";
import selectWorry from "../../assets/selectUnknown.png";
import clickWorry from "../../assets/allWorryClick.png";
import clickAllEmojis from "../../assets/clickAllEmojis.png";
import clickAllColors from "../../assets/allColorsClick.png";
import DraggableTextarea from "../../components/DraggableTextArea";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import questionMark from "../../assets/something_else.png";
import messageBox from "../../assets/messageBox.png";
import closeMessageIcon from "../../assets/closeMessageIcon.png";
import nextTab from "../../assets/goRight.png";
import previousTab from "../../assets/goLeft.png";
import oneToFive from "../../assets/worryComponents/1to5.png";
import oneToTen from "../../assets/worryComponents/oneToTen.png";
import negativeToPositive from "../../assets/worryComponents/negativeToPositive.png";
import twoEmotions from "../../assets/worryComponents/twoEmotions.png";
import threeEmotionsExtended from "../../assets/worryComponents/threeEmotionsExtended.png";
import threeEmotions from "../../assets/worryComponents/threeEmotions.png";
import twoEmotionsExtended from "../../assets/worryComponents/twoEmotionExtended.png";
import negativeToPositiveExtended from "../../assets/worryComponents/negativeToPositiveExtended.png";
import oneToTenExtended from "../../assets/worryComponents/oneToTenExtended.png";
import oneToFiveExtended from "../../assets/worryComponents/1to5Extended.png";
import sliderHead from "../../assets/worryComponents/sliderHead.png";
import sliderBar from "../../assets/worryComponents/sliderBar.png";
import undoButton from "../../assets/undoButton.png";
import { useCallback, useEffect, useRef, useState } from "react";
import { useQuery } from "../../App";
import html2canvas from "html2canvas";
import { PageStates } from "../Configuration/Configuration";

const About = () => {
  const { t } = useTranslation();
  const emotionImages = [
    emotion1,
    emotion2,
    emotion3,
    emotion4,
    emotion5,
    emotion6,
    emotion7,
    emotion8,
    emotion9,
    emotion10,
    emotion11,
    emotion12,
  ];
  const animalImages = [
    animal1,
    animal2,
    animal3,
    animal4,
    animal5,
    animal6,
    animal7,
    animal8,
    animal9,
    animal10,
  ];
  const buildingImages = [
    building1,
    building2,
    building3,
    building4,
    building5,
    building6,
    building7,
    building8,
    building9,
    building10,
    building11,
    building12,
  ];
  const personImages = [
    person1,
    person2,
    person3,
    person4,
    person5,
    person6,
    person7,
    person8,
    person9,
    person10,
    person11,
    person12,
    person13,
    person14,
    person15,
    person16,
    person17,
    person18,
    person19,
    person20,
    person21,
    person22,
    person23,
    person24,
    person25,
    person26,
    person27,
    person28,
    person29,
    person30,
    person31,
    person32,
    person33,
    person34,
    person35,
    person36,
    person37,
    person38,
    person39,
    person40,
    person41,
    person42,
    person43,
    person44,
    person45,
    person46,
    person47,
    person48,
    person49,
  ];

  const allEmojis = [
    emotion1,
    emotion2,
    emotion3,
    emotion4,
    emotion5,
    emotion6,
    emotion7,
    emotion8,
    emotion9,
    emotion10,
    emotion11,
    emotion12,
    animal1,
    animal2,
    animal3,
    animal4,
    animal5,
    animal6,
    animal7,
    animal8,
    animal9,
    animal10,
    building1,
    building2,
    building3,
    building4,
    building5,
    building6,
    building7,
    building8,
    building9,
    building10,
    building11,
    building12,
    person1,
    person2,
    person3,
    person4,
    person5,
    person6,
    person7,
    person8,
    person9,
    person10,
    person11,
    person12,
    person13,
    person14,
    person15,
    person16,
    person17,
    person18,
    person19,
    person20,
    person21,
    person22,
    person23,
    person24,
    person25,
    person26,
    person27,
    person28,
    person29,
    person30,
    person31,
    person32,
    person33,
    person34,
    person35,
    person36,
    person37,
    person38,
    person39,
    person40,
    person41,
    person42,
    person43,
    person44,
    person45,
    person46,
    person47,
    person48,
    person49,
  ];
  const allColors = [
    white,
    black,
    darkgoldenrod,
    grey,
    red,
    orange,
    yellow,
    lightgreen,
    darkgreen,
    lightblue,
    blue,
    purple,
    pink,
  ];
  const worry = [
    oneToFive,
    oneToTen,
    negativeToPositive,
    twoEmotions,
    threeEmotions,
  ];
  const worryExtensions = [
    oneToFiveExtended,
    oneToTenExtended,
    negativeToPositiveExtended,
    twoEmotionsExtended,
    threeEmotionsExtended,
  ];
  const [worryIndex, setWorryIndex] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  let filteredExtensions = worryExtensions.filter(
    (_, index) => worryIndex[index]
  );
  const [sliderValues, setSliderValues] = useState<number[]>(
    worryExtensions.map(() => 50)
  );

  const [isDragging, setIsDragging] = useState<boolean>(false);
  const currentSliderIndex = useRef<number | null>(null);

  const textSize = [10, 12, 14, 18, 24];

  const [textSizeClickedIndex, setTextSizeClickedIndex] = useState<
    number | null
  >(0);
  const colorMap: { [key: string]: string } = {
    maxred: maxWidthRed,
    maxwhite: maxWidthWhite,
    maxpurple: maxWidthPurple,
    maxlightgreen: maxWidthLightGreen,
    maxpink: maxWidthPink,
    maxlightblue: maxWidthLightBlue,
    maxblue: maxWidthBlue,
    maxdarkgreen: maxWidthDarkGreen,
    maxyellow: maxWidthYellow,
    maxblack: maxWidthBlack,
    maxdarkgoldenrod: maxWidthDarkGoldenRod,
    maxgrey: maxWidthGrey,
    maxorange: maxWidthOrange,
    medred: mediumWidthRed,
    medorange: mediumWidthOrange,
    meddarkgoldenrod: mediumWidthDarkGoldenRod,
    medpurple: mediumWidthPurple,
    medlightgreen: mediumWidthLightGreen,
    medpink: mediumWidthPink,
    medlightblue: mediumWidthLightBlue,
    medblue: mediumWidthBlue,
    medyellow: mediumWidthYellow,
    medwhite: mediumWidthWhite,
    medblack: mediumWidthBlack,
    medgrey: mediumWidthGrey,
    meddarkgreen: mediumWidthDarkGreen,
    minred: minWidthRed,
    minpurple: minWidthPurple,
    minlightgreen: minWidthLightGreen,
    minpink: minWidthPink,
    minlightblue: minWidthLightBlue,
    minblue: minWidthBlue,
    mindarkgreen: minWidthDarkGreen,
    minyellow: minWidthYellow,
    minwhite: minWidthWhite,
    minblack: minWidthBlack,
    mindarkgoldenrod: minWidthDarkGoldenRod,
    mingrey: minWidthGrey,
    minorange: minWidthOrange,
  };

  const textColors: { [key: string]: string } = {
    Red: maxWidthRed,
    White: maxWidthWhite,
    Purple: maxWidthPurple,
    Lightgreen: maxWidthLightGreen,
    Pink: maxWidthPink,
    Lightblue: maxWidthLightBlue,
    Blue: maxWidthBlue,
    Darkgreen: maxWidthDarkGreen,
    Yellow: maxWidthYellow,
    Black: maxWidthBlack,
    Darkgoldenrod: maxWidthDarkGoldenRod,
    Grey: maxWidthGrey,
    Orange: maxWidthOrange,
  };

  const fontFamily = ["Verdana", "Calibri", "Times New Roman", "Arial"];

  interface Sticker {
    image: string;
    position: { x: number; y: number };
  }

  const query = useQuery();
  // Retrieve the caseId from query parameters
  const currentCaseId = query.get("caseId");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const buildingItemsPerPage = 6;
  const allEmojisPerPage = 8;
  const navigate = useNavigate();
  const [droppedStickers, setDroppedStickers] = useState<Sticker[]>([]);
  const [currentTab, setCurrentTab] = useState("");
  const [currentBuildingPage, setCurrentBuildingPage] = useState(0);
  const [currentCategory, setCurrentCategory] = useState("");
  const [mainEmoji, setMainEmoji] = useState(false);
  const [mainColor, setMainColor] = useState(false);
  const [mainWorry, setMainWorry] = useState(false);
  const [isMessageBoxVisible, setIsMessageBoxVisible] = useState(false);
  const [mainTextEditor, setMainTextEditor] = useState(false);
  const [currentMainEmojiPage, setCurrentMainEmojiPage] = useState(0);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  const [fontFamilyIndex, setFontFamilyIndex] = useState<number>(0);

  const [clickedIndex, setClickedIndex] = useState("");
  const [isDrawing, setIsDrawing] = useState(false);
  const [lineWidth, setLineWidth] = useState(0);
  const [lineColor, setLineColor] = useState("");
  const [lineOpacity, setLineOpacity] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const [currentMaxColor, setCurrentMaxColor] = useState("");
  const [currentMedColor, setCurrentMedColor] = useState("");
  const [currentMinColor, setCurrentMinColor] = useState("");
  const [maxColorClicked, setMaxColorClicked] = useState(false);
  const [medColorClicked, setMedColorClicked] = useState(false);
  const [minColorClicked, setMinColorClicked] = useState(false);
  const [showEditor, setShowEditor] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<number | null>(10);
  const [textColorClicked, setTextColorClicked] = useState<number | null>(null);
  const [textColor, setTextColor] = useState<string>("black");
  const [isUndoClicked, setIsUndoClicked] = useState<boolean | null>(false);
  const [selectedBody, setSelectedBody] = useState("");
  const [selectedHead, setSelectedHead] = useState("");
  const [selectedLeg, setSelectedLeg] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (currentCaseId) {
      const currentCaseObject = JSON.parse(
        localStorage.getItem(currentCaseId) || "{}"
      );
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

  const showEmoji = useCallback(() => {
    setCurrentTab("emojis");
    setMainEmoji(false);
  }, []);
  const showAnimal = useCallback(() => {
    setCurrentTab("animals");
    setMainEmoji(false);
  }, []);
  const showBuilding = useCallback(() => {
    setCurrentTab("buildings");
    setMainEmoji(false);
  }, []);
  const showPerson = useCallback(() => {
    setCurrentTab("persons");
    setMainEmoji(false);
  }, []);
  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handlePrevBuilding = () => {
    setCurrentBuildingPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((prev) =>
      Math.min(prev + 1, Math.floor(personImages.length / itemsPerPage))
    );
  };
  const handleNextBuilding = () => {
    setCurrentBuildingPage((prev) =>
      Math.min(
        prev + 1,
        Math.floor(buildingImages.length / buildingItemsPerPage)
      )
    );
  };
  const handleNextMainEmoji = () => {
    setCurrentMainEmojiPage((prev) =>
      Math.min(prev + 1, Math.floor(allEmojis.length / allEmojisPerPage))
    );
  };
  const handlePrevMainEmoji = () => {
    setCurrentMainEmojiPage((prev) => Math.max(prev - 1, 0));
  };
  const handleTextSizeClick = (index: number) => {
    setTextSizeClickedIndex(index);
    setFontSize(textSize[index]);
  };
  const handleTextColorClicked = (index: number, colorValue: string) => {
    const colorKey = Object.entries(textColors).find(
      ([value]) => value === colorValue
    )?.[0];
    if (colorKey) {
      setTextColorClicked(index);
      setTextColor(colorKey);
    }
  };

  const currentImages = personImages.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  const currentBuildingImages = buildingImages.slice(
    currentBuildingPage * buildingItemsPerPage,
    (currentBuildingPage + 1) * buildingItemsPerPage
  );
  const currentMainEmojiImages = allEmojis.slice(
    currentMainEmojiPage * allEmojisPerPage,
    (currentMainEmojiPage + 1) * allEmojisPerPage
  );
  const handleDrop = useCallback(
    (
      index: number,
      position: { x: number; y: number },
      currentTab: string,
      currentPage: number,
      currentBuildingPage: number,
      currentMainEmojiPage: number
    ) => {
      if (currentTab === "animals" && animalImages[index] && position) {
        setDroppedStickers((prev) => [
          ...prev,
          { image: animalImages[index], position },
        ]);
      } else if (currentTab === "emojis" && emotionImages[index] && position) {
        setDroppedStickers((prev) => [
          ...prev,
          { image: emotionImages[index], position },
        ]);
      } else if (
        currentTab === "buildings" &&
        buildingImages[index] &&
        position
      ) {
        let image;
        if (currentBuildingPage === 0) {
          image = buildingImages[index];
        } else if (currentBuildingPage === 1) {
          image = buildingImages[index + 6];
        }

        if (image) {
          setDroppedStickers((prev) => [...prev, { image, position }]);
        }
      } else if (currentTab === "persons" && personImages[index] && position) {
        let image;
        if (currentPage === 0) {
          image = personImages[index];
        } else if (currentPage === 1) {
          image = personImages[index + 10];
        } else if (currentPage === 2) {
          image = personImages[index + 20];
        } else if (currentPage === 3) {
          image = personImages[index + 30];
        } else if (currentPage === 4) {
          image = personImages[index + 40];
        }

        if (image) {
          setDroppedStickers((prev) => [...prev, { image, position }]);
        }
      } else if (currentTab === "mainEmoji" && allEmojis[index] && position) {
        let image;
        if (currentMainEmojiPage === 0) {
          image = allEmojis[index];
        } else if (currentMainEmojiPage === 1) {
          image = allEmojis[index + 8];
        } else if (currentMainEmojiPage === 2) {
          image = allEmojis[index + 16];
        } else if (currentMainEmojiPage === 3) {
          image = allEmojis[index + 24];
        } else if (currentMainEmojiPage === 4) {
          image = allEmojis[index + 32];
        } else if (currentMainEmojiPage === 5) {
          image = allEmojis[index + 40];
        } else if (currentMainEmojiPage === 6) {
          image = allEmojis[index + 48];
        } else if (currentMainEmojiPage === 7) {
          image = allEmojis[index + 56];
        } else if (currentMainEmojiPage === 8) {
          image = allEmojis[index + 64];
        } else if (currentMainEmojiPage === 9) {
          image = allEmojis[index + 72];
        } else if (currentMainEmojiPage === 10) {
          image = allEmojis[index + 80];
        }

        if (image) {
          setDroppedStickers((prev) => [...prev, { image, position }]);
        }
      }
    },

    [animalImages, emotionImages, buildingImages, personImages, allEmojis]
  );

  const handleWorryClick = (index: number) => {
    setWorryIndex((prevWorryIndex) => {
      const newWorryIndex = [...prevWorryIndex];
      newWorryIndex[index] = !newWorryIndex[index];
      return newWorryIndex;
    });
  };

  const allEmojiSelection = () => {
    setCurrentCategory("faces");
    setCurrentTab("mainEmoji");
    setMainEmoji(true);
    setMainColor(false);
    setMainTextEditor(false);
    setLineColor("");
    setLineOpacity(0);
    setLineWidth(0);
    setMainWorry(false);
  };

  const allTextSelection = () => {
    setCurrentCategory("text");
    setMainEmoji(false);
    setMainColor(false);
    setMainTextEditor(true);
    setShowEditor(true);
    setMainWorry(false);
  };
  const allWorrySelection = () => {
    setCurrentCategory("allWorry");
    setMainEmoji(false);
    setMainColor(false);
    setMainTextEditor(false);
    setMainWorry(true);
  };

  const allColorsSelection = () => {
    setCurrentCategory("colors");
    setCurrentTab("mainColors");
    setMainColor(true);
    setMainEmoji(false);
    setMainTextEditor(false);
    setMedColorClicked(false);
    setMaxColorClicked(false);
    setMinColorClicked(false);
    setMainWorry(false);
  };

  const removeSticker = (indexToRemove: number) => {
    setDroppedStickers((prevStickers) =>
      prevStickers.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleMouseDown = (
    index: number,
    event: React.MouseEvent<HTMLImageElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setDraggingIndex(index);
    setDragOffset({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
    event.preventDefault();
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (draggingIndex !== null) {
      setDroppedStickers((prevStickers) =>
        prevStickers.map((sticker, i) =>
          i === draggingIndex
            ? {
                ...sticker,
                position: {
                  x: event.clientX - dragOffset.x,
                  y: event.clientY - dragOffset.y,
                },
              }
            : sticker
        )
      );
    }
  };

  const handleMouseUp = () => {
    setDraggingIndex(null);
    setDragOffset({ x: 0, y: 0 });
  };

  const changeLineColor = (index: number) => {
    const fileNameWithExt = allColors[index].slice(
      allColors[index].lastIndexOf("/") + 1
    );
    let fileName = fileNameWithExt.split(".")[0];
    fileName = fileName.toLowerCase();
    setLineColor(fileName);
    setClickedIndex(allColors[index]);
    setLineOpacity(1);
    setLineWidth(10);
    setCurrentMaxColor("max" + fileName);
    setCurrentMedColor("med" + fileName);
    setCurrentMinColor("min" + fileName);
    setMaxColorClicked(false);
    setMedColorClicked(false);
    setMinColorClicked(false);
  };

  useEffect(() => {
    if (draggingIndex !== null) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [draggingIndex, dragOffset]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.globalAlpha = lineOpacity;
        ctx.strokeStyle = lineColor;
        ctx.lineWidth = lineWidth;
        ctxRef.current = ctx;
      }
    }
  }, [lineColor, lineOpacity, lineWidth]);

  const startDrawing = (e: any) => {
    ctxRef.current?.beginPath();
    ctxRef.current?.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };
  const endDrawing = () => {
    ctxRef.current?.closePath();
    setIsDrawing(false);
  };

  const draw = (e: any) => {
    if (!isDrawing) {
      return;
    }
    ctxRef.current?.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);

    ctxRef.current?.stroke();
  };
  const handleMouseDownSlider = (index: number | null) => {
    setIsDragging(true);
    currentSliderIndex.current = index;
  };

  const handleMouseMoveSlider = (e: MouseEvent) => {
    if (!isDragging || currentSliderIndex.current === null) return;
    const sliderContainer = document.querySelectorAll(
      `.${classes.sliderContainer}`
    )[currentSliderIndex.current];
    if (!sliderContainer) return;
    const rect = sliderContainer.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newWidth = Math.min(100, Math.max(0, (offsetX / rect.width) * 100));
    setSliderValues((prev) =>
      prev.map((value, i) =>
        i === currentSliderIndex.current ? newWidth : value
      )
    );
  };

  const handleMouseUpSlider = () => {
    setIsDragging(false);
    currentSliderIndex.current = null;
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => handleMouseMoveSlider(e);
    const handleMouseUp = () => handleMouseUpSlider();

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const handleUndo = () => {
    if (currentCategory === "faces") {
      setDroppedStickers([]);
    } else if (currentCategory === "colors") {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
      }
    } else if (currentCategory === "allWorry") {
      setWorryIndex([]);
    } else if (currentCategory === "text") {
      setIsUndoClicked(true);
      setFontSize(textSize[0]);
      setFontFamilyIndex(0);
      setTextSizeClickedIndex(0);
      setTextColorClicked(null);
      setTextColor("black");
    }
  };
  const handleUndoComplete = () => {
    setIsUndoClicked(false);
  };
  const handleClearIconClick = () => {
    setShowEditor(false);
  };

  const handleScreenshotAndRedirect = async () => {
    if (currentCaseId) {
      // Capture the entire page
      const element = document.documentElement;
      if (element) {
        const canvas = await html2canvas(element, { scale: 2 });
        const imgData = canvas.toDataURL("image/jpeg", 0.7); // Adjust the quality (0.7) to reduce file size
        // Store the screenshot and redirect
        const currentCaseObject = JSON.parse(
          localStorage.getItem(currentCaseId) || "{}"
        );

        if (!currentCaseObject.screenshots) {
          currentCaseObject.screenshots = {};
        }
        currentCaseObject.screenshots.aboutPage = imgData;
        currentCaseObject.lastVisitedPage = PageStates.Wish;
        localStorage.setItem(currentCaseId, JSON.stringify(currentCaseObject));
        if (currentCaseObject.availablePages.includes(PageStates.Wish)) {
          navigate(`/make-a-wish?caseId=${currentCaseId}`);
        } else {
          navigate(`/letter-to-judge?caseId=${currentCaseId}`);
        }
      }
    }
  };

  return (
    <DropZone
      onDrop={handleDrop}
      currentTab={currentTab}
      currentPage={currentPage}
      currentBuildingPage={currentBuildingPage}
      currentMainEmojiPage={currentMainEmojiPage}
    >
      <canvas
        ref={canvasRef}
        width={window.innerWidth - 180}
        height={window.innerHeight - 265}
        style={{
          position: "absolute",
          top: 0,
          left: "6.5%",
          zIndex: isMessageBoxVisible || currentCategory === "allWorry" ? 0 : 1,
        }}
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseMove={draw}
      />
      <DraggableTextarea
        showEditor={showEditor}
        fontSize={fontSize}
        fontColor={textColor}
        fontFamily={fontFamily[fontFamilyIndex]}
        isUndoClicked={isUndoClicked}
        onUndoComplete={handleUndoComplete}
        onClearIconClick={handleClearIconClick}
      />
      <div className="container-fluid p-0">
        <div className="row m-0 justify-content-center align-items-center min-vh-100">
          <div className="col-12 p-0">
            <div className={classes.droppedStickers}>
              {droppedStickers.map((sticker, index) => (
                <img
                  key={index}
                  src={sticker.image}
                  style={{
                    position: "absolute",
                    left: sticker.position.x,
                    top: sticker.position.y,
                    width: "70px",
                    cursor: "move",
                  }}
                  onMouseDown={(event) => handleMouseDown(index, event)}
                  onDoubleClick={(event) => {
                    event.stopPropagation();
                    removeSticker(index);
                  }}
                />
              ))}
            </div>
            <div className={classes.card}>
              <div className={classes.circles}>
                <img src={backgroundCircles} alt="" />
              </div>
              <div
                className={classes.questionMark}
                style={{
                  zIndex: 1000,
                }}
                onClick={() => setIsMessageBoxVisible(true)}
              >
                <img src={questionMark} alt="" />
              </div>
              <div
                className={classes.undoButton}
                style={{
                  zIndex: 1000,
                }}
                onClick={handleUndo}
              >
                <img src={undoButton} alt="" />
              </div>
              <div
                className={classes.goNext}
                style={{
                  zIndex: 1000,
                }}
                onClick={handleScreenshotAndRedirect}
              >
                <img src={nextTab} alt="" />
              </div>
              <div
                className={classes.goPrev}
                style={{
                  zIndex: 1000,
                }}
                onClick={() =>
                  navigate(`/avatar-creation?caseId=${currentCaseId}`)
                }
              >
                <img src={previousTab} alt="" />
              </div>

              {isMessageBoxVisible && (
                <div className={classes.messageBox}>
                  <img src={messageBox} alt="Message Box" />
                  <img
                    src={closeMessageIcon}
                    alt="Message Box"
                    className={classes.closeIcon}
                    onClick={() => setIsMessageBoxVisible(false)}
                  />
                </div>
              )}
              <div className={`${classes.aboutImg} ${classes.stickyTop}`}>
                <img src={about} alt="" />

                <label className={classes.aboutLabel}>{t('about_Label', { name })}</label>


                <label
  style={{
    transform: "translate(-50%, 140%)",
    fontSize: "20px",
    color: "#FEC23A",
  }}
>
  {t('important_To_Me')}
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
                />
              </div>
              <div className={classes.categorySelect}>
                <button>
                  {currentCategory === "faces" ? (
                    <img
                      src={clickAllEmojis}
                      alt=""
                      onClick={allEmojiSelection}
                    />
                  ) : (
                    <img
                      src={allEmojiSelect}
                      alt=""
                      onClick={allEmojiSelection}
                    />
                  )}
                </button>
                <button>
                  {currentCategory === "colors" ? (
                    <img
                      src={clickAllColors}
                      alt=""
                      onClick={allColorsSelection}
                    />
                  ) : (
                    <img
                      src={allColorsSelect}
                      alt=""
                      onClick={allColorsSelection}
                    />
                  )}
                </button>
                <button>
                  {currentCategory === "text" ? (
                    <img src={allTextClick} alt="" onClick={allTextSelection} />
                  ) : (
                    <img
                      src={allTextSelect}
                      alt=""
                      onClick={allTextSelection}
                    />
                  )}
                </button>
                <button>
                  {currentCategory === "allWorry" ? (
                    <img src={clickWorry} alt="" onClick={allWorrySelection} />
                  ) : (
                    <img src={selectWorry} alt="" onClick={allWorrySelection} />
                  )}
                </button>
              </div>
              <>
                {currentCategory === "faces" ? (
                  <div className={classes.stickersSelect}>
                    <button>
                      {currentTab === "emojis" ? (
                        <img src={clickEmotion} alt="" onClick={showEmoji} />
                      ) : (
                        <img src={emotionSelect} alt="" onClick={showEmoji} />
                      )}
                    </button>
                    <button>
                      {currentTab === "buildings" ? (
                        <img
                          src={clickBuilding}
                          alt=""
                          onClick={showBuilding}
                        />
                      ) : (
                        <img
                          src={buildingSelect}
                          alt=""
                          onClick={showBuilding}
                        />
                      )}
                    </button>
                    <button>
                      {currentTab === "animals" ? (
                        <img src={clickAnimal} alt="" onClick={showAnimal} />
                      ) : (
                        <img src={animalSelect} alt="" onClick={showAnimal} />
                      )}
                    </button>
                    <button>
                      {currentTab === "persons" ? (
                        <img src={clickPerson} alt="" onClick={showPerson} />
                      ) : (
                        <img src={personSelect} alt="" onClick={showPerson} />
                      )}
                    </button>
                  </div>
                ) : null}
              </>
              <>
                {!mainEmoji && !mainColor && !mainTextEditor && !mainWorry ? (
                  <div className={classes.stickers}>
                    {currentTab === "emojis" ? (
                      emotionImages.map((image, index) => (
                        <DraggableSticker
                          key={index}
                          image={image}
                          index={index}
                        />
                      ))
                    ) : currentTab === "animals" ? (
                      animalImages.map((image, index) => (
                        <DraggableSticker
                          key={index}
                          image={image}
                          index={index}
                        />
                      ))
                    ) : currentTab === "buildings" ? (
                      <>
                        {currentBuildingPage > 0 && currentBuildingPage < 2 && (
                          <button>
                            <img
                              src={leftArrow}
                              className={classes.arrow}
                              onClick={handlePrevBuilding}
                              alt="Previous"
                            />
                          </button>
                        )}
                        {currentBuildingImages.map((image, index) => (
                          <DraggableSticker
                            key={index}
                            image={image}
                            index={index}
                          />
                        ))}
                        {currentBuildingImages.length ===
                          buildingItemsPerPage &&
                          currentBuildingPage === 0 && (
                            <button>
                              <img
                                src={rightArrow}
                                className={classes.arrow}
                                onClick={handleNextBuilding}
                                alt="Next"
                              />
                            </button>
                          )}
                      </>
                    ) : currentTab === "persons" ? (
                      <>
                        {currentPage > 0 && (
                          <button>
                            <img
                              src={leftArrow}
                              className={classes.arrow}
                              onClick={handlePrev}
                              alt="Previous"
                            />
                          </button>
                        )}
                        {currentImages.map((image, index) => (
                          <DraggableSticker
                            key={index}
                            image={image}
                            index={index}
                          />
                        ))}
                        {currentImages.length === itemsPerPage && (
                          <button>
                            <img
                              src={rightArrow}
                              className={classes.arrow}
                              onClick={handleNext}
                              alt="Next"
                            />
                          </button>
                        )}
                      </>
                    ) : null}
                  </div>
                ) : mainEmoji && !mainColor && !mainTextEditor && !mainWorry ? (
                  <div className={classes.stickers}>
                    {currentMainEmojiPage > 0 && (
                      <button>
                        <img
                          src={leftArrow}
                          className={classes.arrow}
                          onClick={handlePrevMainEmoji}
                          alt="Previous"
                        />
                      </button>
                    )}
                    {currentMainEmojiImages.map((image, index) => (
                      <DraggableSticker
                        key={index}
                        image={image}
                        index={index}
                      />
                    ))}
                    {currentMainEmojiImages.length === allEmojisPerPage && (
                      <button>
                        <img
                          src={rightArrow}
                          className={classes.arrow}
                          onClick={handleNextMainEmoji}
                          alt="Next"
                        />
                      </button>
                    )}
                  </div>
                ) : mainColor && !mainEmoji && !mainTextEditor && !mainWorry ? (
                  <div className={classes.colors}>
                    {allColors.map((image, index) => (
                      <button key={index}>
                        <img
                          src={image}
                          key={index}
                          alt=""
                          onClick={() => {
                            changeLineColor(index);
                          }}
                          style={{
                            transform:
                              clickedIndex === image
                                ? "translateY(-25px)"
                                : "none",
                            transition: "transform 0.3s ease",
                          }}
                        />
                      </button>
                    ))}
                    <span>
                      <img
                        src={colorMap[currentMaxColor]}
                        alt=""
                        style={{
                          border: maxColorClicked ? "4px solid black" : "none",

                          borderRadius: "100px",
                        }}
                        onClick={() => {
                          setMaxColorClicked(true);
                          setMedColorClicked(false);
                          setMinColorClicked(false);
                          setLineWidth(8);
                        }}
                      />
                      <img
                        src={colorMap[currentMedColor]}
                        alt=""
                        style={{
                          border: medColorClicked ? "4px solid black" : "none",

                          borderRadius: "100px",
                        }}
                        onClick={() => {
                          setMaxColorClicked(false);
                          setMedColorClicked(true);
                          setMinColorClicked(false);
                          setLineWidth(4);
                        }}
                      />
                      <img
                        src={colorMap[currentMinColor]}
                        alt=""
                        style={{
                          border: minColorClicked ? "4px solid black" : "none",
                          borderRadius: "100px",
                        }}
                        onClick={() => {
                          setMaxColorClicked(false);
                          setMedColorClicked(false);
                          setMinColorClicked(true);
                          setLineWidth(2);
                        }}
                      />
                    </span>
                  </div>
                ) : mainTextEditor && !mainEmoji && !mainColor && !mainWorry ? (
                  <div className={classes.textEditor}>
                    <label
                      htmlFor=""
                      style={{
                        color: "white",
                        fontFamily: `${fontFamily[fontFamilyIndex]}`,
                        cursor: "pointer",
                        backgroundColor: "#4C62AD",
                        padding: "10px",
                        borderRadius: "20%",
                        display: "inline-block",
                        width: fontFamilyIndex === 2 ? "200px" : "100px",
                        height: "50px",
                        textAlign: "center",
                        lineHeight: "30px",
                        transition:
                          "all 0.3s ease-in-out, opacity 0.3s ease-in-out",
                        margin: "20px",
                        marginLeft: 0,
                        whiteSpace: "nowrap",
                        fontSize: fontFamilyIndex === 2 ? "13px" : "inherit",
                      }}
                      onClick={() =>
                        fontFamilyIndex >= 3
                          ? setFontFamilyIndex(0)
                          : setFontFamilyIndex((prev) => prev + 1)
                      }
                    >
                      {fontFamily[fontFamilyIndex]}
                    </label>

                    {textSize.map((size, index) => (
                      <label
                        htmlFor=""
                        key={index}
                        onClick={() => {
                          handleTextSizeClick(index);
                        }}
                        style={{
                          fontSize: `${size + 5}px`,
                          margin: "10px",
                          color: "white",
                          fontFamily: "Microsoft Sans Serif",
                          cursor: "pointer",
                          backgroundColor:
                            textSizeClickedIndex === index ? "#4C62AD" : "",
                          padding: textSizeClickedIndex === index ? "10px" : "",
                          borderRadius: "50%",
                          display: "inline-block",
                          width:
                            textSizeClickedIndex === index ? "50px" : "auto",
                          height:
                            textSizeClickedIndex === index ? "50px" : "auto",
                          textAlign: "center",
                          lineHeight:
                            textSizeClickedIndex === index ? "30px" : "normal",
                          transition: "all 0.3s ease-in-out",
                        }}
                      >
                        {size}
                      </label>
                    ))}
                    {Object.values(textColors).map((color, index) => (
                      <img
                        src={color}
                        key={index}
                        alt=""
                        style={{
                          margin: "10px",
                          border:
                            textColorClicked === index
                              ? "4px solid black"
                              : "none",
                          padding: "5px",
                          borderRadius: "100px",
                        }}
                        onClick={() => handleTextColorClicked(index, color)}
                      />
                    ))}
                  </div>
                ) : !mainTextEditor && !mainEmoji && !mainColor && mainWorry ? (
                  <>
                    <div className={classes.worryComponent}>
                      {worry.map((image, index) => (
                        <img
                          src={image}
                          key={index}
                          alt=""
                          onClick={() => handleWorryClick(index)}
                        />
                      ))}
                    </div>

                    <div className={classes.worryComponentExtensions}>
                      {filteredExtensions.map((image, index) => (
                        <div key={index} className={classes.worryExtension}>
                          <img
                            src={image}
                            alt=""
                            className={classes.mainImage}
                          />
                          <div
                            className={classes.sliderContainer}
                            style={{
                              bottom:
                                filteredExtensions.length === 1
                                  ? "67px"
                                  : "110px",
                            }}
                          >
                            <img
                              src={sliderBar}
                              alt="Slider Bar"
                              className={classes.sliderBar}
                              style={{
                                width: `${sliderValues[index]}%`,
                              }}
                            />
                            <div className={classes.sliderBar} />
                            <img
                              src={sliderHead}
                              alt="Slider Head"
                              className={classes.sliderHead}
                              style={{ left: `${sliderValues[index]}%` }}
                              onMouseDown={() => handleMouseDownSlider(index)}
                              draggable="false"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : null}
              </>
            </div>
          </div>
        </div>
      </div>
    </DropZone>
  );
};

export default About;
