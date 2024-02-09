var menuOpen = document.getElementById("menu");
var menuClose = document.getElementById("close");
var nav = document.getElementsByTagName("ul")[0];
var back = document.getElementById("back");
var backClose = document.getElementById("back-close");
var backPage = document.querySelector(".back");
var radio = document.getElementsByClassName("radio-check");
var pledger = document.getElementsByClassName("pledge");
var yourPledge = document.getElementsByClassName("your-pledge");
var thankYou = document.querySelector(".thank-you");
var cont = document.querySelectorAll(".continue");
var gotIt = document.getElementById("got-it");
var styleSheet = document.styleSheets[0];
var bkmCntr = document.getElementById("bm-text");
var bookmark = document.getElementById("bkm-text");
var tracer = 0;
menuOpen.addEventListener("click", () => {
    styleSheet.cssRules[3].style.inset = "0";
    if (tracer == 1) {
        styleSheet.cssRules[4].style.inset = "0";
    }
    if (tracer == 2) {
        styleSheet.cssRules[5].style.inset = "0";
    }
    menuClose.style.display = "block";
    menuOpen.style.display = "none"
    nav.style.display = "block";
});
menuClose.addEventListener("click", () => {
    menuClose.style.display = "none";
    menuOpen.style.display = "block"

    nav.style.display = "none";
    if (tracer == 1) {

        styleSheet.cssRules[4].style.inset = "";
    }
    else if (tracer == 2) {
        styleSheet.cssRules[5].style.inset = "";
    }
    else {
        styleSheet.cssRules[3].style.inset = "";

    }

}
);
back.addEventListener("click", () => {
    tracer = 1
    styleSheet.cssRules[3].style.inset = "0";
    backPage.style.display = "block";
})
backClose.addEventListener("click", () => {
    tracer = 0;
    styleSheet.cssRules[3].style.inset = "";
    backPage.style.display = "none";
})
Array.from(radio).forEach((element, index) => {
    element.addEventListener("change", () => {
        if (element.checked) {
            yourPledge[index].style.display = "flex";
            pledger[index].style.borderColor = "rgb(0, 126, 86)";
        }
        for (let x = 0; x < Array.from(radio).length; x++) {
            if (index == x)
                continue;
            pledger[x].style.borderColor = "";
            yourPledge[x].style.display = "none";
        }
    });
});
Array.from(cont).forEach((element) => {
    element.addEventListener("click", () => {
        tracer = 2;
        styleSheet.cssRules[3].style.inset = "0";
        backPage.style.display = "none";
        thankYou.style.display = "block";
    })
});
gotIt.addEventListener("click", () => {
    console.log(bookmark);
    tracer = 0;
    styleSheet.cssRules[3].style.inset = "";
    thankYou.style.display = "none";
    bookmark.style.color = " rgb(0, 126, 86)";
    bookmark.innerHTML = "bookmarked";
})


