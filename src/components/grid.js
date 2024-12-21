export function GridCell({ width = {xl: 3, lg: 4, md: 6, sm: 12}, children }) {
  let defaultClasses = [];
  for (const [key, val] of Object.entries(width)) {
    defaultClasses.push(`col-${key}-${val}`);
  }

  return (
    <div className={defaultClasses.join(" ")}>
      {children}
    </div>
  )
}

export function Grid({ className, children }) {
  let defaultClasses = ["container", className].join(" ");

  return (
    <div className={defaultClasses}>
      <div className="row">
        {children}
      </div>
    </div>
  )
}