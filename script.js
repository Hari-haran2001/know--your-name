// let userInput = prompt("what is your name");

// document.body.children[0].children[0].textContent = `welcom to${userInput}
// ${document.body.children[0].children[0].textContent} `;

//DOM -SELECTORS

//let result = document.getElementById("inputTxt");
//console.log(document.body.title);

// let bodyEl = document.querySelectorAll("script");

// FOR-OF LOOP METHOD
// for (let script of bodyEl) {
//   console.log(script.src);
// }
// // console.log(bodyEl[0].src);

// FOR-EACH METHOD
// bodyEl.forEach(function (arr) {
//   console.log(arr.src);
// });

// O/P - SAME OUTPUT - 2(COLLECTION OF) SCRIPT SRC

// let testEl = document.getElementById("test");
// let result = testEl.innerText;
// for (let script of result) {
//   console.log(script.src);
// }

//DOM-EVENT
// let bodyEl = document.querySelector("body");
// bodyEl.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
//   console.log("right clikce");
// });

// let bodyEl1 = document.querySelector("body");
// bodyEl.addEventListener("contextmenu", () => {
//   alert("you clicked the right click");
// });

// let testEl = document.querySelector(".hi");

// testEl.addEventListener("click", () => {
//   alert("heyyyy");
// });

let inputTxtEl = document.querySelector("input#inputTxt");

let btnEl = document.querySelector("button");

let greetingResultEl = document.getElementById("greetingResult");

let changeBg = document.querySelector("#changeBG");

let greetCyberTxtEl = document.querySelector("#greetCyberTxt");
//console.log(greetCyberTxtEl);

let greetNewEl = document.querySelector("greetNew");
function captilizeWords(inputName) {
  const wordswithSpaces = inputName.split(" ");
  const captilizeWords = wordswithSpaces.map((name) => {
    return name.charAt(0).toUpperCase() + name.split(1);
  });

  return captilizeWords.join(" ");
}

btnEl.addEventListener("click", () => {
  showwlcomecard();
});

//let myName = "hari haran";
// let spaceName = myName.split(" ");
// let result = spaceName.map((name) => {
//   return name.charAt(0).toUpperCase() + name.slice(1);
// });
// console.log(result.join(" "));

changeBg.addEventListener("click", () => {
  const bodyEl = document.body;
  bodyEl.style.backgroundColor =
    "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0");

  const bgEl = document.getElementById("changeBG");
  //bgEl.style.fontSize = "xx-small";
});

// function myFunction() {
//   document.getElementById("test").style.backgroundColor = "red";
// }

document.addEventListener("DOMContentLoaded", () => {
  greetingResultEl.style.display = "none";
  document.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
      showwlcomecard();
    }
  });
});

//press the enter button this function called
function showwlcomecard() {
  if (inputTxtEl) {
    let inputName = inputTxtEl.value;
    if (inputName.length > 3 && inputName.length < 20) {
      greetingResultEl.innerHTML = `Hello😍 ${captilizeWords(inputName)}!`;
      inputTxtEl.value = "";
      greetingResultEl.style.display = "block";
    } else {
      alert("Please enter a valid name with length between 4 and 9 characters");
    }
  }
}
