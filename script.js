// **Here's a breakdown of the code, explaining its functionality:** **1. HTML Structure:**              - **<!DOCTYPE html>**: Declares the document as HTML5.                   **<html>**: Root element of the   document. **<head>**: Contains metadata like title, styles, and links.**<title>Age Calculator</title>**: Sets the title of the page. **<link rel="stylesheet" href="[https://cdn.jsdelivr.net/npm/water.css@2/out/water.min.css](https://cdn.jsdelivr.net/npm/water.css@2/out/water.min.css)">**: Links to an external stylesheet for styling. **<style>**: Inline styles for basic formatting. **<body>**: Contains the visible content of the page. **<h1>Age Calculator</h1>**: Main heading. **<div class="container">**: Groups elements together for layout. **<label for="birthday">Enter your birthday:</label>**: Label for the input field. **<input type="date" id="birthday">**: Date input field for entering birthday. **<button id="calculate-button">Calculate Age</button>**: Button to trigger age calculation. **<p id="result"></p>**: Paragraph to display the calculated age.
//**2. JavaScript Functionality:**

// **<script src="[https://cdn.jsdelivr.net/npm/simple-ui@4.4.3/dist/simple-ui.min.js](https://cdn.jsdelivr.net/npm/simple-ui@4.4.3/dist/simple-ui.min.js)"></script>**: Imports a library for UI elements.
//**<script>**: Contains JavaScript code for calculations and interactions.
//**Selects HTML elements**: References the input field, button, and result paragraph using their IDs.
//**Adds event listener**: Attaches a click event listener to the button.
//**Calculates age on button click** Retrieves the entered birthday from the input field. Creates Date objects for the birthday and current date. Calculates age in years, months, and days using Date object methods. Adjusts ageYears if the birthday hasn't passed yet in the current year.Displays the calculated age in both the p element and a SimpleUI success message.
//**Key Points:**
// The code uses HTML for structure and presentation, CSS for styling, and JavaScript for interactivity and calculations.
//It demonstrates basic form input, event handling, and date manipulation in JavaScript.
//It utilizes an external library (SimpleUI) for a simple UI element (success message).


const birthdayInput = document.getElementById('birthday');
const calculateButton = document.getElementById('calculate-button');
const result = document.getElementById('result');

calculateButton.addEventListener('click', () => {
  const birthday = new Date(birthdayInput.value);
  const today = new Date();

  const ageYears = today.getFullYear() - birthday.getFullYear();
  const ageMonths = today.getMonth() - birthday.getMonth();
  const ageDays = today.getDate() - birthday.getDate();

  if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
    ageYears--;
  }

  result.textContent = `Your age is: ${ageYears} years old`;

  SimpleUI.success(`You are ${ageYears} years old`);
});
