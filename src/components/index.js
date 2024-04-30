import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import Section from "./Section.js";
import { initialCards } from "./utils.js";
import UserInfo from "./UserInfo.js";
import {
  formAdd,
  formProfileElement,
  openFormButton,
  openAddButton,
  selectors,
} from "./utils.js";

const popupSelector = ".popup-zoom-image";
const imageElement = document.querySelector(".popup__image");
const captionElement = document.querySelector(".popup__image-name");
const popupWithImage = new PopupWithImage(
  popupSelector,
  imageElement,
  captionElement,
  () => handleImageClick()
);

popupWithImage.setEventListeners();

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const newCard = new Card(item, "#template", popupWithImage);
      const cardElement = newCard.generateCard();
      cardSection.addItem(cardElement);
    },
  },
  ".elements"
);

cardSection.render();

const userInfo = new UserInfo(selectors);

const popupProfile = new PopupWithForm({
  popupSelector: ".popup",
  submitCallback: ({ name, about }) => {
    userInfo.setUserInfo(name, about);
  },
});

popupProfile.setEventListeners();

openFormButton.addEventListener("click", () => {
  userInfo.getUserInfo();
  popupProfile.open();
});

const popupAddForm = new PopupWithForm({
  popupSelector: ".popup_card",
  submitCallback: () => {
    const dataCard = {
      name: document.querySelector(".popup__input-text_title").value,
      image: document.querySelector(".popup__input-text_url").value,
    };
    const newCard = new Card(dataCard, "#template", popupWithImage);
    const cardElement = newCard.generateCard();
    document.querySelector(".elements").prepend(cardElement);
  },
});

popupAddForm.setEventListeners();

openAddButton.addEventListener("click", () => {
  popupAddForm.open();
});

const formConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input-text",
  submitButtonSelector: ".popup__input-submit",
  inactiveButtonClass: "popup__input-disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error",
  errorClassVisible: "popup__error_visible",
};

const formValidatorAdd = new FormValidator(formConfig, formAdd);
formValidatorAdd.enableValidation();

const formValidatorProfile = new FormValidator(formConfig, formProfileElement);
formValidatorProfile.enableValidation();
