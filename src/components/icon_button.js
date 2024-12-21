import "./icon_button.css"
import Icon from "./icon.js"

export default function IconButton({
  size,
  iconData,
  iconStyle,
  buttonStyle,
  onClick,
  disabled,
  className,
  children
}) {
  let defaultClasses = ["button", "icon-button", className].join(" ");

  return (
    <button disabled={disabled} onClick={onClick} className={defaultClasses} style={buttonStyle} aria-haspopup="true" aria-controls="theme-dropdown">
      <span className="me-2">{children}</span>
      <Icon size={size} iconData={iconData} style={iconStyle}/>
    </button>
  )
}