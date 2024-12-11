const button = document.querySelector("[data-js='answer-button']");
const answerText = document.querySelector("[data-js='answer-text']");

answerText.hidden = true;
button.textContent = "Show Answer";

button.addEventListener("click", () => {
  if (answerText.hidden) {
    answerText.hidden = false;
    button.textContent = "Hide Answer";
  } else {
    answerText.hidden = true;
    button.textContent = "Show Answer";
  }
});
