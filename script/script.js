console.log(bmi);

const bmiButton = document.getElementById("BMIButton");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const text = document.getElementById("bmi");

let height, weight, BMI;
bmiButton.addEventListener("click", function () {
  height = heightInput.value / 100;
  weight = weightInput.value;
  if (weight > 0 && weight < 400 && height > 0 && height < 400) {
    BMI = weight / (height * height);
    BMI = BMI.toFixed(2);
    text.textContent = `Your BMI is : ${BMI}`;
  }
});
