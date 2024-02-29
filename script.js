
document.querySelector("body").addEventListener("load", () => {
    console.log("Hej")
})

const linkedinBtn = document.querySelector(".linkedin"),
      githubBtn = document.querySelector(".github"),
      linkedinTxt = document.querySelector(".linkedin-selected"),
      githubTxt = document.querySelector(".github-selected");


linkedinBtn.addEventListener("click", () => {
    linkedinTxt.style.display = "block";
    linkedinBtn.style.animation = "tilt 2600ms";
    linkedinBtn.style.cursor = "pointer";

    linkedinBtn.addEventListener("click", () => {
        linkedinBtn.setAttribute("href", "https://www.linkedin.com/in/maya-arzapalo-björklund/")
        linkedinBtn.setAttribute("target", "_blank");
    })
    
})

githubBtn.addEventListener("click", () => {
    githubTxt.style.display = "block";
    githubBtn.style.animation = "tilt 2600ms";
    githubBtn.style.cursor = "pointer";

    githubBtn.addEventListener("click", () => {
        githubBtn.setAttribute("href", "https://github.com/Mayonesa90");
        githubBtn.setAttribute("target", "_blank");
    })
    
})

