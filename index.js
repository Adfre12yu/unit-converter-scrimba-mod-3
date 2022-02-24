const inputEl = document.getElementById("input-unit-el");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

inputEl.addEventListener("change", function () {
  render();
});

inputEl.value = "20";

function render() {
  const value = inputEl.value;
  lengthEl.innerText = `${value} meters = ${(value * 3.28084).toFixed(
    3
  )} feet | ${value} feet = ${(value * 0.3048).toFixed(3)} meters`;

  volumeEl.innerText = `${value} liters = ${(value * 0.264172).toFixed(
    3
  )}  gallons | ${value} gallons = ${(value * 3.78541).toFixed(3)} liters`;

  massEl.innerText = `${value} kilos = ${(value * 2.20462).toFixed(
    3
  )} pounds | ${value} pounds = ${(value * 0.453592).toFixed(3)} kilos`;
}

render();
