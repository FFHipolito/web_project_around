export default class Card {
  constructor(dataCard, templateSelector, popupWithImage) {
    this._image = dataCard.image;
    this._name = dataCard.name;
    this._templateSelector = templateSelector;
    this._popupWithImage = popupWithImage;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector("#template")
      .content.querySelector(".elements__card")
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector(".elements__image").src = this._image;
    this._element.querySelector(".elements__title").alt = this._name;
    this._element.querySelector(".elements__title").textContent = this._name;
    return this._element;
  }

  _like() {
    const likeButton = this._element.querySelector(".elements__like-button");

    likeButton.addEventListener("click", () => {
      likeButton.classList.toggle("active");
    });
  }

  _trash() {
    const trashButton = this._element.querySelector(".elements__button-trash");

    trashButton.addEventListener("click", () => {
      const elementRemove = trashButton.closest(".elements__card");
      elementRemove.remove();
    });
  }

  _setEventListeners() {
    this._like();
    this._trash();
    this._element
      .querySelector(".elements__image")
      .addEventListener("click", () => {
        this._handleImageClick();
      });
  }

  _handleImageClick() {
    this._popupWithImage.open(this._image, this._name);
  }
}
