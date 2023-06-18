let hours = 0;
let x = 0, y = 0, z = 0;
let totalSeconds = 0;
let countdownTimer;
let remainingSeconds = 0;

document.getElementById("up1").onclick = function() {
  document.getElementById("start").style.display = "inline-block";
  hours += 1;
  if (hours === 60) {
    hours = 0;
  }
  document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
  x = hours;
};

document.getElementById("down1").onclick = function() {
  document.getElementById("start").style.display = "inline-block";
  if (hours === 0) {
    hours = 60;
  }
  hours -= 1;
  document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
  x = hours;
};

let minutes = 0;

document.getElementById("up2").onclick = function() {
  document.getElementById("start").style.display = "inline-block";
  minutes += 1;
  if (minutes === 60) {
    minutes = 0;
  }
  document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
  y = minutes;
};

document.getElementById("down2").onclick = function() {
  document.getElementById("start").style.display = "inline-block";
  
  if (minutes === 0) {
    minutes = 60;
  }
  minutes -= 1;
  document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
  y = minutes;
};

let seconds = 0;

document.getElementById("up3").onclick = function() {
  document.getElementById("start").style.display = "inline-block";
  seconds += 1;
  if (seconds === 60) {
    seconds = 0;
  }
  document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
  z = seconds;
};

document.getElementById("down3").onclick = function() {
  document.getElementById("start").style.display = "inline-block";
  if (seconds === 0) {
    seconds = 60;
  }
  seconds -= 1;
  document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
  z = seconds;
};
function speakCountdown() {
  let utterance = new SpeechSynthesisUtterance("BRO THE Counting          is              down...");
  speechSynthesis.speak(utterance);
}

function startCountdown() {
  totalSeconds = x * 3600 + y * 60 + z;
  //if(totalSeconds===0){ document.getElementById("start").style.display = "none"; }else{document.getElementById("start").style.display = "inline-block";}
  countdownTimer = setInterval(function() {
    let displayHours = Math.floor(totalSeconds / 3600);
    remainingSeconds = totalSeconds % 3600;
    let displayMinutes = Math.floor(remainingSeconds / 60);
    let displaySeconds = remainingSeconds % 60;

    displayHours = displayHours < 10 ? "0" + displayHours : displayHours;
    displayMinutes = displayMinutes < 10 ? "0" + displayMinutes : displayMinutes;
    displaySeconds = displaySeconds < 10 ? "0" + displaySeconds : displaySeconds;

    document.getElementById("hours").innerHTML = displayHours;
    document.getElementById("minutes").innerHTML = displayMinutes;
    document.getElementById("seconds").innerHTML = displaySeconds;
    if (totalSeconds <= 0) {document.getElementById("text").innerHTML = "end"; document.getElementById("pause").style.display = "none";
     };
    if (totalSeconds <= -1) {
      clearInterval(countdownTimer);
      speakCountdown();
      
      location.reload();
    }

    totalSeconds--;
  }, 1000);

  // Hide the "Start" button and show the other buttons
  
  document.getElementById("pause").style.display = "inline-block";
  document.getElementById("continue").style.display = "inline-block";
  document.getElementById("reset").style.display = "inline-block";
}

let pauseButton = document.getElementById("pause");
let continueButton = document.getElementById("continue");
let upButton1 = document.getElementById("up1");
let upButton2 = document.getElementById("up2");
let upButton3 = document.getElementById("up3");

document.getElementById("start").onclick = function() {

  startCountdown();
   continueButton.style.display = "none";
  document.getElementById("start").style.display = "none";
  upButton1.style.display = "none";
  upButton2.style.display = "none";
  upButton3.style.display = "none";
  document.getElementById("down1").style.display = "none";
  document.getElementById("down2").style.display = "none";
  document.getElementById("down3").style.display = "none";
  document.getElementById("text").innerHTML = "counting.............";
  
};


document.getElementById("pause").onclick = function() {
  document.getElementById("pause").style.display = "none";
  clearInterval(countdownTimer);
  document.getElementById("text").innerHTML = "PAUSED"
  continueButton.style.display = "inline-block";
};

document.getElementById("reset").onclick = function() {
  clearInterval(countdownTimer);
 location.reload();
};

document.getElementById("continue").onclick = function() {
  x = Math.floor(remainingSeconds / 3600);
  y = Math.floor((remainingSeconds % 3600) / 60);
  z = remainingSeconds % 60;
  startCountdown();
  continueButton.style.display = "none";
  document.getElementById("text").innerHTML = "counting............."
  startButton.style.display = "inline-block"; 
};