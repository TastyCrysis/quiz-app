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

document.addEventListener("click", (event) => {
  const bookmarkButton = event.target.closest('[data-js="bookmark-button"]');
  if (bookmarkButton) {
    bookmarkButton.classList.toggle("bookmark--active");
  }
});
