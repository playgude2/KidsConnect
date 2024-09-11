import React from "react";
import { useDrag } from "react-dnd";

interface DraggableStickerProps {
  image: string;
  index: number;
}

const DraggableSticker: React.FC<DraggableStickerProps> = ({
  image,
  index,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "sticker",
    item: { index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <img
      ref={drag}
      src={image}
      height={80}
      alt={`sticker-${index}`}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: "move",
      }}
    />
  );
};

export default DraggableSticker;
