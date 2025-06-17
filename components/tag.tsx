"use client";
import { useState } from "react";
import { Button } from "./ui/button";

export default function Tag({ content, onPress }: { content: string, onPress?: () => void }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    if (onPress) onPress();
  };

  return (
    <Button 
      onClick={handleClick} 
      className={`
        transition-colors duration-200 custom-border
        ${isSelected 
          ? 'bg-foreground text-background hover:bg-foreground/90' 
          : 'bg-background text-foreground hover:bg-background/90'
        }
      `}
    >
      <span>{content}</span>
    </Button>
  );
}