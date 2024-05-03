export const formAdd = document.querySelector(".popup__form-card");
export const formProfileElement = document.querySelector(".popup__form");
export const openFormButton = document.querySelector(".profile__title-button");
export const openAddButton = document.querySelector(".profile__addbutton");
export const cardElements = document.querySelector(".elements");
export const selectors = {
  nameSelector: ".profile__title",
  aboutSelector: ".profile__subtitle",
};

import imgLagoAmanhecer from "../images/lago-amanhecer.png";
import imgLagoFrio from "../images/lago-frio.png";
import imgEntardecer from "../images/entardecer.png";
import imgLagoANoite from "../images/lago-a-noite.png";
import imgLagoCalmo from "../images/lago-calmo.png";
import imgLagoNasMontanhas from "../images/lago-nas-montanhas.png";

export const initialCards = [
  {
    name: "Vale de Yosemite",
    image: imgLagoAmanhecer,
  },
  {
    name: "Lago Louise",
    image: imgLagoFrio,
  },
  {
    name: "Montanhas Carecas",
    image: imgEntardecer,
  },
  {
    name: "Latemar",
    image: imgLagoANoite,
  },
  {
    name: "Parque Nacional da Vanoise",
    image: imgLagoCalmo,
  },
  {
    name: "Lago di Braies",
    image: imgLagoNasMontanhas,
  },
];
