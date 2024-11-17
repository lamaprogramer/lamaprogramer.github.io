function setDefaultTheme() {
    const siteHead = document.querySelector("html")
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        siteHead.setAttribute("data-theme", "dark")
        return;
    }
    
    siteHead.setAttribute("data-theme", "light")
    return;
}

function cycleThemes() {
    
}

window.onload = (e) => {
    setDefaultTheme();
};