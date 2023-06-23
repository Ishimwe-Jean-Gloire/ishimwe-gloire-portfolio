const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc => {
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')
    })
})


const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.body.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-sun-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


// Scroll To Top Button Here --->

const scrollBtn = document.getElementById("scrollButton");

window.addEventListener("scroll", function() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
})
scrollBtn.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// Downlaod Button Section

let button = document.querySelector('.button');
button.addEventListener("click", () => {
    const span = document.querySelector("a span");
    button.style.paddingRight = "-5px";
    span.style.visibility = "visible";
    setTimeout(() => {
        span.style.visibility = "hidden";
        button.style.transition = ".3s ease-in-out";
        button.style.paddingRight = "-5px";
    }, 7000)
})

// ScrollReveal Section



// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '60px',
//     duration: 2500,
//     delay: 400,

// })
// sr.reveal('.profile__border')
// sr.reveal('.profile__name', { delay: 500 })
// sr.reveal('.profile__profession', { delay: 600 })
// sr.reveal('.profile__social', { delay: 700 })
// sr.reveal('.profile__info-group', { interval: 100, delay: 700 })
// sr.reveal('.profile__buttons', { delay: 800 })
// sr.reveal('.filters__content', { delay: 900 })
// sr.reveal('.filters', { delay: 1000 })
// sr.reveal('.profile__profession', { delay: 600 })
// sr.reveal('.profile__social', { delay: 700 })
// sr.reveal('.profile__info-group', { interval: 100, delay: 700 })
// sr.reveal('.profile__buttons', { delay: 800 })
// sr.reveal('.filters__content', { delay: 900 })
// sr.reveal('.filters', { delay: 1000 })



// Javascript to control page title