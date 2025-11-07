"use client";

import {
  Circle,
  Diamond,
  Eraser,
  Minus,
  MousePointer2,
  Pencil,
  Save,
  Square,
  Type,
} from "lucide-react";
import { ToolType } from "../types/excalidraw";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const toolConfig = [
  { name: "selection", label: "Selection", icon: MousePointer2 },
  { name: "pencil", label: "Pencil", icon: Pencil },
  { name: "line", label: "Line", icon: Minus },
  { name: "rectangle", label: "Rectangle", icon: Square },
  { name: "circle", label: "Circle", icon: Circle },
  { name: "diamond", label: "Diamond", icon: Diamond },
  { name: "text", label: "Text", icon: Type },
  { name: "eraser", label: "Eraser", icon: Eraser },
  { name: "save", label: "Save Excalidraw", icon: Save },
] as const;

interface ToolBarProps {
  tool: ToolType;
  setTool: (tool: ToolType) => void;
  onSave: () => void;
}

interface ToolButtonProps {
  label: string;
  icon: React.ElementType;
  onClick: () => void;
  isActive: boolean;
}

const ToolButton: React.FC<ToolButtonProps> = ({
  label,
  icon: Icon,
  onClick,
  isActive,
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={onClick}
          className={`w-11 h-11 flex items-center justify-center rounded-lg transition-colors duration-150 ease-in-out
            ${
              isActive
                ? "bg-[#FFA500] text-white"
                : "text-gray-400 hover:text-white hover:bg-zinc-800"
            }`}
        >
          <Icon className="w-5 h-5" />
        </button>
      </TooltipTrigger>
      <TooltipContent side="bottom" sideOffset={8}>
        <p className="text-sm font-medium">{label}</p>
      </TooltipContent>
    </Tooltip>
  );
};

const ToolBar: React.FC<ToolBarProps> = ({ tool, setTool, onSave }) => (
  <TooltipProvider delayDuration={150}>
    {/* Fixed toolbar centered at the top */}
    <div className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50 bg-zinc-900 border border-zinc-700 rounded-xl shadow-lg flex items-center justify-center space-x-2 px-3 py-2">
      {toolConfig.map((item) => (
        <ToolButton
          key={item.name}
          label={item.label}
          icon={item.icon}
          onClick={() =>
            item.name === "save" ? onSave() : setTool(item.name)
          }
          isActive={tool === item.name}
        />
      ))}
    </div>
  </TooltipProvider>
);

export default ToolBar;
