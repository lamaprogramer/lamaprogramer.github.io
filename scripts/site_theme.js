const siteHead = document.querySelector("html");
const themeIndicator = document.querySelector("#theme-indicator")
const themeIconMap = {
    "light": "fa-sun",
    "dark": "fa-moon"
}

function getSystemTheme() {
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? "dark" : "light";
}

function storePreferedTheme(theme) {
    localStorage.setItem("theme", theme);
}

function getPreferedTheme() {
    let preferedTheme = localStorage.getItem("theme");
    return preferedTheme != "undefined" ? preferedTheme : getSystemTheme();
}

function setDefaultTheme() {
    let preferedTheme = getPreferedTheme();
    siteHead.setAttribute("data-theme", preferedTheme);
    themeIndicator.classList.replace("fa-sun", themeIconMap[preferedTheme])
    storePreferedTheme(preferedTheme);
}

function setTheme(newTheme) {
    let currentTheme = localStorage.getItem("theme")
    siteHead.setAttribute("data-theme", newTheme);
    themeIndicator.classList.replace(themeIconMap[currentTheme], themeIconMap[newTheme]);
    storePreferedTheme(newTheme);
}

window.onload = (e) => {
    setDefaultTheme();
};

const lightModeToggle = document.querySelector("#light-theme-toggle")
const darkModeToggle = document.querySelector("#dark-theme-toggle")
const systemModeToggle = document.querySelector("#system-theme-toggle")

lightModeToggle.addEventListener("click", (e) => {
    setTheme("light");
});

darkModeToggle.addEventListener("click", (e) => {
    setTheme("dark");
});

systemModeToggle.addEventListener("click", (e) => {
    setTheme(getSystemTheme());
});

