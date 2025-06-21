const display = document.getElementById('display');

function append(value) {
  if (display.innerText === "0" || display.innerText === "Error") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function backspace() {
  if (display.innerText.length > 1 && display.innerText !== "Error") {
    display.innerText = display.innerText.slice(0, -1);
  } else {
    display.innerText = "0";
  }
}

function calculate() {
  try {
    // eval is used with caution here for basic arithmetic
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = "Error";
  }
}
