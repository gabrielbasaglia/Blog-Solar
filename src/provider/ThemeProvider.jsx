"use client";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const ThemeProvider = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <h1>ThemeProvider</h1>
    </div>
  );
};
