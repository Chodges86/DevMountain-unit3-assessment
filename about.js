console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  const yourName = document.querySelector("#name").value;
  const message = document.querySelector("#message").value;

  alert(
    `Thank you ${yourName}. Your message "${message}" has been recieved. Your form has been to submitted to Batman Rubber Ducky`
  );
}

let form = document.querySelector("#contact");

form.addEventListener("submit", handleSubmit);

let picture = document.querySelector("#picture");
picture.addEventListener("mouseover", giveCompliment);

const compliments = [
  "You are kind",
  "I admire your bravery",
  "Your confidence inspires me",
  "You are thoughtful",
  "You are a great listener",
];

function giveCompliment() {
  const randomNum = Math.floor(Math.random() * 5);
  alert(compliments[randomNum]);
}
