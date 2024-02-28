const editProfileButtonElement = document.querySelector(
  ".profile__title-button"
);
const editProfileFormElement = document.querySelector(".popup__form");
const editProfilePopupElement = document.querySelector(".popup");
const editProfileCloseButtonElement = document.querySelector(
  ".popup__close-button"
);

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

  const titleInput = document.querySelector("#title");
  const urlInput = document.querySelector("#url");

  const newTitle = titleInput.value;
  const newUrl = urlInput.value;

  const titleInputCurrent = document.querySelector(".elements__title");
  const urlInputCurrent = document.querySelector(".elements__image");

  titleInputCurrent.textContent = newTitle;
  urlInputCurrent.textContent = newUrl;
  closeEditCardPopup();
}

function openEditCardPopup() {
  const titleInput = document.querySelector("#title");
  const urlInput = document.querySelector("#url");

  const titleInputCurrent = document.querySelector(".elements__title");
  const urlInputCurrent = document.querySelector(".elements__image");

  titleInput.value = titleInputCurrent.textContent;
  urlInput.value = urlInputCurrent.textContent;

  editCardPopupElement.classList.add("popup_opened");

  editCardFormElement.addEventListener("submit", handleCardFormSubmit);
  editCardCloseButtonElement.addEventListener("click", closeEditCardPopup);
}

function closeEditCardPopup() {
  editCardPopupElement.classList.remove("popup_opened");
  editCardCloseButtonElement.removeEventListener("click", closeEditCardPopup);
  editCardFormElement.removeEventListener("submit", handleCardFormSubmit);
}

function toggleLikeDislike(evt) {
  const likeButtonClickedElement = evt.target;
  likeButtonClickedElement.classList.toggle("active");
}

editProfileButtonElement.addEventListener("click", openEditProfilePopup);

editCardButtonElement.addEventListener("click", openEditCardPopup);

likeButtonElements.forEach((el) =>
  el.addEventListener("click", toggleLikeDislike)
);
