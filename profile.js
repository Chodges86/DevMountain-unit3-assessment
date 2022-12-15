const form = document.querySelector("#hobby-form");
const userHobbyList = document.querySelector("#user-hobbies");
const favColorBtn = document.querySelector("#color");
const favPlaceBtn = document.querySelector("#place");
const favRitualBtn = document.querySelector("#ritual");

favColorBtn.addEventListener("click", showAlert);
favPlaceBtn.addEventListener("click", showAlert);
favRitualBtn.addEventListener("click", showAlert);

form.addEventListener("submit", addHobby);

let hobbies = [];

function addHobby(event) {
  const listCount = userHobbyList.getElementsByTagName("li").length;

  if (listCount < 6) {
    event.preventDefault();
    const input = document.querySelector("#hobby");
    const list = document.querySelector("#user-hobbies");
    const newListElement = document.createElement("li");
    newListElement.textContent = input.value;
    list.appendChild(newListElement);
    input.value = "";
  } else {
    alert("You have too many Hobbies and Interests!");
  }
}

function showAlert(event) {
  switch (event.target.id) {
    case "color":
      alert("My favorite color is blue");
      break;
    case "place":
      alert("My favorite place is the beach");
      break;
    case "ritual":
      alert(
        "I don't have anything that I consider a ritual.  A favorite thing I do often is have coffee/drinks with my wife on our back deck, overlooking the lake."
      );
      break;
  }
}
