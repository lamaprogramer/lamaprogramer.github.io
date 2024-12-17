"use client"

import { useState } from "react"
import IconButton from "./icon_button"

function DropdownTrigger({ children }) {
  return (
    <div className="dropdown-trigger">
      {children}
    </div>
  )
}

function DropdownMenu({children }) {
  return (
    <div className="dropdown-menu" id="theme-dropdown" role="menu">
      <div className="dropdown-content frosted">
        {children}
      </div>
    </div>
  )
}

export function DropdownItem({ children }) {
  return (
    <div className="dropdown-item">
      {children}
    </div>
  )
}

export function Dropdown({ iconData, children }) {
  const [isActive, setIsActive] = useState(false);
  let defaultClasses = ["dropdown", "is-right"];
  if (isActive) defaultClasses.push("is-active");

  function handleActive() {
    setIsActive(!isActive);
  }

  return (
    <div className={defaultClasses.join(" ")}>
      <DropdownTrigger>
        <IconButton iconData={iconData} onClick={handleActive}/>
      </DropdownTrigger>
      <DropdownMenu>
        {children}
      </DropdownMenu>
    </div>
  )
}