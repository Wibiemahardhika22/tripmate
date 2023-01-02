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
     * Form Booking
     */
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzARSArPReLA4eySHmADkk2wxcpaIU0ac0hkEG2l165YX4sUNobJKs1vSpv4G9BZrf6lg/exec';
    const form = document.forms['kontak-form'];
    const btnKrim = document.querySelector('.btn-kirim');
    const btnLoading = document.querySelector('.btn-loading');
    const alertBerhasil = document.querySelector('.s-alert');
    const alertGagal = document.querySelector('.g-alert');

    form.addEventListener('submit', e => {
        e.preventDefault()
        btnLoading.classList.toggle('d-none');
        btnKrim.classList.toggle('d-none');
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                btnLoading.classList.toggle('d-none');
                btnKrim.classList.toggle('d-none');
                alertBerhasil.classList.toggle('d-none');
                form.reset();
                console.log('Success!', response)
            })

            .catch(error => {
                btnLoading.classList.toggle('d-none');
                btnKrim.classList.toggle('d-none');
                alertGagal.classList.toggle('d-none');
                form.reset();
                console.error('Error!', error.message)
            })
    })


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