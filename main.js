const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");
const calcBtn = document.querySelector("#calculate");
const resultBox = document.querySelector("#result");
const btnreset=document.querySelector("#Reset")
const icon=document.querySelector("#icon")

calcBtn.addEventListener("click",()=>{
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
    const bmi = weight / (height * height);
          if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
          resultBox.textContent = "Fadlan geli xog sax ah.";
          resultBox.style.color="red"
          return;
        }
     if (bmi < 16) {
          resultBox.textContent = "Under weigth";
    } else if (bmi < 28) {
      resultBox.textContent = "Normal";
    } else {
          resultBox.textContent = "Over weigth";
        }
    resultBox.classList.add("text-green-600");
    if(bmi<16){
      icon.innerHTML="💪"
    }else if(bmi<28){
      icon.innerHTML="👍"
    }
    else{
      icon.innerHTML="😱"
    }
})
btnreset.addEventListener("click", ()=>{
    resultBox.textContent=""
    weight.textContent=""
    height.innerHTML="none"
    icon.textContent=""
})