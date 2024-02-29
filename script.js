
document.querySelector("body").addEventListener("load", () => {
    console.log("Hej")
})

const linkedinBtn = document.querySelector(".linkedin"),
      githubBtn = document.querySelector(".github"),
      linkedinTxt = document.querySelector(".linkedin-selected"),
      githubTxt = document.querySelector(".github-selected");


linkedinBtn.addEventListener("mouseover", () => {
    linkedinTxt.style.display = "block";
    linkedinBtn.style.animation = "tilt 2600ms"
})

githubBtn.addEventListener("mouseover", () => {
    githubTxt.style.display = "block";
    githubBtn.style.animation = "tilt 2600ms";
    githubBtn.style.cursor = "pointer"
})

