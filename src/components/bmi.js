const html = `
<div class="container">
  <div class="box">
    <h1>BMI Calculator</h1>
    <div class="content">
      <div class="input">
        <label for="height">Age</label>
        <input
          type="text"
          class="text-input"
          id="age"
          autocomplete="off"
          required
        />
      </div>

      <div class="gender">
        <label class="container">
          <input type="radio" name="radio" id="m" />
          <p class="text">Male</p>
          <span class="checkmark"></span>
        </label>

        <label class="container">
          <input type="radio" name="radio" id="f" />
          <p class="text">Female</p>
          <span class="checkmark"></span>
        </label>
      </div>

      <div class="containerHW">
        <div class="inputH">
          <label for="height">Height(cm)</label>
          <input type="number" id="height" required />
        </div>

        <div class="inputW">
          <label for="weight">Weight(kg)</label>
          <input type="number" id="weight" required />
        </div>
      </div>

      <button class="calculate" id="submit">
        Calculate BMI
      </button>
    </div>
    <div class="result">
      <p>Your BMI is</p>
      <div id="result">00.00</div>
      <p class="comment"></p>
    </div>
    <div class="footer">
      <a class="footer-text" target="_blank" href="https://myskypower.net/"></a>
    </div>
  </div>
</div>

<div id="myModal" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <p id="modalText"></p>
  </div>
</div>

<script>
document.addEventListener("DOMContentLoaded", function () {
  console.log("loaded");

  var age = document.getElementById("age");
  var height = document.getElementById("height");
  var weight = document.getElementById("weight");
  var male = document.getElementById("m");
  var female = document.getElementById("f");
  var form = document.getElementById("form");
  let resultArea = document.querySelector(".comment");

  var modalContent = document.querySelector(".modal-content");
  var modalText = document.querySelector("#modalText");
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  const button = document.querySelector(".calculate");

  function calculate() {
    if (
      age.value == "" ||
      height.value == "" ||
      weight.value == "" ||
      (male.checked == false && female.checked == false)
    ) {
      modal.style.display = "block";
      modalText.innerHTML = "All fields are required!";
    } else {
      countBmi();
    }
  }

  button.addEventListener("click", calculate);

  function countBmi() {
    var p = [age.value, height.value, weight.value];
    if (male.checked) {
      p.push("male");
    } else if (female.checked) {
      p.push("female");
    }

    var bmi = Number(p[2]) / (((Number(p[1]) / 100) * Number(p[1])) / 100);

    var result = "";
    if (bmi < 18.5) {
      result = "Underweight";
    } else if (18.5 <= bmi && bmi <= 24.9) {
      result = "Healthy";
    } else if (25 <= bmi && bmi <= 29.9) {
      result = "Overweight";
    } else if (30 <= bmi && bmi <= 34.9) {
      result = "Obese";
    } else if (35 <= bmi) {
      result = "Extremely obese";
    }

    resultArea.style.display = "block";
    document.querySelector(
      ".comment"
    ).innerHTML = \`You are <span id="comment">\${result}</span>\`;
    document.querySelector("#result").innerHTML = bmi.toFixed(2);
  }

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
</script>
`;

export default html;
