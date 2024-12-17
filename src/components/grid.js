export function GridCell({ children }) {
  return (
    <div className="cell">
      {children}
    </div>
  )
}

export function Grid({ columnMin, className, children }) {
  let defaultClasses = ["grid", "is-col-min-" + columnMin, className].join(" ");

  return (
    <div className={defaultClasses}>
      {children}
    </div>
  )
}