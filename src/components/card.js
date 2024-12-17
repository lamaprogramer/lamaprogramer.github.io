export function CardHeader({ children }) {
  return (
    <header className="card-header">
      {children}
    </header>
  )
}

export function CardContent({ children }) {
  return (
    <div className="card-content">
      <div className="content">
        {children}
      </div>
    </div>
  )
}

export function CardImage({ src, alt }) {
  return (
    <div className="card-image">
      <figure className="image">
      {/* <Image id="fullbody" src={src} alt={alt}/> */}
        <img id="fullbody" src={src} alt={alt} />
      </figure>
    </div>
  )
}

export function Card({ className, children }) {
  return (
    <div className={"card " + className}>
      {children}
    </div>
  )
}