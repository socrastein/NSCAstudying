import { chapters } from "./questions";

export const newQuestionGenerator = (selectedChapters = [], random = false) => {
  let chaptersArray = [];
  const length = selectedChapters.length;

  if(length === 0){
    chaptersArray = structuredClone(chapters); //All chapters selected
  } else {
    for (let i = 0; i < length; i++){ //Some chapters selected
      const chapterIndex = selectedChapters[i];
      chaptersArray.push(structuredClone(chapters[chapterIndex]))
    }
  }

  const getNextQuestion = () => {
    while (chaptersArray.length > 0) {

      let chapter;
      if(random){
        chapter = pickRandomElement(chaptersArray);
      } else {
        chapter = chaptersArray[0];
      }

      if(chapter.Questions.length === 0){
        if(random){
        let index = chaptersArray.indexOf(randomChapter);
        chaptersArray.splice(index, 1);
        } else {
        chaptersArray.shift();
        }
      } else {
        //Pull next question out of the Questions array from selected chapter
        return getNextChapterQuestion(chapter, random)
      }
    }
    //If all the chapters' questions have already been pulled
    return null;
  }

  return { getNextQuestion };
};

const getNextChapterQuestion = (chapter, random = false) => {
  const chapterNumber = chapter.ChapterNumber;
  const chapterTitle = chapter.ChapterTitle;
  let questionObj;
  if(random){
    questionObj = removeRandomElement(chapter.Questions);
  } else {
    questionObj = chapter.Questions.shift();
  }
  return { chapterNumber, chapterTitle, questionObj };
}

const pickRandomElement = (arr) => {
  const randomElement = arr[Math.floor(Math.random() * arr.length)];
  return randomElement;
};

const removeRandomElement = (arr) => {
  const randomElement = arr.splice(Math.floor(Math.random() * arr.length), 1);
  return randomElement[0];
};

const shuffleArray = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};
