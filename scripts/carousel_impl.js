function findPreviousCarouselItem(item) {
    if (item.nextElementSibling && item.nextElementSibling.hasAttribute("active")) {
        return item.nextElementSibling;
    } else if (item.previousElementSibling && item.previousElementSibling.hasAttribute("active")) {
        return item.previousElementSibling;
    }
    return null;
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

window.addEventListener("load",  (e) => {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach((carousel) => {
        let items = carousel.querySelectorAll(".carousel-item");

        items.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.stopPropagation();

                let previousItem = findPreviousCarouselItem(item);
                if (previousItem) {
                    deselectCarouselItem(previousItem);
                    selectCarouselItem(item);
                }

            })
        })
    });
});