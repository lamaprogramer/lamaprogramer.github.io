"use client"

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./theme_context";
import IconButton from "./icon_button";

function getSystemTheme() {
  return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? "dark" : "light";
}

export function ThemeControl({ iconData, className, themeName, children }) {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <IconButton
      iconData={iconData}
      className={className}
      onClick={e => setTheme(themeName == "system" ? getSystemTheme() : themeName)}
    >{children}</IconButton>
  )
}

export function HTML({ lang, children }) {
  const [theme, setTheme] = useState("light");

  function handleTheme() {
    setTheme(getSystemTheme());
  }

  useEffect(() => {
    handleTheme()
  }, [])

  return (
    <html lang={lang} data-theme={theme}>
      <ThemeContext.Provider value={[theme, setTheme]}>
        {children}
      </ThemeContext.Provider>
    </html>
  )
}