let startBtn = document.getElementById("startBtn");
let textInput = document.getElementById("textInput");
let showText = document.getElementById("showText");
let result = document.getElementById("speed");

let data = ["JavaScript is a scripting language enables ",
  "It also enables users to load content ",
  "such as dropdown menus animated",
  "A scripting language used to create ",
  "How JavaScript Work and why JS famous"]
let randomNum = Math.random() * data.length;
let randomData = data[Math.floor(randomNum)];
console.log(randomData);

let startTime;
let endTime;

startBtn.addEventListener("click", function() {

  const endFun = () => {
    let time = new Date();
    endTime = time.getTime();
    let completionTime = Math.floor((endTime - startTime) / 1000);
    let wordLength = textInput.value.split(" ").length;
    let speed = Math.round((wordLength / completionTime) * 60);

    result.innerHTML = "You wrote " + wordLength + " words in " + completionTime + " seconds. Your typing speed is " + speed + " words per minute";

    // Clear the typed text and displayed text after the test is done (Optional)
    textInput.value = "";
    showText.innerHTML = "";
  }

  if (startBtn.innerText == "Start") {
    textInput.disabled = false;
    textInput.style.backgroundColor = "white";
    startBtn.innerText = "Done";
    let time = new Date();
    startTime = time.getTime();
    showText.innerHTML = randomData;
  } else if (startBtn.innerText == "Done") {
    textInput.disabled = true;
    startBtn.innerText = "Start";
    endFun();
  }
});