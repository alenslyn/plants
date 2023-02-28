const store = [
  {
    title: "Garden Care",
    description: "Lorem Ipsum has been the industry",
    path: "./images/aloe.jpeg",
  },
  {
    title: "Planting",
    description: "Lorem Ipsum has been the industry",
    path: "./images/lime.jpeg",
  },
  {
    title: "Lawn Care",
    description: "Lorem Ipsum has been the industry",
    path: "./images/apple.jpeg",
  },
  {
    title: "Planting",
    description: "Lorem Ipsum has been the industry",
    path: "./images/flowers.jpeg",
  },
  {
    title: "Garden Care",
    description: "Lorem Ipsum has been the industry",
    path: "./images/succulenti.jpeg",
  },
  {
    title: "Planting",
    description: "Lorem Ipsum has been the industry",
    path: "./images/cactus.jpeg",
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
  const { title, description, path } = store[i];

  const container = document.createElement("div");
  container.classList.add("services__service");

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
