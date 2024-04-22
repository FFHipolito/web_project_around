import Popup from "./components/Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
  }

  open(data) {
    super.open();

    const imageTitle = this._popupElement.querySelector(".popup__image-name");
    const image = this._popupElement.querySelector(".popup__image");
    imageTitle.textContent = data.name;
    image.src = data.link;
    image.alt = data.name;
  }
}
