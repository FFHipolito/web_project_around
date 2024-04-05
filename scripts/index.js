import { FormValidator } from "./FormValidator.js";
import { Card } from "./Card.js";
import { resetValidationForm, enableValidationConfig } from "./utils.js";

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

const container = document.querySelector(".elements");
const forms = Array.from(document.querySelectorAll(".popup__form"));

function createPost(post) {
  const cardSelector = "#template";
  const newPost = new Card(post, cardSelector).getCard();

  return newPost;
}

function setInitialPosts() {
  initialCards.map((post) => {
    container.append(createPost(post));
  });
}

function submitPost(form) {
  const post = {
    name: form.title.value,
    link: form.url.value,
  };
  container.prepend(createPost(post));

  resetValidationForm(form);
}

function submitProfile(form) {
  const nameText = document.querySelector(".profile__title");
  const jobText = document.querySelector(".profile__subtitle");
  nameText.textContent = form.name.value;
  jobText.textContent = form.about.value;
}

function handleSubmitForms(evt) {
  evt.preventDefault();
  const form = evt.target;
  if (
    evt.target.classList.contains("popup__form") &&
    !evt.target.classList.contains("popup__form-card")
  ) {
    return submitProfile(form);
  }
  submitPost(form);
}

function enableValidationForm(form) {
  new FormValidator({
    formElement: form,
    config: enableValidationConfig,
  }).enableValidation();
}

function enableSubmitForms(formsList) {
  formsList.forEach((form) => {
    enableValidationForm(form);
    form.addEventListener("submit", handleSubmitForms);
  });
}

setInitialPosts();
enableSubmitForms(forms);
