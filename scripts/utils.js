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

  const nameInput = document.querySelector("#name-input");
  const jobInput = document.querySelector("#about-input");

  const newName = nameInput.value;
  const newJob = jobInput.value;

  const nameInputCurrent = document.querySelector(".profile__title");
  const jobInputCurrent = document.querySelector(".profile__subtitle");

  nameInputCurrent.textContent = newName;
  jobInputCurrent.textContent = newJob;
  closeEditProfilePopup();
}

function openEditProfilePopup() {
  const nameInput = document.querySelector("#name-input");
  const jobInput = document.querySelector("#about-input");

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
const editCardPopupElement = document.querySelector(".popup_card");
const editCardCloseButtonElement = document.querySelector(
  ".popup__close-button_card"
);

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  closeEditCardPopup();
}

function openEditCardPopup() {
  editCardPopupElement.classList.add("popup_opened");
  editCardFormElement.addEventListener("submit", handleCardFormSubmit);
  editCardCloseButtonElement.addEventListener("click", closeEditCardPopup);
}

function closeEditCardPopup(evt) {
  editCardPopupElement.classList.remove("popup_opened");
  editCardCloseButtonElement.removeEventListener("click", closeEditCardPopup);
  editCardFormElement.removeEventListener("submit", handleCardFormSubmit);
}

editProfileButtonElement.addEventListener("click", openEditProfilePopup);

editCardButtonElement.addEventListener("click", openEditCardPopup);

editProfilePopupElement.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup")) {
    editProfilePopupElement.classList.remove("popup_opened");
  }
});

editCardPopupElement.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup_card")) {
    editCardPopupElement.classList.remove("popup_opened");
  }
});

const buttonClose = document.querySelector(".popup__close-button_image");
const editImagePopupElement = document.querySelector(".popup-zoom-image");
editImagePopupElement.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup-zoom-image")) {
    editImagePopupElement.classList.remove("popup__zoom_opened");
  }
});

function openImageZoomPopup(popup) {
  popup.classList.contains("popup-zoom-image");
  popup.classList.add("popup__zoom_opened");
}

buttonClose.addEventListener("click", () => {
  editImagePopupElement.classList.remove("popup__zoom_opened");
});

document.onkeydown = function (event) {
  if (event.key === "Escape") {
    editProfilePopupElement.classList.remove("popup_opened");
    editCardPopupElement.classList.remove("popup_opened");
    editImagePopupElement.classList.remove("popup__zoom_opened");
  }
};

function resetValidationForm(form) {
  if (form) {
    form.reset();
    const inputList = form.querySelectorAll(
      enableValidationConfig.inputSelector
    );
    inputList.forEach((inputElement) => {
      const errorElement = form.querySelector(
        `#${inputElement.id} + .${enableValidationConfig.errorClass}`
      );
      inputElement.classList.remove(enableValidationConfig.inputErrorClass);
      errorElement.classList.remove(enableValidationConfig.errorClassVisible);
      errorElement.textContent = "";
    });

    const buttonForm = form.querySelector(
      enableValidationConfig.submitButtonSelector
    );
    buttonForm.disabled = true;
    buttonForm.classList.add(enableValidationConfig.inactiveButtonClass);
  }
  return;
}

const enableValidationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input-text",
  submitButtonSelector: ".popup__input-submit",
  inactiveButtonClass: "popup__input-disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error",
  errorClassVisible: "popup__error_visible",
};

export {
  closeEditCardPopup,
  openImageZoomPopup,
  resetValidationForm,
  enableValidationConfig,
};
