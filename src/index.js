import "./style.css";
import { loadStartMenu } from "./studyQuestions/startMenu";
import { createFooter } from "./footer/footer";

loadStartMenu();

document.body.append(createFooter())