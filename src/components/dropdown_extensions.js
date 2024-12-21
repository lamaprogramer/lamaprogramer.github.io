"use client"
import { forwardRef } from "react";
import Icon from "./icon";

export const MinimalIconToggle = forwardRef(({ iconData, children, onClick }, ref) => {
  return (
  <button className="icon-button" ref={ref} onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    <Icon iconData={iconData}/>
    {children}
  </button>
)});