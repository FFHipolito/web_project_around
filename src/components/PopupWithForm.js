import Popup from "./components/Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { submitForm }) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    this._submitForm = submitForm;
  }

  getForm() {
    return this._form;
  }

  getPopup() {
    return this._popup;
  }

  _getInputValues(evt) {
    const form = evt.target;
    this._submitForm(form);
    this.close();
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._getInputValues(evt);
    });
  }

  close() {
    super.close();
  }
}
