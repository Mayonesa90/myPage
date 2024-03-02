
document.querySelector("body").addEventListener("load", () => {
    console.log("Hej")
})

const linkedinBtn = document.querySelector(".btn_linkedin"),
      githubBtn = document.querySelector(".btn_github"),
      linkedinTxt = document.createElement("a"),
      githubTxt = document.createElement("a"),
      linkedInParent = document.querySelector(".linkedIn_parent"),
      gitHubParent = document.querySelector(".gitHub_parent");


linkedinBtn.addEventListener("click", () => {
    if (linkedInParent.children.length < 1) {
        linkedinTxt.setAttribute("href", "https://linkedin.com/in/maya-arzapalo-björklund");
        linkedinTxt.setAttribute("target", "_blank");
        linkedinTxt.classList.add("--slidein");
        linkedinTxt.textContent = "https://linkedin.com/in/maya-arzapalo-björklund/";
        linkedInParent.appendChild(linkedinTxt);
        linkedinBtn.classList.add("--animation");
        setTimeout(() => {
            linkedinBtn.classList.remove("--animation")
        }, 2500)
    } else {
        linkedinTxt.classList.replace("--slidein", "--slideout");
        setTimeout(() => {
            linkedInParent.removeChild(linkedinTxt);
        }, 2200);
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
        githubTxt.classList.add("--slidein");
        githubTxt.textContent = "https://github.com/Mayonesa90";
        gitHubParent.appendChild(githubTxt);
        githubBtn.classList.add("--animation");
        setTimeout(() => {
                githubBtn.classList.remove("--animation")
            }, 2500)
    } else {
        githubTxt.classList.replace("--slidein", "--slideout");
        setTimeout(() => {
            gitHubParent.removeChild(githubTxt)
        }, 2200);
        githubBtn.classList.add("--animation");
        setTimeout(() => {
                githubBtn.classList.remove("--animation")
            }, 2500)
    }

})

