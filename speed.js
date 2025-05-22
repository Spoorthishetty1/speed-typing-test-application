const sentences = `The quick brown fox jumps over the lazy dog.
Sphinx of black quartz, judge my vow.
Pack my box with five dozen liquor jugs.
How vexingly quick daft zebras jump!`;

const sentenceEl = document.getElementById("sentence");
const inputEl = document.getElementById("input");
const startBtn = document.getElementById("start-btn");
const retryBtn = document.getElementById("retry-btn");
const timerEl = document.getElementById("timer");
const resultDiv = document.getElementById("result");
const speedEl = document.getElementById("speed");
const accuracyEl = document.getElementById("accuracy");

let timer;
let timeLeft = 30;
let originalText = "";

function resetTimer() {
  clearInterval(timer);
  timeLeft = 30;
  timerEl.textContent = "00:30";
}

function updateTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `00:${timeLeft < 10 ? "0" : ""}${timeLeft}`;
    if (timeLeft === 0) {
      clearInterval(timer);
      finishTest();
    }
  }, 1000);
}

// Task 1: Start Test
startBtn.addEventListener("click", () => {
  inputEl.disabled = false;
  inputEl.value = "";
  inputEl.focus();
  sentenceEl.textContent = sentences;
  originalText = sentences.trim();

  startBtn.disabled = true;
  resultDiv.style.display = "none";

  resetTimer();
  updateTimer();
});

// Task 2: Finish Test
function finishTest() {
  inputEl.disabled = true;
  startBtn.disabled = true;
  resultDiv.style.display = "block";

  const userText = inputEl.value.trim();
  const originalWords = originalText.split(/\s+/);
  const typedWords = userText.split(/\s+/);

  // Speed Calculation
  let correctWords = 0;
  for (let i = 0; i < typedWords.length && i < originalWords.length; i++) {
    if (typedWords[i] === originalWords[i]) {
      correctWords++;
    }
  }
  const wpm = Math.round((correctWords / 30) * 60);
  speedEl.textContent = wpm;

  // Accuracy Calculation
  let correctChars = 0;
  const minLen = Math.min(userText.length, originalText.length);
  for (let i = 0; i < minLen; i++) {
    if (userText[i] === originalText[i]) {
      correctChars++;
    }
  }
  const accuracy = originalText.length === 0 ? 0 : ((correctChars / originalText.length) * 100).toFixed(2);
  accuracyEl.textContent = accuracy;
}

// Task 3: Retry Test
retryBtn.addEventListener("click", () => {
  inputEl.disabled = false;
  inputEl.value = "";
  sentenceEl.textContent = "";
  startBtn.disabled = false;
  resultDiv.style.display = "none";
  resetTimer();
});
