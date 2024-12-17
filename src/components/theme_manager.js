"use client"

import { useEffect, useState } from "react";

export default function ThemeManager({children}) {
  const [theme, setTheme] = useState("light");

  function getSystemTheme() {
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? "dark" : "light";
  }

  function handleTheme() {
    setTheme(getSystemTheme());
  }

  useEffect(() => {
    handleTheme()
  }, [])

  return (
    <div className="theme-manager" data-theme={theme}>
      {children}
    </div>
  )
}