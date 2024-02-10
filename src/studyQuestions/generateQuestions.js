import { chapters } from "./questions";

export const newQuestionGenerator = () => {
  const chaptersArray = structuredClone(chapters);

  const getRandomQuestion = () => {
    console.log(chaptersArray);
    while (chaptersArray.length > 0) {
      let randomChapter = pickRandomElement(chaptersArray);

      if (randomChapter.Questions.length > 0) {
        //Pull random question out of the Questions array from selected chapter
        const chapterNumber = randomChapter.ChapterNumber;
        const chapterTitle = randomChapter.ChapterTitle;
        const questionObj = removeRandomElement(randomChapter.Questions);
        return { chapterNumber, chapterTitle, questionObj };
      } else {
        //Remove selected chapter from array if all the questions have already been pulled
        let index = chaptersArray.indexOf(randomChapter);
        chaptersArray.splice(index, 1);
      }
    }
    //If all the chapters' questions have already been pulled
    return null;
  };

  return { getRandomQuestion };
};

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
