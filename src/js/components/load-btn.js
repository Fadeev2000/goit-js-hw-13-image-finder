export default class LoadBtn {
    constructor(selector) {
        //this.buttonEl = document.querySelector(selector);
        this.buttonEls = document.querySelectorAll(selector);
        //this.textBtnEnable = textBtnEnable;
        //this.textBtnDisable = textBtnDisable
        //this.refs = this.getRefs(selector);
        //hidden && this.hide();
     }

    
    lg() {
        console.log('lg', this.buttonEls);
    }

    show() {
        //this.buttonEl.classList.remove('is-hidden');
        this.buttonEls.forEach(button => button.classList.remove('is-hidden'));
     }
    
    hidden() {
        //this.buttonEl.classList.add('is-hidden');
        this.buttonEls.forEach(button => button.classList.add('is-hidden'));
     }

    enable() {
        //this.buttonEls.removeAttribute('disabled');
        this.buttonEls.forEach(button => button.removeAttribute('disabled'));
        //this.buttonEl.textContent = this.textBtnEnable;
        //this.buttonEl.textContent = 'Load more';
     }
    
    disable() {
        //this.buttonEl.disabled = true;
        this.buttonEls.forEach(button => button.disabled = true);
        //this.buttonEl.textContent = this.textBtnDisable;
    }
    
    
    
    

}