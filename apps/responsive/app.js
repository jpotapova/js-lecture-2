const button = document.querySelector("button");
const narrow = () => {
  alert("Narrow screen js running");
};
const wide = () => {
  alert("Wide screen js running");
};

var mq = window.matchMedia("(min-width: 600px)");

if (mq.matches) {
  button.addEventListener("click", wide);
  button.removeEventListener("click", narrow);
} else {
  button.addEventListener("click", narrow);
  button.removeEventListener("click", wide);
}

mq.addListener(function(e) {
  if (e.matches) {
    button.addEventListener("click", wide);
    button.removeEventListener("click", narrow);
  } else {
    button.addEventListener("click", narrow);
    button.removeEventListener("click", wide);
  }
});
