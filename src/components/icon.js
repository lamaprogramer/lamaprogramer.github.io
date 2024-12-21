import "./icon.css"

export default function Icon({ size, iconData, style, className }) {
  let defaultClasses = ["flex-icon", size, className].join(" ");

  return (
    <span className={defaultClasses}>
      <i style={style} className={iconData} id="theme-indicator"></i>
    </span>
  )
}