import { openImageZoomPopup } from "./utils.js";

export default class Card {
  constructor(data, cardSelector) {
    this._data = data;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__card")
      .cloneNode(true);

    return cardElement;
  }

  _setButtons() {
    this._likeButton = this._card.querySelector(".elements__like-button");
    this._trashButton = this._card.querySelector(".elements__button-trash");
    this._cardImage = this._card.querySelector(".elements__image");
  }

  getCard() {
    this._card = this._getTemplate();
    this._setButtons();
    this._setEventListeners();

    this._card.querySelector(".elements__image").src = this._data.link;
    this._card.querySelector(".elements__image").alt = this._data.name;
    this._card.querySelector(".elements__title").textContent = this._data.name;

    return this._card;
  }

  _handleLikeButton() {
    this._card
      .querySelector(".elements__like-button")
      .classList.toggle("active");
  }

  _handleTrashButton() {
    this._card.remove();
  }

  _handleOpenPopup() {
    const popup = document.querySelector(".popup-zoom-image");
    const imageTitle = popup.querySelector(".popup__image-name");
    const image = popup.querySelector(".popup__image");
    imageTitle.textContent = this._data.name;
    image.src = this._data.link;
    image.alt = this._data.name;
    openImageZoomPopup(popup);
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._handleLikeButton();
    });

    this._trashButton.addEventListener("click", () => {
      this._handleTrashButton();
    });

    this._cardImage.addEventListener("click", () => {
      this._handleOpenPopup();
    });
  }
}
