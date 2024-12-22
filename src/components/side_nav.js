"use client"

import { createContext, useContext, useState } from "react";
import IconButton from "./icon_button"
import Icon from "./icon";
import "./side_nav.css"

const SideNavContext = createContext();

export function SideNavMenu({className, children}) {
  const [isOpen, setIsOpen] = useContext(SideNavContext);
  let defaultClasses = ["sidenav-menu", "border-end", className].join(" ");

  return (
    isOpen && <div className={defaultClasses}>
      <div className="sidenav-menu-header border-bottom">
        <SideNavTrigger iconData="fas fa-2x fa fa-x" className="sidenav-trigger-close"></SideNavTrigger>
      </div>
      <div className="sidenav-menu-content">
        {children}
      </div>
    </div>
  )
}

export function SideNavMenuItem({iconData, href = "#", className, children}) {
  let defaultClasses = ["sidenav-menu-item", "border", className].join(" ");

  return (
    <a href={href} className={defaultClasses}>
      <div className="sidenav-menu-item-content">
        {children}
      </div>
      <Icon iconData={iconData} className="sidenav-menu-item-icon"/>
    </a>
  )
}

export function SideNavTrigger({iconData, className, children}) {
  const [isOpen, setIsOpen] = useContext(SideNavContext);
  let defaultClasses = ["sidenav-trigger", className].join(" ");

  return (
    <IconButton 
      iconData={iconData} 
      className={defaultClasses} 
      onClick={e => setIsOpen(!isOpen)}
    >{children}</IconButton>
  )
}

export function SideNav({children}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sidenav">
      <SideNavContext.Provider value={[isOpen, setIsOpen]}>
        {children}
      </SideNavContext.Provider>
    </div>
  )
}