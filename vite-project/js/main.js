import "../styles/style.css";
import { menu } from "./menu";

document.querySelector(".mainb").addEventListener("click", function () {
  if (document.body.classList.contains("hot")) {
    document.body.classList.add("cold");
    document.body.classList.remove("hot");
  } else {
    document.body.classList.add("hot");
    document.body.classList.remove("cold");
  }
});

const DOMSelectors = {
  allb: document.querySelector("#all"),
  Designerb: document.querySelector("#designer"),
  summerb: document.querySelector("#summer"),
  winterb: document.querySelector("#winter"),
  kidsb: document.querySelector("#kids"),
  adultsb: document.querySelector("#adults"),
  cardcontainer: document.querySelector(".cardcontainer"),
};

function erase() {
  DOMSelectors.cardcontainer.innerHTML = "";
}

function ItemDisplay(menu) {
  document.querySelector(".cardcontainer").insertAdjacentHTML(
    "beforeend",
    `<div class="card">
      <div class="card-image">
        <img class="pic" src="${menu.img}" width="220rem" height="240rem">
      </div>
      <div class="card-content">
        <h3>${menu.name}</h3>
        <p>$${menu.price}</p>
      </div>
  </div>`
  );
}

function Displaying() {
  menu.forEach((menu) => {
    ItemDisplay(menu);
  });
}
Displaying();

function displayall() {
  menu
    .filter((menu) => menu.All === true)
    .forEach((menu) => {
      ItemDisplay(menu);
    });
}

function displayDesigner() {
  menu
    .filter((menu) => menu.Designer === true)
    .forEach((menu) => {
      ItemDisplay(menu);
    });
}
function displaySummer() {
  menu
    .filter((menu) => menu.Summer === true)
    .forEach((menu) => {
      ItemDisplay(menu);
    });
}
function displayWinter() {
  menu
    .filter((menu) => menu.winter === true)
    .forEach((menu) => {
      ItemDisplay(menu);
    });
}
function displayKids() {
  menu
    .filter((menu) => menu.Kids === true)
    .forEach((menu) => {
      ItemDisplay(menu);
    });
}
function displayAdults() {
  menu
    .filter((menu) => menu.Adult === true)
    .forEach((menu) => {
      ItemDisplay(menu);
    });
}

function Designerp() {
  erase();
  displayDesigner();
}

function Allp() {
  erase();
  displayall();
}

function Summerp() {
  erase();
  displaySummer();
}
function Winterp() {
  erase();
  displayWinter();
}
function Kidsp() {
  erase();
  displayKids();
}
function Adultsp() {
  erase();
  displayAdults();
}

DOMSelectors.Designerb.addEventListener("click", Designerp);
DOMSelectors.allb.addEventListener("click", Allp);
DOMSelectors.summerb.addEventListener("click", Summerp);
DOMSelectors.winterb.addEventListener("click", Winterp);
DOMSelectors.kidsb.addEventListener("click", Kidsp);
DOMSelectors.adultsb.addEventListener("click", Adultsp);
