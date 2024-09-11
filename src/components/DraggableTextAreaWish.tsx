import React, { useRef, useEffect } from "react";
import dragIcon from "../assets/TextEditorComponents/drag.png";
import deleteIcon from "../assets/TextEditorComponents/deleteIcon.png";

interface DraggableTextArea {
  showEditor: boolean;
  fontSize: number | null;
  fontColor: string | null;
  fontFamily: string | null;
  isUndoClicked: boolean | null;
  onUndoComplete: () => void;
}

const DraggableTextareaWish: React.FC<DraggableTextArea> = ({
  showEditor,
  fontSize,
  fontColor,
  fontFamily,
  isUndoClicked,
  onUndoComplete,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;

    if (!wrapper) return;

    let startLeft: number, startTop: number;
    let initialMouseX: number, initialMouseY: number;

    const handleMouseDown = (e: MouseEvent) => {
      if ((e.target as HTMLElement).className !== "dragImg") return;

      initialMouseX = e.clientX;
      initialMouseY = e.clientY;
      startLeft = wrapper.offsetLeft;
      startTop = wrapper.offsetTop;
      isDraggingRef.current = true;

      const handleMouseMove = (e: MouseEvent) => {
        if (!isDraggingRef.current) return;
        const dx = e.clientX - initialMouseX;
        const dy = e.clientY - initialMouseY;
        if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
          wrapper.style.left = `${startLeft + dx}px`;
          wrapper.style.top = `${startTop + dy}px`;
        }
      };

      const handleMouseUp = () => {
        isDraggingRef.current = false;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    const handleWrapperMouseDown = (e: MouseEvent) => {
      if (isDraggingRef.current) {
        e.preventDefault();
      }
    };

    wrapper.addEventListener("mousedown", handleMouseDown);
    wrapper.addEventListener("mousedown", handleWrapperMouseDown);

    return () => {
      wrapper.removeEventListener("mousedown", handleMouseDown);
      wrapper.removeEventListener("mousedown", handleWrapperMouseDown);
    };
  }, []);

  const clearContent = () => {
    if (textareaRef.current) {
      textareaRef.current.value = "";
    }
  };

  useEffect(() => {
    if (isUndoClicked) {
      clearContent();
      onUndoComplete();
    }
  }, [isUndoClicked]);

  return (
    <div
      ref={wrapperRef}
      style={{
        position: "absolute",
        top: "40%",
        left: "45%",
        zIndex: 1,
        cursor: "default",
        width: "fit-content",
      }}
    >
      <img
        src={dragIcon}
        className="dragImg"
        alt="Drag Icon"
        style={{
          position: "absolute",
          top: "-30px",
          left: "-30px",
          cursor: "move",
          display: showEditor ? "" : "none",
        }}
      />
      <textarea
        ref={textareaRef}
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "#FDF39E",
          resize: "none",
          paddingTop: "20px",
          fontSize: `${fontSize}pt`,
          display: showEditor ? "" : "none",
          color: `${fontColor}`,
          fontFamily: `${fontFamily}`,
        }}
      ></textarea>
      <img
        src={deleteIcon}
        alt="Delete Icon"
        onClick={clearContent}
        style={{
          position: "absolute",
          top: "-30px",
          left: "160px",
          cursor: "pointer",
          display: showEditor ? "" : "none",
        }}
      />
    </div>
  );
};

export default DraggableTextareaWish;
