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
        this._formPopup.reset();
        super.close();
        this.hideSuccessMessage();
    }

    getData() {
        let data = {};
        this._inputList.forEach((input) => {
            data[`${input.name}`] = input.value;
        })
        return data;
    }

    showSuccessMessage() {
        this._formPopup.classList.add('popup__type_hide');
        this._successMessage.classList.remove('popup__type_hide');
    }

    hideSuccessMessage() {
        this._formPopup.classList.remove('popup__type_hide');
        this._successMessage.classList.add('popup__type_hide');
    }
}
