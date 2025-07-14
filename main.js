const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");
const calcBtn = document.querySelector("#calculate");
const resultBox = document.querySelector("#result");

calcBtn.addEventListener("click",()=>{
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
    const bmi = weight / (height * height);
     if (bmi < 16) {
          resultBox.textContent = "Underweight";
    } else if (bmi < 28) {
      resultBox.textContent = ("BMI waa:"+ " " +bmi.toFixed(1) +" Normal");
    } else {
          resultBox.textContent = "Overweight";
        }
    resultBox.classList.add("text-green-600");
})