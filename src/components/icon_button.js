import Icon from "./icon.js"

export default function IconButton({size, iconData, onClick, className, children}) {
  let defaultClasses = ["button", "icon-button", className].join(" ");

  return (
    <button className={defaultClasses} onClick={onClick} aria-haspopup="true" aria-controls="theme-dropdown">
      <span>{children}</span>
      <Icon size={size} iconData={iconData} />
    </button>
  )
}