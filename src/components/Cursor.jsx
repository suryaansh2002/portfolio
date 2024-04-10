import React from 'react'
import AnimatedCursor from "react-animated-cursor";
import { useTheme } from '@/context/ThemeContext';
export default function Cursor() {
    const { theme, toggleTheme } = useTheme();
    
  return (
    <AnimatedCursor
    innerSize={20}
    outerSize={20}
    color={theme=='light' ? "0,0,0" : "255, 255, 255"}
    outerAlpha={0.2}
    innerScale={0.7}
    outerScale={5}
    clickables={[
      "a",
      'input[type="text"]',
      'input[type="email"]',
      'input[type="number"]',
      'input[type="submit"]',
      'input[type="image"]',
      "label[for]",
      "select",
      "textarea",
      "button",
      ".link",
    ]}
  />
  )
}
