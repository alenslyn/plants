const store = [
  {
    title: "Garden Care",
    description: "Lorem Ipsum has been the industry",
    path: "./images/aloe.jpeg",
    keyword: "garden",
  },
  {
    title: "Planting",
    description: "Lorem Ipsum has been the industry",
    path: "./images/lime.jpeg",
    keyword: "planting",
  },
  {
    title: "Lawn Care",
    description: "Lorem Ipsum has been the industry",
    path: "./images/apple.jpeg",
    keyword: "lawn",
  },
  {
    title: "Planting",
    description: "Lorem Ipsum has been the industry",
    path: "./images/flowers.jpeg",
    keyword: "planting",
  },
  {
    title: "Garden Care",
    description: "Lorem Ipsum has been the industry",
    path: "./images/succulenti.jpeg",
    keyword: "garden",
  },
  {
    title: "Planting",
    description: "Lorem Ipsum has been the industry",
    path: "./images/cactus.jpeg",
    keyword: "planting",
  },
];

const servicesList = document.querySelector(".services__list"); //ссылка на html документ

// const container = document.createElement("div");
// const image = document.createElement("img");
// image.src = "";
// const title = document.createElement("h4");
// title.innerHTML = "";
// const description = document.createElement("p");
// description.innerHTML = "";

// container.append(image, title, description);
// servicesList.append(container);

for (let i = 0; i < store.length; i++) {
  const { title, description, path, keyword } = store[i];

  const container = document.createElement("div");
  container.classList.add("services__service", keyword);

  const image = document.createElement("img");
  image.src = path;
  image.classList.add("service__img");

  const h4 = document.createElement("h4");
  h4.innerHTML = title;
  h4.classList.add("service__title");

  const p = document.createElement("p");
  p.innerHTML = description;
  p.classList.add("service__desc");

  container.append(image, h4, p);
  servicesList.append(container);
}

const gardensBtn = document.querySelector(".btn__gardens");
const lawnBtn = document.querySelector(".btn__lawn");
const plantingBtn = document.querySelector(".btn__planting");

gardensBtn.addEventListener("mouseenter", function () {
  const elemGardens = document.querySelectorAll(
    ".services__list :not(.garden).services__service"
  );
  elemGardens.forEach(function (element) {
    element.classList.add("blur");
  });
});

lawnBtn.addEventListener("mouseenter", function () {
  const elemLawn = document.querySelectorAll(
    ".services__list :not(.lawn).services__service"
  );
  elemLawn.forEach(function (element) {
    element.classList.add("blur");
  });
});

plantingBtn.addEventListener("mouseenter", function () {
  const elemPlanting = document.querySelectorAll(
    ".services__list :not(.planting).services__service"
  );
  elemPlanting.forEach(function (element) {
    element.classList.add("blur");
  });
});
gardensBtn.addEventListener("mouseleave", function () {
  const elemGardens = document.querySelectorAll(
    ".services__list :not(.garden).services__service"
  );
  elemGardens.forEach(function (element) {
    element.classList.remove("blur");
  });
});
lawnBtn.addEventListener("mouseleave", function () {
  const elemLawn = document.querySelectorAll(
    ".services__list :not(.lawn).services__service"
  );
  elemLawn.forEach(function (element) {
    element.classList.remove("blur");
  });
});

plantingBtn.addEventListener("mouseleave", function () {
  const elemPlanting = document.querySelectorAll(
    ".services__list :not(.planting).services__service"
  );
  elemPlanting.forEach(function (element) {
    element.classList.remove("blur");
  });
});

console.log(
  document.querySelectorAll(".services__list :not(.garden).services__service")
);
