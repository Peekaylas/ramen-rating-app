const ramens = [
  {
    id: 1,
    name: "Shoyu Ramen",
    restaurant: "Ichiran",
    image: "images/shoyu.jpg",
    rating: 5,
    comment: "Delicious!",
  },
  {
    id: 2,
    name: "Miso Ramen",
    restaurant: "Menya",
    image: "images/kojiro.jpg",
    rating: 4,
    comment: "Very flavorful!",
  },
  {
    id: 3,
    name: "Tonkotsu Ramen",
    restaurant: "Ramen-ya",
    image: "images/naruto.jpg",
    rating: 5,
    comment: "Awesome!",
  },
  {
    id: 4,
    name: "Nirvana Ramen",
    restaurant: "Shalom",
    image: "images/nirvana.jpg",
    rating: 3,
    comment: "Plain!",
  },
  {
    id: 5,
    name: "Gyukotsu Ramen",
    restaurant: "JackB",
    image: "images/gyukotsu.jpg",
    rating: 1,
    comment: "Too raw!",
  },
];

const ramenMenu = document.getElementById("ramen-menu");

const ramenDetails = document.getElementById("ramen-details");

const ramenForm = document.getElementById("ramen-form");

function displayRamens() {
  ramenMenu.innerHTML = "";

  for (var i = 0; i < ramens.length; i++) {
    const ramen = ramens[i];

    const img = document.createElement("img");

    img.src = ramen.image;

    img.alt = ramen.name;

    img.classList.add("ramen-image");

    img.addEventListener("click", function () {
      handleClick(ramen);
    });

    ramenMenu.appendChild(img);
  }
}

function handleClick(ramen) {
  document.getElementById("detail-image").src =
    ramen.image || "images/placeholder.jpg";

  document.getElementById("detail-name").textContent = ramen.name;

  document.getElementById("detail-restaurant").textContent =
    "Restaurant: " + ramen.restaurant;

  document.getElementById("detail-rating").textContent =
    "Rating: " + ramen.rating + "/10";

  document.getElementById("detail-comment").textContent =
    "Comment: " + ramen.comment;
}

function handleFormSubmit(event) {
  event.preventDefault();

  const newRamen = {
    id: ramens.length + 1,
    name: document.getElementById("name").value,
    restaurant: document.getElementById("restaurant").value,
    image: document.getElementById("image").value,
    rating: parseInt(document.getElementById("rating").value) || 0,
    comment: document.getElementById("comment").value,
  };

  ramens.push(newRamen);

  displayRamens();

  ramenForm.reset();
}

ramenForm.addEventListener("submit", function (event) {
  handleFormSubmit(event);
});

displayRamens();
