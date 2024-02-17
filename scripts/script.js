const editButtonElement = document.querySelector(".profile__title-button");
const formElement = document.querySelector(".popup__form");
const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = document.querySelector(".popup__close-button");
const likeButtonElements = document.querySelectorAll(".elements__like-button");

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
  closePopup();
}

function openPopup() {
  const nameInput = document.querySelector("#name");
  const jobInput = document.querySelector("#about");

  const nameInputCurrent = document.querySelector(".profile__title");
  const jobInputCurrent = document.querySelector(".profile__subtitle");

  nameInput.value = nameInputCurrent.textContent;
  jobInput.value = jobInputCurrent.textContent;

  popupElement.classList.add("popup_opened");

  formElement.addEventListener("submit", handleProfileFormSubmit);
  popupCloseButtonElement.addEventListener("click", closePopup);
}

function closePopup() {
  popupElement.classList.remove("popup_opened");
}

function toggleLikeDislike(evt) {
  const likeButtonClickedElement = evt.target;
  likeButtonClickedElement.classList.toggle("active");
}

editButtonElement.addEventListener("click", openPopup);
likeButtonElements.forEach((el) =>
  el.addEventListener("click", toggleLikeDislike)
);
