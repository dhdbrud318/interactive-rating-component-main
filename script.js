const rating_btns = document.querySelectorAll("input[type='radio']");
const form = document.querySelector("#rating");
const submit_btn = document.querySelector("button");
const thankyou = document.querySelector("#thankyou");
const displayScore = document.querySelector("#user-rating");

let userScore;

form.addEventListener("click", function (e) {
  submit_btn.disabled = false;
  rating_btns.forEach((rating) => {
    if (rating.checked) userScore = rating.value;
  });
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  displayScore.innerText = userScore;
  form.classList.toggle("disappear");
  thankyou.classList.toggle("disappear");
});
