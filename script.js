const linkedinBtn = document.querySelector(".linkedin"),
      githubBtn = document.querySelector(".github"),
      linkedinTxt = document.querySelector(".linkedin-selected"),
      githubTxt = document.querySelector(".github-selected");


linkedinBtn.addEventListener("mouseover", () => {
    linkedinTxt.style.display = "block";
})

githubBtn.addEventListener("mouseover", () => {
    githubTxt.style.display = "block";
})