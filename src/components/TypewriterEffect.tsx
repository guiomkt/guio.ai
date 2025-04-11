
import React, { useState, useEffect } from "react";

interface TypewriterEffectProps {
  text: string;
  delay?: number;
  className?: string;
  showCursorWhenDone?: boolean;
  onComplete?: () => void;
}

const TypewriterEffect = ({ 
  text, 
  delay = 150,
  className,
  showCursorWhenDone = false,
  onComplete
}: TypewriterEffectProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
      onComplete?.();
    }
  }, [currentIndex, delay, text, onComplete]);

  return (
    <span className={className}>
      {displayText}
      {(!isComplete || showCursorWhenDone) && (
        <span className="inline-block h-5 w-[2px] bg-guio-red ml-1 animate-pulse"></span>
      )}
    </span>
  );
};

export default TypewriterEffect;
