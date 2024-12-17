"use client"

import { useState } from "react"
import IconButton from "./icon_button"

import "./carousel.css"

export function CarouselItem({children}) {
  return (
    <div className="carousel-item">
      {children}
    </div>
  )
}

export function Carousel({children}) {
  let [selectedItem, setSelectedItem] = useState(0);
  const filteredChildren = children.filter(child => {
    return child.key === children[selectedItem].key;
  });

  function handleCarouselScrollRight(e) {
    let increment = selectedItem === children.length-1 ? children.length-1 : selectedItem+1;
    setSelectedItem(increment);
  }

  function handleCarouselScrollLeft(e) {
    let decrement = selectedItem === 0 ? 0 : selectedItem-1;
    setSelectedItem(decrement);
  }

  return (
    <div className="carousel">
      <IconButton size="is-medium" iconData="fa fa-arrow-left" onClick={handleCarouselScrollLeft} className="carousel-control" />
      <div className="carousel-content">
        {filteredChildren}
      </div>
      <IconButton size="is-medium" iconData="fa fa-arrow-right" onClick={handleCarouselScrollRight} className="carousel-control" />
    </div>
  )
}