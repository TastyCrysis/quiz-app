const card = document.querySelector("[data-js='new-card']");
const addButton = document.querySelector("[data-js='add-button']");
const titleInput = document.querySelector("[data-js='title-input']");
const questionInput = document.querySelector("[data-js='question-input']");
const answerInput = document.querySelector("[data-js='answer-input']");
const tagInput = document.querySelector("[data-js='tags-input']");

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  const newCard = document.createElement("article");
  const newBookmark = document.createElement("img");
  const newTitle = document.createElement("h2");
  const newContent = document.createElement("div");
  const newQuestion = document.createElement("p");
  const newButton = document.createElement("button");
  const newAnswer = document.createElement("p");
  const newTags = document.createElement("ul");
  const newTag = document.createElement("li");

  newCard.classList.add("card");

  newBookmark.classList.add("bookmark");
  newBookmark.src = "assets/bookmark.svg";
  newBookmark.alt = "bookmark";

  newTitle.classList.add("card-headline");
  newTitle.textContent = titleInput.value;

  newContent.classList.add("card-content");

  newQuestion.classList.add("card-text");
  newQuestion.textContent = questionInput.value;

  newButton.classList.add("answer-button");
  newButton.textContent = "Show Answer";

  newAnswer.classList.add("answer-text");
  newAnswer.textContent = answerInput.value;
  newAnswer.hidden = true;

  newTags.classList.add("tags");

  newTag.classList.add("item");
  newTag.textContent = tagInput.value;

  newContent.append(newQuestion, newButton, newAnswer);
  newTags.append(newTag);
  newCard.append(newBookmark, newTitle, newContent, newTags);
  card.append(newCard);
});

const titleCounter = document.createElement("p");
titleCounter.classList.add("input-counter");
titleInput.after(titleCounter);

const questionCounter = document.createElement("p");
questionCounter.classList.add("input-counter");
questionInput.after(questionCounter);

const answerCounter = document.createElement("p");
answerCounter.classList.add("input-counter");
answerInput.after(answerCounter);

const tagCounter = document.createElement("p");
tagCounter.classList.add("input-counter");
tagInput.after(tagCounter);

titleInput.addEventListener("input", () => {
  const remaining = titleInput.maxLength - titleInput.value.length;
  titleCounter.textContent = `${remaining} characters remaining`;
});

questionInput.addEventListener("input", () => {
  const remaining = questionInput.maxLength - questionInput.value.length;
  questionCounter.textContent = `${remaining} characters remaining`;
});

answerInput.addEventListener("input", () => {
  const remaining = answerInput.maxLength - answerInput.value.length;
  answerCounter.textContent = `${remaining} characters remaining`;
});

tagInput.addEventListener("input", () => {
  const remaining = tagInput.maxLength - tagInput.value.length;
  tagCounter.textContent = `${remaining} characters remaining`;
});

titleCounter.textContent = `${titleInput.maxLength} characters remaining`;
questionCounter.textContent = `${questionInput.maxLength} characters remaining`;
answerCounter.textContent = `${answerInput.maxLength} characters remaining`;
tagCounter.textContent = `${tagInput.maxLength} characters remaining`;
