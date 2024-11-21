function findCurrentCarouselItem(item) {
    return item.parentElement.querySelector('[carousel-active]');
}

function deselectCarouselItem(item) {
    item.removeAttribute("carousel-active");
    item.setAttribute("tabindex", -1);

    let previous = item.previousElementSibling;
    let next = item.nextElementSibling;

    if (previous) item.previousElementSibling.removeAttribute("carousel-background");
    if (next) item.nextElementSibling.removeAttribute("carousel-background");
}

function selectCarouselItem(item) {
    item.setAttribute("carousel-active", true);
    item.setAttribute("tabindex", 0);
    item.focus();

    let previous = item.previousElementSibling;
    let next = item.nextElementSibling;

    if (previous) item.previousElementSibling.setAttribute("carousel-background", true);
    if (next) item.nextElementSibling.setAttribute("carousel-background", true);
}

function selectPreviousCarouselItem(currentItem) {
    let previous = currentItem.previousElementSibling;

    if (previous) {
        deselectCarouselItem(currentItem);
        selectCarouselItem(previous);
    }
}

function selectNextCarouselItem(currentItem) {
    let next = currentItem.nextElementSibling;

    if (next) {
        deselectCarouselItem(currentItem);
        selectCarouselItem(next);
    }
}

window.addEventListener("load", (e) => {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach((carousel) => {
        let content = carousel.querySelector(".carousel-content");
        let items = content.querySelectorAll(".carousel-item");

        items.forEach((item) => {
            item.setAttribute("tabindex", -1);

            item.addEventListener("click", (e) => {
                e.stopPropagation();
                let currentItem = findCurrentCarouselItem(item);

                if (currentItem) {
                    deselectCarouselItem(currentItem);
                    selectCarouselItem(item);
                }
            });

            item.addEventListener("keydown", (e) => {
                e.stopPropagation();
                
                if (e.keyCode == 37) {
                    selectPreviousCarouselItem(item);
                } else if (e.keyCode == 39) {
                    selectNextCarouselItem(item);
                }
            });
        });

        let rightButton = carousel.querySelector(".carousel-scroll-right");
        let leftButton = carousel.querySelector(".carousel-scroll-left");

        rightButton.addEventListener("click", (e) => {
            selectNextCarouselItem(content.querySelector("[carousel-active]"));
        });

        leftButton.addEventListener("click", (e) => {
            selectPreviousCarouselItem(content.querySelector("[carousel-active]"));
        });

        selectCarouselItem(items[0]);
    });
});