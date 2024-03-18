
const tempinput = document.getElementById("tempinput")
const fahrenheitcheck = document.getElementById("fahrenheitcheck")
const celciuscheck = document.getElementById("celciuscheck")
const result = document.getElementById("result")
let temp;

function convert() {
  if (fahrenheitcheck.checked) {
     temp = Number(tempinput.value);
     temp = (temp * 9/5) +32;
     result.textContent = temp.toFixed(1) + "°F"

  }
  else if (celciuscheck.checked) {
    temp = Number(tempinput.value);
    temp = (temp - 32) * (5/9);
    result.textContent = temp.toFixed(1) + "°C"
  }
  else {
    result.textContent = `you have not selected a unit`
  }
}