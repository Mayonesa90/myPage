
document.querySelector("body").addEventListener("load", () => {
    console.log("Hej")
})

const linkedinBtn = document.querySelector(".linkedin"),
      githubBtn = document.querySelector(".github"),
    //   linkedinTxt = document.querySelector("#linkedin-link"),
    //   githubTxt = document.querySelector("#github-link");
      linkedinTxt = document.createElement("a"),
      githubTxt = document.createElement("a"),
      linkedInParent = document.querySelector(".linkedIn_parent"),
      gitHubParent = document.querySelector(".gitHub_parent");


// linkedinBtn.addEventListener("click", () => {
//     linkedinTxt.className = linkedinTxt.className === "--selected" ? "--deselected" : "--selected";
//     linkedinBtn.classList.add("--animation");
//     setTimeout(() => {
//         linkedinBtn.classList.remove("--animation")
//     }, 3000)
// })

// githubBtn.addEventListener("click", () => {
//     githubTxt.className = githubTxt.className === "--selected" ? "--deselected" : "--selected";
//     githubBtn.classList.add("--animation");
//     setTimeout(() => {
//         githubBtn.classList.remove("--animation")
//     }, 3000)
// })


linkedinBtn.addEventListener("click", () => {
    if (linkedInParent.children.length < 1) {
        linkedinTxt.setAttribute("href", "https://linkedin.com/in/maya-arzapalo-björklund");
        linkedinTxt.setAttribute("target", "_blank");
        linkedinTxt.classList.add("card_text");
        // linkedInParent.classList.add("--expand");
        linkedinTxt.textContent = "https://linkedin.com/in/maya-arzapalo-björklund/";
        linkedInParent.appendChild(linkedinTxt);
        linkedinBtn.classList.add("--animation");
        setTimeout(() => {
            linkedinBtn.classList.remove("--animation")
        }, 2500)
    } else {
        // linkedInParent.classList.remove("--expand");
        // linkedinTxt.classList.replace("card_text", "--deselected");
        setTimeout(() => {
            linkedInParent.removeChild(linkedinTxt);
        }, 1200);
        linkedinBtn.classList.add("--animation");
        setTimeout(() => {
            linkedinBtn.classList.remove("--animation")
        }, 2500);
    }

})

githubBtn.addEventListener("click", () => {
    if (gitHubParent.children.length < 1) {
        githubTxt.setAttribute("href", "https://github.com/Mayonesa90");
        githubTxt.setAttribute("target", "_blank");
        githubTxt.classList.add("card_text");
        githubTxt.textContent = "https://github.com/Mayonesa90";
        gitHubParent.appendChild(githubTxt);
        githubBtn.classList.add("--animation");
        setTimeout(() => {
                githubBtn.classList.remove("--animation")
            }, 2500)
    } else {
        githubTxt.classList.add("--slideout");
        setTimeout(() => {
            gitHubParent.removeChild(githubTxt)
        }, 1200);
        githubBtn.classList.add("--animation");
        setTimeout(() => {
                githubBtn.classList.remove("--animation")
            }, 2500)
    }

})

