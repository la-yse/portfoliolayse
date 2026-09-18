
//Copyright Current Year
document.getElementById("current-year").textContent = new Date().getFullYear();

//Animations

const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach((element) => {
    observer.observe(element);
});


//Language Toggle

const languageOptions = document.querySelectorAll(".language-switch__option");
const slider = document.querySelector(".language-switch__slider");

languageOptions.forEach(option => {
    option.addEventListener("click", () => {
        const language = option.dataset.lang;

        if (language === "pt") {
            window.location.href = "/pt/";
        } else {
            window.location.href = "/";
        }
    });
});

const currentLanguage = document.querySelector(
    ".language-switch__option.active"
)?.dataset.lang;

if (currentLanguage === "pt") {
    slider.style.transform = "translateX(31px)";
}