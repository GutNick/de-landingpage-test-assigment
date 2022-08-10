export default class Popup {
    constructor(body, popup) {
        this._popup = popup;
        this._handleEscClose = this._handleEscClose.bind(this);
        this.bodyBlock = body;
    }

    open() {
        if (this._popup) {
            this._popup.classList.add('popup__type_opened');
            this._popup.classList.remove('popup__type_hide');
            document.addEventListener('keydown', this._handleEscClose);
            this.bodyBlock.classList.add('root_fixed');
        }
    }

    close() {
        if (this._popup) {
            this._popup.classList.remove('popup__type_opened');
            this._popup.classList.add('popup__type_hide');
            document.removeEventListener('keydown', this._handleEscClose);
            this.bodyBlock.classList.remove('root_fixed');
        }
    }

    _handleEscClose(evt) {
          if (evt.key === "Escape") {
            this.close();
          }
    }

    _handleOverlayClick(evt) {
        if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__button-close')) {
            this.close();
        }
    }

    setEventListeners() {
        if (this._popup) {
            this._popup.addEventListener('click', (evt) => {
                this._handleOverlayClick(evt)
            })
        }
    }
}
