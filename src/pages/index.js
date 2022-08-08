import './index.css';
import {
    contactUsPopup,
    buttonOpenContactUsPopup,
    formPopupContactUs,
    formContactUsSubmit,
    config,
} from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import FetchFromData from '../components/FetchFromData';

const popupWithFormProfile = new PopupWithForm(contactUsPopup, formPopupContactUs);
popupWithFormProfile.setEventListeners();

const validationFormContactUs = new FormValidator(config, formPopupContactUs);
validationFormContactUs.enableValidation();

const fetchFormContactUs = new FetchFromData('https://localhost:3000');


buttonOpenContactUsPopup.addEventListener('click', () => {
    validationFormContactUs.resetValidation();
    popupWithFormProfile.open();
});

formPopupContactUs.addEventListener('submit', fetchData);

function fetchData(e) {
    e.preventDefault()
    const { data } = popupWithFormProfile.getData();
    fetchFormContactUs.fetchToServer({ data });
    popupWithFormProfile.showSuccessMessage();
}