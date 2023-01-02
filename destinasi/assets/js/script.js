(function () {
    /**
     * Doc Title
     */
    const docTitle = document.title;
    window.addEventListener("blur", () => {
        document.title = "Kembali lagi ke " + docTitle;
    })
    window.addEventListener("focus", () => {
        document.title = docTitle;
    })


    /**
     * Sticky Header
     */
    const nav = document.querySelector('header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            nav.classList.add('sticky');
        } else {
            nav.classList.remove('sticky');
        }
    });


    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }


    /**
     * AOS init
     */
    window.addEventListener('load', () => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        })
    });
})()