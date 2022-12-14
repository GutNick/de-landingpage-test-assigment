export default class FormValidator {
    constructor(config, form) {
        this._config = config;
        this._formElement = form;
        this._inputList = this._formElement ? this._formElement.querySelectorAll(this._config.inputSelector) : [];
        this._buttonElement = this._formElement ? this._formElement.querySelector(this._config.submitButtonSelector) : null;
        this._inputErrorClass = this._config.inputErrorClass;
    }


    _handleFieldValidation(evt, inputErrorClass) {
        this._element = evt.target;
        const elementError = this._formElement.querySelector(`#${this._element.id}-error`);
        this._element.setCustomValidity('');
        if (this._element.value.length < 2 && this._element.classList.contains('popup__field_required')) {
            this._element.valid = false;
            this._element.setCustomValidity(`The text must be at least 2 characters. Text length now: ${this._element.value.length} character.`);
        } else {
            this._element.setCustomValidity('');
        }
        this._element.validity.valid ? this._element.classList.remove(inputErrorClass) : this._element.classList.add(inputErrorClass);
        if (elementError) {
            elementError.textContent = this._element.validationMessage;
        }
    }

    _setEventListener() {
        if (this._inputList.length > 0) {
            this._inputList.forEach((inputElement) => {
                if (inputElement.classList.contains('popup__field_required')) {
                    inputElement.required = true;
                }
                inputElement.addEventListener('change', (evt) => {
                    this._handleFieldValidation(evt, this._inputErrorClass);
                })
            });
        }
        if (this._formElement) {
            this._formElement.addEventListener('input', () => {
                this._handleFormInput();
            })
        }
    }


    _handleFormInput() {
        this._toggleButton();
    }

    _toggleButton() {
        if (this._buttonElement && this._formElement) {
            this._buttonElement.disabled = !this._formElement.checkValidity();
        }
    }

    enableValidation() {
        this._setEventListener();
    }

    resetValidation() {
        if (this._inputList.length > 0) {
            this._inputList.forEach((inputElement) => {
                inputElement.classList.remove(this._inputErrorClass);
                const elementError = this._formElement.querySelector(`#${inputElement.id}-error`);
                if (elementError) {
                    elementError.textContent = '';
                }
            });
        }
        this._toggleButton();
    }
}
