const thankyou_page = document.querySelector("#thankyou-section");
const rating_page = document.querySelector("#rating-section");
const ratings = document.querySelectorAll("#rating");
const score_section = document.querySelector("#user-score");
const submit_btn = document.querySelector("#submit");
let user_score;

function displayThankyou() {
  thankyou_page.style.display = "block";
  rating_page.style.display = "none";
}

ratings.forEach((r) => {
  r.addEventListener("click", function (e) {
    user_score = e.target.value;
  });
});

submit.addEventListener("click", function () {
  if (!user_score) {
    window.alert("Please select a score!");
    return;
  }
  score_section.innerText = user_score;
  displayThankyou();
});
