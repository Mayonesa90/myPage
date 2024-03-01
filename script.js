
document.querySelector("body").addEventListener("load", () => {
    console.log("Hej")
})

const linkedinBtn = document.querySelector(".linkedin"),
      githubBtn = document.querySelector(".github"),
      linkedinTxt = document.querySelector("#linkedin-link"),
      githubTxt = document.querySelector("#github-link");


linkedinBtn.addEventListener("click", () => {
    linkedinTxt.className = linkedinTxt.className === "--selected" ? "--deselected" : "--selected";
    linkedinBtn.classList.add("--animation");
    setTimeout(() => {
        linkedinBtn.classList.remove("--animation")
    }, 3000)
})

githubBtn.addEventListener("click", () => {
    githubTxt.className = githubTxt.className === "--selected" ? "--deselected" : "--selected";
    githubBtn.classList.add("--animation");
    setTimeout(() => {
        githubBtn.classList.remove("--animation")
    }, 3000)
})
