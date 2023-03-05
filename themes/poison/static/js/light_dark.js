const themeFromLS = localStorage.getItem("theme")
const themeFromHugo = document.body.classList.contains("dark-theme") ? "dark" : null
const currentTheme = themeFromLS ? themeFromLS : themeFromHugo;

if (currentTheme == "dark") {
    document.body.classList.add("dark-theme");
} 
