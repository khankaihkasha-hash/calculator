const display = document.getElementById("display");
const historyList = document.getElementById("historyList");
const sound = document.getElementById("clickSound");

/* SOUND */
function playSound(){
  sound.currentTime = 0;
  sound.play();
}

/* INPUT */
function append(val){
  playSound();
  display.value += val;
}

function clearDisplay(){
  playSound();
  display.value = "";
}

function deleteLast(){
  playSound();
  display.value = display.value.slice(0,-1);
}

/* CALCULATE */
function calculate(){
  try{
    let result = eval(display.value);
    historyList.innerHTML += `<li>${display.value} = ${result}</li>`;
    display.value = result;
  }catch{
    display.value = "Error";
  }
}

/* KEYBOARD */
document.addEventListener("keydown", function(e){
  if(!isNaN(e.key) || "+-*/.%".includes(e.key)){
    append(e.key);
  }
  if(e.key === "Enter") calculate();
  if(e.key === "Backspace") deleteLast();
});

/* DARK MODE */
document.getElementById("modeToggle").addEventListener("change",()=>{
  document.body.classList.toggle("dark");
});