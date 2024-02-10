import "./displayQuestions.css";
import { newQuestionGenerator } from "./generateQuestions";

let questionGenerator = newQuestionGenerator();
let answersCorrect;
let answersWrong;
let questionsAsked;

const refreshGenerator = () => {
  questionGenerator = newQuestionGenerator();
  answersCorrect = 0;
  answersWrong = 0;
  questionsAsked = 0;
};

export const loadStartScreen = () => {
  const mainContainer = document.getElementById("mainContainer");
  mainContainer.innerHTML = "";
  refreshGenerator();

  const startQuestions = document.createElement("button");
  startQuestions.classList.add("button");
  startQuestions.textContent = "Start";
  startQuestions.onclick = () => {
    showNewQuestion();
  };

  mainContainer.append(startQuestions);
};

const showNewQuestion = () => {
  const mainContainer = document.getElementById("mainContainer");
  mainContainer.innerHTML = "";

  const question = questionGenerator.getRandomQuestion();
  console.log(question);
  if (question === null) {
    loadEndScreen();
    return;
  }

  mainContainer.append(displayChapter(question));
  mainContainer.append(displayQuestion(question));
};

const displayChapter = (question) => {
  const container = document.createElement("div");
  container.classList.add("chapterContainer");

  const number = document.createElement("div");
  number.classList.add("chapterNumber");
  number.textContent = `Chapter ${question.chapterNumber}`;

  const title = document.createElement("div");
  title.classList.add("chapterTitle");
  title.textContent = question.chapterTitle;

  container.append(number);
  container.append(title);

  return container;
};

const letters = "ABCDEFG";

const displayQuestion = (question) => {
  const questionObj = question.questionObj;

  const container = document.createElement("div");
  container.classList.add("questionContainer");

  const questionElement = document.createElement("div");
  questionElement.classList.add("question");
  questionElement.textContent = questionObj.Q;
  container.append(questionElement);

  const length = questionObj.Answers.length;
  for (let i = 0; i < length; i++) {
    const answer = document.createElement("div");
    answer.classList.add("answer");
    answer.textContent = `${letters[i]}. ${questionObj.Answers[i]}`;
    answer.onclick = () => {
      if (i === questionObj.A) {
        answer.classList.add("correct");
        answersCorrect++;
      } else {
        answer.classList.add("wrong");
        answersWrong++;
      }
      disableAnswers();
      document.getElementById("mainContainer").append(nextButton());
    };
    container.append(answer);
  }
  questionsAsked++;
  return container;
};

const loadEndScreen = () => {
  const mainContainer = document.getElementById("mainContainer");

  const statsContainer = document.createElement("div");
  statsContainer.classList.add("statsContainer");

  statsContainer.append(createLabelValuePair("Answered", questionsAsked));
  statsContainer.append(createLabelValuePair("Correct", answersCorrect));
  statsContainer.append(createLabelValuePair("Wrong", answersWrong));

  statsContainer.append(createElementGap());
  const score = Math.floor((answersCorrect / questionsAsked) * 100);
  statsContainer.append(createLabelValuePair("Score", `${score}%`));

  mainContainer.append(statsContainer);
  mainContainer.append(mainMenuButton());
};

const createLabelValuePair = (label, value) => {
  const container = document.createElement("div");
  container.classList.add("labelValueContainer");

  const labelElement = document.createElement("p");
  labelElement.classList.add("label");
  labelElement.textContent = label;

  const valueElement = document.createElement("p");
  valueElement.classList.add("value");
  valueElement.textContent = value;

  container.append(labelElement);
  container.append(valueElement);

  return container;
};

const createElementGap = (size = `2rem`) => {
  const gap = document.createElement("div");
  gap.classList.add("elementGap");
  gap.style.height = size;
  return gap;
};

const mainMenuButton = () => {
  const button = document.createElement("button");
  button.classList.add("button");
  button.textContent = "Main Menu";
  button.onclick = () => {
    loadStartScreen();
  };
  return button;
};

const nextButton = () => {
  const button = document.createElement("button");
  button.classList.add("button");
  button.textContent = "Next";
  button.onclick = () => {
    showNewQuestion();
  };
  return button;
};

const disableAnswers = () => {
  const answers = document.querySelectorAll(".answer");
  answers.forEach((answer) => {
    answer.onclick = null;
  });
};
