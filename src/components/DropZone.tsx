import React, { ReactNode, useRef } from "react";
import { useDrop } from "react-dnd";

interface DropZoneProps {
  onDrop: (
    index: number,
    position: { x: number; y: number },
    currentTab: string,
    currentPage: number,
    currentBuildingPage: number,
    currenMainEmojiPage: number
  ) => void;
  children?: ReactNode;
  currentTab: string;
  currentPage: number;
  currentBuildingPage: number;
  currentMainEmojiPage: number;
}

const DropZone: React.FC<DropZoneProps> = ({
  onDrop,
  children,
  currentTab,
  currentPage,
  currentBuildingPage,
  currentMainEmojiPage,
}) => {
  const currentTabRef = useRef(currentTab);
  const currentPageRef = useRef(currentPage);
  const currentBuildingPageRef = useRef(currentBuildingPage);
  const currentMainEmojiPageRef = useRef(currentMainEmojiPage);

  React.useEffect(() => {
    currentTabRef.current = currentTab;
  }, [currentTab]);
  React.useEffect(() => {
    currentPageRef.current = currentPage;
  }, [currentPage]);
  React.useEffect(() => {
    currentBuildingPageRef.current = currentBuildingPage;
  }, [currentBuildingPage]);
  React.useEffect(() => {
    currentMainEmojiPageRef.current = currentMainEmojiPage;
  }, [currentMainEmojiPage]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "sticker",
    drop: (item: { index: number }, monitor) => {
      const clientOffset = monitor.getClientOffset();
      if (clientOffset) {
        onDrop(
          item.index,
          { x: clientOffset.x, y: clientOffset.y },
          currentTabRef.current,
          currentPageRef.current,
          currentBuildingPageRef.current,
          currentMainEmojiPageRef.current
        );
      }
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        border: "none",
        backgroundColor: isOver ? "rgba(0, 0, 0, 0)" : "transparent",
      }}
    >
      {isOver && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 255, 0, 0.1)",
          }}
        />
      )}
      {children}
    </div>
  );
};

export default DropZone;
