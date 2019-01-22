var btn_address = document.querySelector(".btn-address");
var feedback = document.querySelector(".feedback");
var close = document.querySelector(".close-form");
var yourname = feedback.querySelector("[for=name]");
var email = feedback.querySelector("[for=email]");
var form = feedback.querySelector("form");
var overlay = document.querySelector(".overlay");

var switchers = document.querySelectorAll(".slide");
var body = document.querySelector("body");

btn_address.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.add("feedback-opened");
  overlay.classList.add("overlay-show");
  yourname.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback.classList.remove("feedback-opened");
  feedback.classList.remove("feedback-error");
  overlay.classList.remove("overlay-show");
});

document.addEventListener("keydown", function (evt) {
  if (feedback.classList.contains("feedback-opened")) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      feedback.classList.remove("feedback-opened");
      feedback.classList.remove("feedback-error");
      overlay.classList.remove("overlay-show");
    }
  }
});

form.addEventListener("submit", function (evt) {
  if (!yourname.value || !email.value) {
    evt.preventDefault();
    feedback.classList.remove("feedback-error");
    feedback.getBoundingClientRect();
    feedback.classList.add("feedback-error");
  }
});

for (var i = 0; i < switchers.length; i++) {
  switchers[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    for (var k = 0; k < switchers.length; k++) {
      switchers[k].classList.remove("slide-checked");
    };
    this.classList.add("slide-checked");
    body.className = "";
    var id = this.dataset.id;
    body.classList.add("slide-" + id);
  });
};
