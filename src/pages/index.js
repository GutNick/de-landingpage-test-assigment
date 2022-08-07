import './index.css';
import {
    contactUsPopup,
    buttonOpenContactUsPopup,
    formPopupContactUs,
    config,
} from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';

const popupWithFormProfile = new PopupWithForm(contactUsPopup, formPopupContactUs)

popupWithFormProfile.setEventListeners();

const validationFormContactUs = new FormValidator(config, formPopupContactUs);
validationFormContactUs.enableValidation();

buttonOpenContactUsPopup.addEventListener('click', () => {
    validationFormContactUs.resetValidation();
    popupWithFormProfile.open();
});
