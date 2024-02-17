import "./displayQuestions.css";
import { newQuestionGenerator } from "./generateQuestions";
import { loadStartMenu } from "./startMenu";

let questionGenerator;
let answersCorrect;
let answersWrong;
let totalQuestions;

export const updateTotalQuestions = (total) => {
  totalQuestions = total;
};

export const refreshGenerator = (selectedChapters = [], random = false) => {
  questionGenerator = newQuestionGenerator(selectedChapters, random);
  answersCorrect = 0;
  answersWrong = 0;
};

export const showQuestionProgress = () => {
  const progressDiv = document.createElement("div");
  progressDiv.id = "progressDiv";
  const questionNumber = answersCorrect + answersWrong + 1;
  progressDiv.textContent = `Question ${questionNumber}/${totalQuestions}`;
  return progressDiv;
};

export const showNewQuestion = () => {
  const mainContainer = document.getElementById("mainContainer");
  mainContainer.innerHTML = "";

  const question = questionGenerator.getNextQuestion();
  if (question === null) {
    loadEndScreen();
    return;
  }

  mainContainer.append(showQuestionProgress());
  mainContainer.append(displayChapter(question));
  mainContainer.append(displayQuestion(question));
  setTimeout(() => {
    window.scrollTo({ top: 0});
  }, 10);
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
    answer.textContent = `${questionObj.Answers[i]}`;
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
      document.getElementById("nextButton").scrollIntoView({block: "end", behavior: "smooth"});
    };
    container.append(answer);
    
  }
  return container;
};

const loadEndScreen = () => {
  const mainContainer = document.getElementById("mainContainer");

  const statsContainer = document.createElement("div");
  statsContainer.classList.add("statsContainer");

  const questionsAsked = answersCorrect + answersWrong;
  statsContainer.append(createLabelValuePair("Questions", questionsAsked));
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
    loadStartMenu();
  };
  return button;
};

const nextButton = () => {
  const button = document.createElement("button");
  button.classList.add("button");
  button.id = "nextButton";
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

const scrollToBottom = () => {
  console.log(document.body.scrollHeight)
  console.log(document.querySelector('footer').scrollHeight)
  console.log(document.body.scrollHeight - document.querySelector('footer').scrollHeight)
  const height = document.querySelector('footer').scrollHeight;
  window.scrollTo({ top: height, behavior: "smooth" });
}
