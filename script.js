
document.querySelector("body").addEventListener("load", () => {
    console.log("Hej")
})

const linkedinBtn = document.querySelector(".linkedin"),
      githubBtn = document.querySelector(".github"),
      linkedinTxt = document.querySelector("#linkedin-link"),
      githubTxt = document.querySelector("#github-link");


linkedinBtn.addEventListener("click", () => {
    linkedinTxt.className = linkedinTxt.className === "--selected" ? "--deselected" : "--selected";
    // linkedinTxt.setAttribute("href", "https://linkedin.com/in/maya-arzapalo-björklund/");
    // linkedinBtn.className = linkedinBtn.className === "--animation" ? "github" : "--animation";
    // setTimeout((linkedinBtn.style.animation = "tilt 2600ms"), "2601");
    linkedinBtn.classList.add("--animation");
    // setTimeout((linkedinBtn.classList.remove("--animation")), 5000);
    setTimeout(() => {
        linkedinBtn.classList.remove("--animation")
    }, 3000)
})

githubBtn.addEventListener("click", () => {
    // githubBtn.style.animation = "tilt 2600ms";
    githubTxt.className = githubTxt.className === "--selected" ? "--deselected" : "--selected";
    githubBtn.classList.add("--animation");
    setTimeout(() => {
        githubBtn.classList.remove("--animation")
    }, 3000)
})
