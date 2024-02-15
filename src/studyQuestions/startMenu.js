import "./startMenu.css";
import { refreshGenerator, showNewQuestion } from "./displayQuestions";

const numberOfChapters = 25;

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
}

const createChapterSelectForm = () => {
    const chapterFieldset = document.createElement("fieldset");
    chapterFieldset.id = "chapterFieldset";
  
    const chapterLegend = document.createElement("legend");
    chapterLegend.textContent = "Choose chapters to test on";
    chapterFieldset.append(chapterLegend);
  
    const selectAll = document.createElement("div");
    selectAll.id = "selectAll";
    selectAll.textContent = "Select All";
    selectAll.onclick = () => {
      if(selectAll.textContent === "Select All"){
          checkAllChapters();
          selectAll.textContent = "Unselect All"
      } else {
          uncheckAllChapters();
          selectAll.textContent = "Select All"
      }
    };
    chapterFieldset.append(selectAll)
  
    for (let i = 1; i <= numberOfChapters; i++) {
      const chapterContainer = document.createElement("div");
      chapterContainer.classList.add("checkboxContainer");
  
      const chapterLabel = document.createElement("label");
      chapterLabel.for = `Chapter ${i}`;
      chapterLabel.textContent = `Chapter ${i}`;
  
      const chapterCheckbox = document.createElement("input");
      chapterCheckbox.type = "checkbox";
      chapterCheckbox.id = `Chapter ${i}`;
  
      chapterContainer.append(chapterLabel);
      chapterContainer.append(chapterCheckbox);
      chapterFieldset.append(chapterContainer);
    }

    return chapterFieldset;
}

const checkAllChapters = () => {
    const checkBoxes = document.querySelectorAll("input[type=checkbox]");
    checkBoxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
  };
  
  const uncheckAllChapters = () => {
    const checkBoxes = document.querySelectorAll("input[type=checkbox]");
    checkBoxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };
  
  const getCheckedChaptersArray = () => {
      const checkBoxes = document.querySelectorAll("input[type=checkbox]");
      const checked = [];
      checkBoxes.forEach((checkbox) => {
          if(checkbox.checked === true) {
              const chapterNum = parseInt(checkbox.id.split(" ")[1]) - 1;
              checked.push(chapterNum);
          }
      })
      console.log(checked);
      return checked;
  }
