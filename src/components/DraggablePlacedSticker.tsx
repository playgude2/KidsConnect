import React from "react";
import {
  useDrag,
  useDrop,
  DragSourceMonitor,
  DropTargetMonitor,
} from "react-dnd";

interface DraggableStickerProps {
  image: string;
  index: number;
  position: { x: number; y: number };
  updatePosition: (index: number, position: { x: number; y: number }) => void;
}

interface DraggableItem {
  index: number;
  position: { x: number; y: number };
}

const DraggablePlacedSticker: React.FC<DraggableStickerProps> = ({
  image,
  index,
  position,
  updatePosition,
}) => {
  const [{ isDragging }, drag] = useDrag<
    DraggableItem,
    void,
    { isDragging: boolean }
  >(
    () => ({
      type: "sticker",
      item: { index, position },
      collect: (monitor: DragSourceMonitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [index, position]
  );

  const [, drop] = useDrop<DraggableItem>({
    accept: "sticker",
    hover: (item, monitor: DropTargetMonitor) => {
      if (!item.position) return;

      const delta = monitor.getDifferenceFromInitialOffset();
      if (delta) {
        const newPos = {
          x: position.x + delta.x,
          y: position.y + delta.y,
        };

        if (item.position.x !== newPos.x || item.position.y !== newPos.y) {
          updatePosition(index, newPos);
          item.position = newPos;
        }
      }
    },
  });

  return (
    <img
      ref={(node) => drag(drop(node))}
      src={image}
      alt={`sticker-${index}`}
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
        width: "70px",
        opacity: isDragging ? 0.5 : 1,
      }}
    />
  );
};

export default DraggablePlacedSticker;
