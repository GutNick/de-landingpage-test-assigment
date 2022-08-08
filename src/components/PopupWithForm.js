import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popup, form) {
        super(popup);
        this._inputList = this._popup.querySelectorAll('.popup__field');
        this._formPopup =  form;
        this._successMessage = this._popup.querySelector('.popup__success');
    }

    setEventListeners() {
        super.setEventListeners();
    }

    close() {
        this._formPopup.reset();
        super.close();
        this.showSuccessMessage();
    }

    getData() {
        let data = {};
        this._inputList.forEach((input) => {
            data[`${input.name}`] = input.value;
        })
        return data;
    }

    showSuccessMessage() {
        this._formPopup.classList.toggle('popup__type_hide');
        this._successMessage.classList.toggle('popup__type_hide');
    }
}
