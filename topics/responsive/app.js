const button = document.querySelector("button");

const narrow = () => {
  alert("Narrow screen js running");
};

const wide = () => {
  alert("Wide screen js running");
};

const handleNarrow = () => {
  button.addEventListener("click", narrow);
  button.removeEventListener("click", wide);
};

const handleWide = () => {
  button.addEventListener("click", wide);
  button.removeEventListener("click", narrow);
};

const mq = window.matchMedia("(min-width: 600px)");

if (mq.matches) {
  handleWide();
} else {
  handleNarrow();
}

mq.addListener(function(e) {
  if (e.matches) {
    handleWide();
  } else {
    handleNarrow();
  }
});
