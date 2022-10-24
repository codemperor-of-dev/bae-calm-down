const switchBtn = document.querySelectorAll(".switchPage");
const sections = document.querySelectorAll("section");
console.log(sections);
switchBtn.forEach((button) => {
  button.addEventListener("click", (event) => {
    for (let i = 0; i < sections.length - 1; i++) {
      let section = sections[i];
      if (section.id === event.target.getAttribute("data-nextId")) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    }
  });
});

let options = {
  strings: ["Please...", "Fill Form..."],
  typeSpeed: 50,
  backSpeed: 40,
  backDelay: 2000,
  loop: true,
};

let typed = new Typed(".element", options);
const madQuestion = document.getElementById("mad-question");
const sulkingQuestion = document.getElementById("sulking-question");
const choiceQuestion = document.getElementById("choice-question");
const moodQuestion = document.getElementById("mood-question");
const seriousQuestion = document.getElementById("serious-question");

const madForm = document.getElementById("mad-form");
const sulkingForm = document.getElementById("sulking-form");
const choiceForm = document.getElementById("choice-form");
const moodForm = document.getElementById("mood-form");
const upsetForm = document.getElementById("upset-form");
const seriousForm = document.getElementById("serious-form");
const allForm = document.getElementById("all-form");
const thanksText = document.getElementById("thanks-text")
const typedCursor = document.querySelector(".typed-cursor");

sulkingForm.style.display = "none";
choiceForm.style.display = "none";
moodForm.style.display = "none";
upsetForm.style.display = "none";
seriousForm.style.display = "none";


madQuestion.addEventListener("click", function () {
  madForm.style.display = "none"
  switch (this.value) {
    case "1":
      sulkingForm.style.display = "grid";
 
      break;
    case "2":
      moodForm.style.display = "grid"
      break;
    case "3":
      seriousForm.style.display = "grid"
      break;
  }
});
moodQuestion.addEventListener("click", function () {
  if (this.value === "1") {
    moodForm.style.display = "none";
    upsetForm.style.display = "grid"
  }
});
seriousQuestion.addEventListener("click", function () {
  if (this.value === "1") {
    seriousForm.style.display = "none"
    madForm.style.display = "grid";
  } else {
    allForm.remove();
    thanksText.remove();
    typedCursor.remove();
    document.body.innerHTML += `
    <div  class="d-flex  justify-content-center p-5 m-5"">
    <button class="submit-btn ">Submit</button>
</div>
<div  class="d-flex justify-content-center ">
  <h1 class="text-color fw-bold">Thanks For Using Our Service</h1>
</div>
    `;
  }
});

sulkingQuestion.addEventListener("click", function () {
console.log(this.value)
sulkingForm.style.display = "none"
choiceForm.style.display = "block"
  switch (this.value) {
    case "1":
         
        choiceQuestion.innerHTML = `<option class="color-form-bg sc-padding m-0 fw-bold text-white text-center"  disabled>What do you wanna eat?</option>`;
      break;
    case "2":  
        choiceQuestion.innerHTML = `<option class="color-form-bg sc-padding m-0 fw-bold text-white text-center"  disabled>What movie would you love?</option>`;
      break;
    case "3": 
        choiceQuestion.innerHTML = `<option class="color-form-bg sc-padding m-0 fw-bold text-white text-center"  disabled>What do you want as a love gift?</option>`;
      break;
  }
});
