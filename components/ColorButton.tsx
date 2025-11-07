"use client";
import { ColorButton } from "./ColorButton";
import { useToolStore } from "@/store/useToolStore";

const COLORS = [
  "#000000",
  "#FF0000",
  "#00FF00",
  "#0000FF",
  "#FFFF00",
  "#FF00FF",
  "#00FFFF",
  "#FFFFFF",
  "#FFA500",
  "#808080",
];

export const ColorPicker = () => {
  const { color, setColor } = useToolStore();

  return (
    <div className="flex flex-wrap gap-3 p-4 bg-neutral-900 rounded-xl shadow-lg">
      {COLORS.map((c) => (
        <ColorButton
          key={c}
          color={c}
          onClick={setColor}
          isActive={color === c}
        />
      ))}

      <div className="ml-4 flex items-center">
        <span className="text-white text-sm">Selected:</span>
        <div
          className="w-6 h-6 ml-2 rounded-full border-2 border-white"
          style={{ backgroundColor: color }}
        ></div>
      </div>
    </div>
  );
};
