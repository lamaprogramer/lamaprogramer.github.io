export default function Icon({ size, className, iconData }) {
  let defaultClasses = ["icon", size, className].join(" ");

  return (
    <span className={defaultClasses}>
      <i className={iconData} id="theme-indicator"></i>
    </span>
  )
}