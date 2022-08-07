import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popup, form) {
        super(popup);
        this._inputList = this._popup.querySelectorAll('.popup__field');
        this._formPopup =  form;
    }

    setEventListeners() {
        super.setEventListeners();
    }

    close() {
        this._formPopup.reset();
        super.close();
    }
}
