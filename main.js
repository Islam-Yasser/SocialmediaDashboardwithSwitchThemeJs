var ball = document.getElementsByClassName("toggle");
ball[0].addEventListener("mouseenter", changetheme, false);
var box = document.getElementsByClassName("box");
var box1 = document.getElementsByClassName("box1");
var dark = true;
var codark = "#333A56";
var colight = "#E1E3F0";
var dlight = "#F0F3FA";
var ddark = "hsl(230, 20%, 18%)";
function changetheme() {
  ball[0].style.cursor = "pointer";
  console.log("pointer");
  var ball1 = document.getElementsByClassName("ball");
  ball1[0].addEventListener("click", (event1) => {
    console.log("themeChange");
    if (document.body.hasAttribute("theme-dark")) {
      document.body.removeAttribute("theme-dark");
      document.body.setAttribute("theme-light", "light");
      event1.target.style.marginLeft = "2rem";
      dark = false;
      for (let i = 0; i < box.length; i++) {
        if (dark === false) {
          box[i].style.backgroundColor = dlight;
        } else {
          box[i].style.backgroundColor = ddark;
        }
      }
      for (let i = 0; i < box1.length; i++) {
        if (dark === false) {
          box1[i].style.backgroundColor = dlight;
        } else {
          box1[i].style.backgroundColor = ddark;
        }
      }

    } else {
      console.log("themeChange to dark");
      document.body.removeAttribute("theme-light");
      document.body.setAttribute("theme-dark", "dark");
      event1.target.style.marginLeft = "3px";
      dark = true;
      for (let i = 0; i < box.length; i++) {
        if (dark === false) {
          box[i].style.backgroundColor = dlight;
        } else {
          box[i].style.backgroundColor = ddark;
        }
      }
      for (let i = 0; i < box1.length; i++) {
        if (dark === false) {
          box1[i].style.backgroundColor = dlight;
        } else {
          box1[i].style.backgroundColor = ddark;
        }
      }
    }
  });
}
for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("mouseenter", (eve) => {
    box[i].style.cursor = "pointer";
    if (dark === false) {
      box[i].style.backgroundColor = colight;
    } else {
      box[i].style.backgroundColor = codark;
    }
  });
}
for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("mouseleave", (eve) => {
    if (dark === false) {
      box[i].style.backgroundColor = dlight;
    } else {
      box[i].style.backgroundColor = ddark;
    }
  });
}
for (let i = 0; i < box1.length; i++) {
  box1[i].addEventListener("mouseenter", (eve) => {
    box1[i].style.cursor = "pointer";
    if (dark === false) {
      box1[i].style.backgroundColor = colight;
    } else {
      box1[i].style.backgroundColor = codark;
    }
  });
}
for (let i = 0; i < box1.length; i++) {
  box1[i].addEventListener("mouseleave", (eve) => {
    if (dark === false) {
      box1[i].style.backgroundColor = dlight;
    } else {
      box1[i].style.backgroundColor = ddark;
    }
  });
}
