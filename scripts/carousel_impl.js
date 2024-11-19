function findCurrentCarouselItem(item) {
    return item.parentElement.querySelector('[active]');
}

function deselectCarouselItem(item) {
    item.removeAttribute("active");
    let previous = item.previousElementSibling;
    let next = item.nextElementSibling;

    if (previous) item.previousElementSibling.removeAttribute("background");
    if (next) item.nextElementSibling.removeAttribute("background");
}

function selectCarouselItem(item) {
    item.setAttribute("active", true);
    let previous = item.previousElementSibling;
    let next = item.nextElementSibling;

    if (previous) item.previousElementSibling.setAttribute("background", true);
    if (next) item.nextElementSibling.setAttribute("background", true);
}

window.addEventListener("load", (e) => {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach((carousel) => {
        let content = carousel.querySelector(".carousel-content");
        let items = content.querySelectorAll(".carousel-item");

        items.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.stopPropagation();
                let previousItem = findCurrentCarouselItem(item);

                if (previousItem) {
                    deselectCarouselItem(previousItem);
                    selectCarouselItem(item);
                }

            })
        });

        let rightButton = carousel.querySelector(".carousel-scroll-right");
        let leftButton = carousel.querySelector(".carousel-scroll-left");

        rightButton.addEventListener("click", (e) => {
            let current = content.querySelector("[active]");
            let next = current.nextElementSibling;

            if (next) {
                deselectCarouselItem(current);
                selectCarouselItem(next);
            }
        });

        leftButton.addEventListener("click", (e) => {
            let current = content.querySelector("[active]");
            let previous = current.previousElementSibling;

            if (previous) {
                deselectCarouselItem(current);
                selectCarouselItem(previous);
            }
        });
    });
});