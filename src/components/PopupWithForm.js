import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(body, popup, form, config) {
        super(body, popup);
        this._config = config;
        this._inputList = this._popup.querySelectorAll(this._config.inputSelector);
        this._formPopup =  form;
        this._successMessage = this._popup.querySelector(this._config.successMessage);
    }

    setEventListeners() {
        super.setEventListeners();
    }

    close() {
        if (this._formPopup) {
            this._formPopup.reset();
            this.hideSuccessMessage();
        }
        super.close();
    }

    getData() {
        let data = {};
        if (this._inputList.length > 0) {
            this._inputList.forEach((input) => {
                data[`${input.name}`] = input.value;
            })
        }
        return data;
    }

    showSuccessMessage() {
        if (this._formPopup && this._successMessage) {
            this._formPopup.classList.add('popup__type_hide');
            this._successMessage.classList.remove('popup__type_hide');
        }
    }

    hideSuccessMessage() {
        if (this._formPopup && this._successMessage) {
            this._formPopup.classList.remove('popup__type_hide');
            this._successMessage.classList.add('popup__type_hide');
        }
    }
}
