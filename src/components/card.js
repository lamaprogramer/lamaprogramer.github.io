import "./card.css"

export function CardHeader({ children }) {
  return (
    <div className="card-header">
      {children}
    </div>
  )
}

export function CardContent({ children }) {
  return (
    <div className="card-body">
      {children}
    </div>
  )
}

export function CardImage({ src, alt }) {
  return (
    <img src={src} alt={alt} className="card-img-top"/>
  )
}

export function Card({ className, children }) {
  let defaultClasses = ["card", "my-2", className].join(" ");

  return (
    <div className={defaultClasses}>
      {children}
    </div>
  )
}