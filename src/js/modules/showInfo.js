export default class ShowInfo {
    constructor(triggers) {
        this.btns = document.querySelectorAll(triggers);
    }

    createAccordion() {
        this.btns.forEach((btn) => {
            btn.addEventListener('click', () => {
                let content = btn.closest('.module__info-show').nextElementSibling;

                content.classList.toggle('msg');
                content.style.marginTop = '20px';
            });
        });
    }

    init() {
        this.createAccordion();
    }
}
