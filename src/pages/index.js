import '../vendor/normalize.css';
import {
    bodyBlock,
    contactUsPopup,
    buttonOpenContactUsPopup,
    formPopupContactUs,
    config,
} from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithForm from '../components/PopupWithForm.js';
import FetchFromData from '../components/FetchFromData'

//Не думаю, что это тянет на автоматизированный сбор стилей. Но другое оптимальное решение я не нашел. Так что надеюсь на ответ в ревью.
function importAll(r) {
    r.keys().forEach(r);
}

importAll(require.context('../blocks/', true, /\.css$/));

const popupWithFormProfile = new PopupWithForm(bodyBlock, contactUsPopup, formPopupContactUs);
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
    const data = popupWithFormProfile.getData();
    fetchFormContactUs.fetchToServer(data);
    popupWithFormProfile.showSuccessMessage();
}