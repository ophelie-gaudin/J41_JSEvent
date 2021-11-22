function clickFooter() {
  const footerEl = document.getElementsByTagName("footer")[0];

  footerEl.addEventListener("click", function () {
    console.log("clique");
  });
}

function MultipleClickFooter() {
  let counter = 0;
  const footerEl = document.getElementsByTagName("footer")[0];

  footerEl.onclick = function () {
    counter++;
    console.log("clique " + counter);
  };
}

function displayHiddenMenu() {
  const hamburgerMenu = document.querySelector("button.navbar-toggler");
  const hiddenMenu = document.getElementById("navbarHeader");

  hamburgerMenu.addEventListener("click", function () {
    hiddenMenu.classList.toggle("collapse");
  });
}

function editInRed() {
  const editButton = document.querySelector(
    "div.card button.btn-outline-secondary"
  );
  const paragraph = document.querySelector("div.card p.card-text");

  editButton.addEventListener("click", () => {
    paragraph.style.color = "red";
  });
}

function editInGreen() {
  const editButton = document.querySelectorAll(
    "div.card button.btn-outline-secondary"
  )[1];
  const paragraph = document.querySelectorAll("div.card p.card-text")[1];

  editButton.addEventListener("click", function () {
    if (paragraph.style.color === "green") {
      paragraph.style.color = "";
    } else {
      paragraph.style.color = "green";
    }
  });
}

function removeBootstrap() {
  const navbar = document.querySelector("header");
  const bootstrapCDN = document.querySelector("head link");

  navbar.addEventListener("dblclick", () => {
    console.log("BLABLAB");
    if (bootstrapCDN.getAttribute("href")) {
      console.log("BLABLAB2");

      bootstrapCDN.removeAttribute("href");
    } else {
      bootstrapCDN.setAttribute(
        "href",
        "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      );
    }
  });
}

function changeCardDisplay() {
  const cardsArray = document.querySelectorAll("div.card");

  for (let i = 0; i < cardsArray.length; i++) {
    const currentCard = cardsArray[i];
    const viewButton = currentCard.querySelector("button.btn-success");
    const paragraph = currentCard.querySelector("p.card-text");
    const img = currentCard.querySelector("img.card-img-top");
    let imgLittle = false;

    viewButton.addEventListener("mouseover", (event) => {
      if (imgLittle === false) {
        paragraph.classList.toggle("collapse");
        img.style.width = "20%";
        imgLittle = true;
      } else {
        paragraph.classList.toggle("collapse");
        img.removeAttribute("style");
        imgLittle = false;
      }
    });
  }
}

function mixNextCards() {
  const rightButton = document.querySelector(
    "section.jumbotron div.container a.btn-secondary"
  );
  const cardsWrapper = document.querySelector("main div.container div.row");

  rightButton.addEventListener("click", (event) => {
    const firstChild = cardsWrapper.children[0];
    const length = cardsWrapper.children.length;
    const lastChild = cardsWrapper.children[length - 1];

    cardsWrapper.insertBefore(lastChild, firstChild);
  });
}

function mixPrevCards() {
  const leftButton = document.querySelector(
    "section.jumbotron div.container a.btn-primary"
  );
  const cardsWrapper = document.querySelector("main div.container div.row");

  leftButton.href = "#";

  leftButton.addEventListener("click", (event) => {
    const firstChild = cardsWrapper.children[0];

    cardsWrapper.appendChild(firstChild);
  });
}

function displayPage() {
  const logo = document.getElementsByClassName("navbar-brand")[0];
  const container = document.querySelector("div.album div.container");
  const cards = Array.from(container.getElementsByClassName("col-md-4"));

  const keyListener = (e) => {
    if (e.key === "a") {
      for (let card of cards) {
        card.classList.replace("col-md-4", "col-md-3");
        container.style["margin-left"] = "0";
      }
    } else if (e.key === "y") {
      for (let card of cards) {
        card.classList.replace("col-md-4", "col-md-3");
        container.style["margin-left"] = "";
        container.style["margin-right"] = "";
      }
    } else if (e.key === "p") {
      for (let card of cards) {
        card.classList.replace("col-md-4", "col-md-3");
        container.style["margin-right"] = "0";
      }
    } else if (e.key === "b") {
      for (let card of cards) {
        card.classList.replace("col-md-3", "col-md-4");
        container.style["margin-left"] = "";
        container.style["margin-right"] = "";
      }
    }
  };

  logo.addEventListener("mousedown", () => {
    document.addEventListener("keyup", keyListener);
  });

  logo.addEventListener("mouseup", () => {
    document.removeEventListener("keyup", keyListener);
  });
}

// *************************************** PERFORM ************************************************

// Fonctionnalité 1
clickFooter();

// Fonctionnalité 1 bis
MultipleClickFooter();

// Fonctionnalité 2
// ! : ne fonctionne pas
displayHiddenMenu();

// Fonctionnalité 3
editInRed();

// Fonctionnalité 4
editInGreen();

// Fonctionnalité 5
removeBootstrap();

// Fonctionnalité 6
changeCardDisplay();

// Fonctionnalité 7
mixNextCards();

// Fonctionnalité 8
mixPrevCards();

// Fonctionnalité 9
displayPage();

// console.log(paragraph);
