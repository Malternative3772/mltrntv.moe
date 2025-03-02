const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/malte-pfp.png") {
    myImage.setAttribute("src", "images/shikinouta2.png");
  } else {
    myImage.setAttribute("src", "images/malte-pfp.png");
  }
});

let myButton = document.querySelector("#changeUser");
let myButton2 = document.querySelector("#removeUser");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    return;
  }
  localStorage.setItem("name", myName);
}

if (localStorage.getItem("name")) {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Hey there, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
  location.reload();
});

myButton2.addEventListener("click", () => {
  localStorage.removeItem("name");
  location.reload();
});
