import { questions } from "./questions.js";

let num;
let newAnswers = [];

var sound = document.getElementById("alarm");
sound.loop = true;

function main() {
  sound.play();
  selectQuestion();
  setTitle();
  selectAnswerOrder();
  setAnswers();
}

function setTitle() {
  document.getElementById("question").innerHTML = questions[num][0];
}

function selectQuestion() {
  num = Math.floor(Math.random() * 50);
}

function selectAnswerOrder() {
  while (newAnswers.length < 4) {
    let random = Math.floor(Math.random() * 4) + 1;
    if (!newAnswers.includes(questions[num][random])) {
      newAnswers.push(questions[num][random]);
    }
  }
}

function setAnswers() {
  const listItems = document.querySelectorAll("ul li");

  // Loop through the list items and update their text
  listItems.forEach((li, index) => {
    // Get the input element inside the <li>
    const input = li.querySelector("input");

    // Change the input value and label text
    input.value = newAnswers[index];
    li.childNodes[1].textContent = newAnswers[index];
  });
}

function submit() {
  const selectedOption = document.querySelector(
    "input[type=radio]:checked"
  ).value;
  if (selectedOption === questions[num][1]) {
    sound.pause();
    sound.currentTime = 0;
    alert("Correct!");
    window.location.replace("finish.html");
  } else {
    alert("Incorrect!");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  main();
  document.getElementById("submit").addEventListener("click", submit);
});
