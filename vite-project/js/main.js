import "../styles/style.css";
document.querySelector(".mainb").addEventListener("click", function () {
  if (document.body.classList.contains("hot")) {
    document.body.classList.add("cold");
    document.body.classList.remove("hot");
  } else {
    document.body.classList.add("hot");
    document.body.classList.remove("cold");
  }
});

const cards = [
  {
    Id: document.querySelector("#card1"),
    Kids: true,
    Adult: false,
    Summer: true,
    winter: false,
    Designer: false,
    All: true,
  },
  {
    Id: document.querySelector("#card2"),
    Kids: true,
    Adult: false,
    Summer: true,
    winter: false,
    Designer: false,
    All: true,
  },
  {
    Id: document.querySelector("#card3"),
    Kids: true,
    Adult: true,
    Summer: true,
    winter: false,
    Designer: false,
    All: true,
  },
  {
    Id: document.querySelector("#card4"),
    Kids: false,
    Adult: true,
    Summer: false,
    winter: true,
    Designer: false,
    All: true,
  },
  {
    Id: document.querySelector("#card5"),
    Kids: true,
    Adult: true,
    Summer: true,
    winter: false,
    Designer: true,
    All: true,
  },
  {
    Id: document.querySelector("#card6"),
    Kids: true,
    Adult: true,
    Summer: true,
    winter: true,
    Designer: true,
    All: true,
  },
  {
    Id: document.querySelector("#card7"),
    Kids: false,
    Adult: true,
    Summer: true,
    winter: true,
    Designer: true,
    All: true,
  },
  {
    Id: document.querySelector("#card8"),
    Kids: false,
    Adult: true,
    Summer: false,
    winter: true,
    Designer: false,
    All: true,
  },
  {
    Id: document.querySelector("#card9"),
    Kids: false,
    Adult: true,
    Summer: true,
    winter: false,
    Designer: false,
    All: true,
  },
  {
    Id: document.querySelector("#card10"),
    Kids: true,
    Adult: false,
    Summer: true,
    winter: false,
    Designer: false,
    All: true,
  },
  {
    Id: document.querySelector("#card11"),
    Kids: false,
    Adult: true,
    Summer: false,
    winter: true,
    Designer: true,
    All: true,
  },
  {
    Id: document.querySelector("#card12"),
    Kids: true,
    Adult: false,
    Summer: true,
    winter: false,
    Designer: false,
    All: true,
  },
];

const DOMSelectors = {
  allb: document.querySelector("#all"),
  Designerb: document.querySelector("#designer"),
  summerb: document.querySelector("#summer"),
  winterb: document.querySelector("#winter"),
  kidsb: document.querySelector("#kids"),
  adultsb: document.querySelector("#adults"),
  cardcontainer: document.querySelector(".cardcontainer"),
};

function kidso() {
  const k = DOMSelectors.cardcontainer.innerHtml;
  //   const kids = cards.filter((cards) => cards.Kids.includes(true));
  DOMSelectors.kidsb.addEventListener("click", function () {
    remove(k);
  });
}
