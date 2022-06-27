// ELEMENTS
const btnNavToggle = document.getElementById("nav-toggle");
const hambTop = document.getElementById("hamb-top");
const hambMid = document.getElementById("hamb-mid");
const hambBtm = document.getElementById("hamb-btm");
const crossLR = document.getElementById("cross-lr");
const crossRL = document.getElementById("cross-rl");
const header = document.getElementById("header");

const lines = Array(hambTop, hambMid, hambBtm, crossLR, crossRL);

// Making it work
function toggleNavMenu() {
    // Toggle button
    for (let line of lines) {
        if (line.getAttribute("on-screen") === "initial") {
            if (line.className[0] === "h") {
                line.setAttribute("on-screen", "false");
            } else if (line.className[0] === "c") {
                line.setAttribute("on-screen", "true");
            }

        } else if (line.getAttribute("on-screen") === "true") {
            line.setAttribute("on-screen", "false");
            if (line.className[0] === "c") {
                setTimeout(() => {
                    line.setAttribute("on-screen", "initial")
                }, 500);
            }

        } else if (line.getAttribute("on-screen") === "false") {
            line.setAttribute("on-screen", "true");
        }
    }


    // Toggle menu
    if (header.getAttribute("on-screen") === "partial" || header.getAttribute("on-screen") === "initial") {
        header.setAttribute("on-screen", "full"); 
    } else if (header.getAttribute("on-screen") === "full") {
        header.setAttribute("on-screen", "partial"); 
    }
}


    




btnNavToggle.addEventListener("click", toggleNavMenu);