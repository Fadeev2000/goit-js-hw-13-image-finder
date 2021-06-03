export default class LoadBtn {
    constructor(selector) {
        this.buttonEls = document.querySelectorAll(selector);
     }

    
   show() {
        this.buttonEls.forEach(button => button.classList.remove('is-hidden'));
     }
    
    hidden() {
        this.buttonEls.forEach(button => button.classList.add('is-hidden'));
     }

    enable() {
        this.buttonEls.forEach(button => button.removeAttribute('disabled'));
     }
    
    disable() {
        this.buttonEls.forEach(button => button.disabled = true);
    }
}