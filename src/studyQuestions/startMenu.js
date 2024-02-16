import "./startMenu.css";
import { refreshGenerator, showNewQuestion } from "./displayQuestions";
import { getNumberOfQuestions } from "./generateQuestions";
import { chapters } from "./questions";

const numberOfChapters = chapters.length;

export const loadStartMenu = () => {
  const mainContainer = document.getElementById("mainContainer");
  mainContainer.innerHTML = "";

  mainContainer.append(createChapterSelectForm());
  mainContainer.append(createStartQuizButton());
};

const createStartQuizButton = () => {
  const startQuiz = document.createElement("button");
  startQuiz.classList.add("button");
  startQuiz.textContent = "Start";
  startQuiz.onclick = () => {
    const checked = getCheckedChaptersArray();
    refreshGenerator(checked);
    showNewQuestion();
  };

  return startQuiz;
};

const createChapterSelectForm = () => {
  const chapterFieldset = document.createElement("fieldset");
  chapterFieldset.id = "chapterFieldset";

  const chapterLegend = document.createElement("legend");
  chapterLegend.textContent = "Choose chapters to test on";
  chapterFieldset.append(chapterLegend);

  chapterFieldset.append(createSelectAllButton());
  chapterFieldset.append(createChapterButtons());

  const totalQuestionsDiv = document.createElement("div");
  totalQuestionsDiv.id = "totalQuestionsDiv";
  totalQuestionsDiv.textContent = "Total Questions: 0";
  chapterFieldset.append(totalQuestionsDiv);

  return chapterFieldset;
};

const createSelectAllButton = () => {
  const selectAll = document.createElement("div");
  selectAll.id = "selectAll";
  selectAll.textContent = "Select All";
  selectAll.onclick = () => {
    if (selectAll.textContent === "Select All") {
      selectAllChapters();
      selectAll.textContent = "Unselect All";
    } else {
      unselectAllChapters();
      selectAll.textContent = "Select All";
    }
  };
  return selectAll;
};

const createChapterButtons = () => {
  const chaptersContainer = document.createElement("div");
  chaptersContainer.classList.add("chaptersContainer");

  for (let i = 0; i < numberOfChapters; i++) {
    const chapterMenuDiv = document.createElement("div");
    chapterMenuDiv.classList.add("chapterMenuDiv");
    chapterMenuDiv.numberOfQuestions = getNumberOfQuestions(chapters[i]);

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

const getCheckedChaptersArray = () => {
  const checkBoxes = document.querySelectorAll("input[type=checkbox]");
  const checked = [];
  checkBoxes.forEach((checkbox) => {
    if (checkbox.checked === true) {
      const chapterNum = parseInt(checkbox.id.split(" ")[1]) - 1;
      checked.push(chapterNum);
    }
  });
  console.log(checked);
  return checked;
};
