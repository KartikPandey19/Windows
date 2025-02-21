import Button from "../../../components/Common/Button";
import { useState } from "react";

export const DrawingTools = ({
  color,
  setColor,
  size,
  setSize,
  fillCanvas,
  fillcolor,
  setFillColor,
  clearCanvas,
  downloadCanvas
}) => {

  return (
    <div className="flex items-center gap-4 p-2 bg-gray-100 rounded-lg shadow-md">
      {/* Color Picker */}

      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      {/* Brush Size */}

      <input
        type="range"
        min="1"
        max="20"
        value={size}
        onChange={(e) => setSize(e.target.value)}
        className="cursor-pointer"
      />
      <span className="text-sm font-semibold">{size}px</span>

      {/* canvas filler */}

      <input
        type="color"
        value={fillcolor}
        onChange={(e) => setFillColor(e.target.value)}
      />
      <Button text="fill" onClick={fillCanvas} />

      {/* Clear Button */}
      <Button text="Clear" onClick={clearCanvas} />

      {/* Download img */}
      <Button text="Download" onClick={downloadCanvas} />
    </div>
  );
};
