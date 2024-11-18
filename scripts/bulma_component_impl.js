let dropdowns = document.querySelectorAll(".dropdown")

if (dropdowns.length != 0) {
    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("click", (e) => {
            e.stopPropagation()
            dropdown.classList.toggle("is-active")
        })
    })
}