import "./footer.css";
import gitLogoSVG from "./github.svg";

export const createFooter = () => {
  const footer = document.createElement("footer");

  const attribution = document.createElement("p");
  attribution.textContent = "Built by Matt Talley";

  const gitLogo = document.createElement("img");
  gitLogo.classList.add("footerLogo");
  gitLogo.src = gitLogoSVG;
  gitLogo.onclick = () => {
    window.open('https://github.com/socrastein', '_blank')
  }

  footer.append(attribution);
  footer.append(gitLogo);

  return footer;
};
