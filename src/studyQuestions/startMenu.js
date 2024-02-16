import "./startMenu.css";
import { refreshGenerator, showNewQuestion } from "./displayQuestions";
import { getNumberOfQuestions } from "./generateQuestions";
import { chapters } from "./questions";

const numberOfChapters = chapters.length;
const pageTitle = `NSCA CPT\nStudy Questions`;

export const loadStartMenu = () => {
  const mainContainer = document.getElementById("mainContainer");
  mainContainer.innerHTML = "";

  mainContainer.append(createPageTitle());
  mainContainer.append(createChapterSelectForm());
  mainContainer.append(createStartQuizButton());
};

const createPageTitle = () => {
  const title = document.createElement("h1");
  title.id = "pageTitle";
  title.textContent = pageTitle;
  return title;
};

const createSelectAllButton = () => {
  const selectAll = document.createElement("button");
  selectAll.textContent = "SELECT ALL";
  selectAll.onclick = () => {
    if (selectAll.textContent === "SELECT ALL") {
      selectAllChapters();
      selectAll.textContent = "UNSELECT ALL";
    } else {
      unselectAllChapters();
      selectAll.textContent = "SELECT ALL";
    }
  };
  return selectAll;
};

const createChapterSelectForm = () => {
  const chapterFieldset = document.createElement("fieldset");
  chapterFieldset.id = "chapterFieldset";

  const chapterLegend = document.createElement("legend");
  chapterLegend.textContent = "Select chapters to test on";
  chapterFieldset.append(chapterLegend);

  chapterFieldset.append(createSelectAllButton());
  chapterFieldset.append(createChapterButtons());

  const totalQuestionsDiv = document.createElement("div");
  totalQuestionsDiv.id = "totalQuestionsDiv";
  totalQuestionsDiv.textContent = "Total Questions: 0";
  chapterFieldset.append(totalQuestionsDiv);

  return chapterFieldset;
};

const createChapterButtons = () => {
  const chaptersContainer = document.createElement("div");
  chaptersContainer.classList.add("chaptersContainer");

  for (let i = 0; i < numberOfChapters; i++) {
    const chapterMenuDiv = document.createElement("div");
    chapterMenuDiv.classList.add("chapterMenuDiv");
    chapterMenuDiv.numberOfQuestions = getNumberOfQuestions(chapters[i]);
    chapterMenuDiv.chapterIndex = i;

    chapterMenuDiv.onclick = () => {
      if (chapterMenuDiv.classList.contains("selectedChapter")) {
        chapterMenuDiv.classList.remove("selectedChapter");
      } else {
        chapterMenuDiv.classList.add("selectedChapter");
      }
      updateTotalQuestionsDiv();
    };

    const chapterMenuNumber = document.createElement("p");
    chapterMenuNumber.classList.add("chapterMenuNumber");
    chapterMenuNumber.textContent = `Chapter ${i + 1}`;

    const chapterMenuTitle = document.createElement("p");
    chapterMenuTitle.classList.add("chapterMenuTitle");
    chapterMenuTitle.textContent = chapters[i].ChapterTitle;

    chapterMenuDiv.append(chapterMenuNumber);
    chapterMenuDiv.append(chapterMenuTitle);

    chaptersContainer.append(chapterMenuDiv);
  }

  return chaptersContainer;
};

const createStartQuizButton = () => {
  const startQuiz = document.createElement("button");
  startQuiz.classList.add("button");
  startQuiz.textContent = "START QUIZ";
  startQuiz.onclick = () => {
    const selected = getSelectedChaptersArray();
    // Don't start if no chapters have been selected
    if (selected.length === 0) return;
    refreshGenerator(selected);
    showNewQuestion();
  };

  return startQuiz;
};

const updateTotalQuestionsDiv = () => {
  const totalQuestionsDiv = document.getElementById("totalQuestionsDiv");
  const totalQuestions = getQuestionTotal();

  totalQuestionsDiv.textContent = `Total Questions: ${totalQuestions}`;
};

const getQuestionTotal = () => {
  let total = 0;
  const selectedChapters = document.querySelectorAll(".selectedChapter");
  const length = selectedChapters.length;
  for (let i = 0; i < length; i++) {
    total += selectedChapters[i].numberOfQuestions;
  }
  return total;
};

const selectAllChapters = () => {
  const chapterDivs = document.querySelectorAll(".chapterMenuDiv");
  const length = chapterDivs.length;
  for (let i = 0; i < length; i++) {
    chapterDivs[i].classList.add("selectedChapter");
  }
  updateTotalQuestionsDiv();
};

const unselectAllChapters = () => {
  const chapterDivs = document.querySelectorAll(".chapterMenuDiv");
  const length = chapterDivs.length;
  for (let i = 0; i < length; i++) {
    chapterDivs[i].classList.remove("selectedChapter");
  }
  updateTotalQuestionsDiv();
};

const getSelectedChaptersArray = () => {
  const selectedChapters = document.querySelectorAll(".selectedChapter");
  const checked = [];
  const length = selectedChapters.length;
  for (let i = 0; i < length; i++) {
    const chapterIndex = selectedChapters[i].chapterIndex;
    checked.push(chapterIndex);
  }
  console.log(checked);
  return checked;
};
