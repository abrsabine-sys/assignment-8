console.log("script.js connected!");

let answers = [];

const questionBlocks = document.querySelectorAll(".question-block");

questionBlocks.forEach((block, index) => {
  const buttons = block.querySelectorAll(".answer-btn");

  buttons.forEach(button => {
    button.addEventListener("click", () => {

      // reset styles
      buttons.forEach(btn => {
        btn.classList.remove("btn-primary");
        btn.classList.add("btn-outline-primary");
      });

      // highlight selected
      button.classList.remove("btn-outline-primary");
      button.classList.add("btn-primary");

      // store answer
      answers[index] = button.dataset.answer;
    });
  });
});

function displayResult() {

  if (answers.length < questionBlocks.length) {
    document.getElementById("result-text").textContent =
      "Please answer all questions!";
    document.getElementById("result-container").style.display = "block";
    return;
  }

  let score = 0;

  answers.forEach(answer => {
    if (answer === "A") score += 3;
    if (answer === "B") score += 2;
    if (answer === "C") score += 1;
    if (answer === "D") score += 2;
  });

  let result = "";

  if (score <= 6) {
    result = "Owl – calm, wise, and thoughtful.";
  } else if (score <= 10) {
    result = "Dolphin – social, fun, and friendly.";
  } else {
    result = "Lion – bold, confident, and a leader.";
  }

  document.getElementById("result-text").textContent = result;
  document.getElementById("result-container").style.display = "block";
}

document
  .getElementById("show-result")
  .addEventListener("click", displayResult)