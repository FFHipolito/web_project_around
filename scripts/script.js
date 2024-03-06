const editProfileButtonElement = document.querySelector(
  ".profile__title-button"
);
const editProfileFormElement = document.querySelector(".popup__form");
const editProfilePopupElement = document.querySelector(".popup");
const editProfileCloseButtonElement = document.querySelector(
  ".popup__close-button"
);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameInput = document.querySelector("#name");
  const jobInput = document.querySelector("#about");

  const newName = nameInput.value;
  const newJob = jobInput.value;

  const nameInputCurrent = document.querySelector(".profile__title");
  const jobInputCurrent = document.querySelector(".profile__subtitle");

  nameInputCurrent.textContent = newName;
  jobInputCurrent.textContent = newJob;
  closeEditProfilePopup();
}

function openEditProfilePopup() {
  const nameInput = document.querySelector("#name");
  const jobInput = document.querySelector("#about");

  const nameInputCurrent = document.querySelector(".profile__title");
  const jobInputCurrent = document.querySelector(".profile__subtitle");

  nameInput.value = nameInputCurrent.textContent;
  jobInput.value = jobInputCurrent.textContent;

  editProfilePopupElement.classList.add("popup_opened");

  editProfileFormElement.addEventListener("submit", handleProfileFormSubmit);
  editProfileCloseButtonElement.addEventListener(
    "click",
    closeEditProfilePopup
  );
}

function closeEditProfilePopup() {
  editProfilePopupElement.classList.remove("popup_opened");
  editProfileCloseButtonElement.removeEventListener(
    "click",
    closeEditProfilePopup
  );
  editProfileFormElement.removeEventListener("submit", handleProfileFormSubmit);
}

const editCardButtonElement = document.querySelector(".profile__addbutton");
const editCardFormElement = document.querySelector(".popup__form-card");
const editCardPopupElement = document.querySelector(".popup__card");
const editCardCloseButtonElement = document.querySelector(
  ".close__card-button"
);

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  addNewCard();
  closeEditCardPopup();
  editCardFormElement.reset();
}

function openEditCardPopup() {
  editCardPopupElement.classList.add("popup_opened");
}

editCardFormElement.addEventListener("submit", handleCardFormSubmit);
editCardCloseButtonElement.addEventListener("click", closeEditCardPopup);

function closeEditCardPopup() {
  editCardPopupElement.classList.remove("popup_opened");
  editCardCloseButtonElement.removeEventListener("click", closeEditCardPopup);
  editCardFormElement.removeEventListener("submit", handleCardFormSubmit);
}

editProfileButtonElement.addEventListener("click", openEditProfilePopup);

editCardButtonElement.addEventListener("click", openEditCardPopup);

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

const container = document.querySelector(".card__container");
const addButton = document.querySelector(".input__card_action_button");

function addCard(card) {
  const cardTemplate = document
    .querySelector("#elements")
    .content.querySelector(".elements__card");
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector(".elements__image").setAttribute("src", card.link);
  cardElement.querySelector(".elements__image").setAttribute("alt", card.name);
  cardElement.querySelector(".elements__title").textContent = card.name;
  cardElement
    .querySelector(".elements__button-trash")
    .addEventListener("click", (evt) => {
      evt.target.parentElement.remove();
    });

  cardElement
    .querySelector(".elements__like-button")
    .addEventListener("click", (evt) => {
      evt.target.classList.toggle("active");
    });

  const elementImage = cardElement.querySelector(".elements__image");
  const imageCloseButtonElement = document.querySelector(
    ".close__image-button"
  );

  elementImage.addEventListener("click", function (evt) {
    popupImage = document.querySelector(".popup__zoom_image");
    const image = popupImage.querySelector(".popup__image");
    const name = popupImage.querySelector(".popup__image-name");
    image.src = card.link;
    image.alt = card.name;
    name.textContent = card.name;
    popupImage.classList.add("popup__zoom_opened");
  });

  function closeImagePopup() {
    popupImage.classList.remove("popup__zoom_opened");
  }

  imageCloseButtonElement.addEventListener("click", closeImagePopup);

  return cardElement;
}

for (const card of initialCards) {
  const cardItem = addCard(card);
  container.append(cardItem);
}

function addNewCard() {
  const title = document.querySelector("#title");
  const url = document.querySelector("#url");
  const cardItem = addCard({
    name: title.value,
    link: url.value,
  });
  container.prepend(cardItem);
}
