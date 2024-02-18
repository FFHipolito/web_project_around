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

function toggleLikeDislike(evt) {
  const likeButtonClickedElement = evt.target;
  likeButtonClickedElement.classList.toggle("active");
}

editProfileButtonElement.addEventListener("click", openEditProfilePopup);
likeButtonElements.forEach((el) =>
  el.addEventListener("click", toggleLikeDislike)
);
