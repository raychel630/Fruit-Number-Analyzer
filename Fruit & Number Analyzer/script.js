const BASE_NUMBER = 10; // constant

// Function to greet user
function greetUser(name) {
  return `Hello, ${name}!`;
}

function analyze() {
  let name = document.getElementById("userName").value;
  let num = Number(document.getElementById("userNumber").value);
  let sentence = document.getElementById("userSentence").value;

  // Fruits input
  let fruits = [
    document.getElementById("fruit1").value,
    document.getElementById("fruit2").value,
    document.getElementById("fruit3").value
  ].filter(f => f.trim() !== ""); // remove empty

  let output = "";

  // 1. Variables & Arithmetic
  output += `<h3>${greetUser(name)}</h3>`;
  output += `<p><b>BASE_NUMBER:</b> ${BASE_NUMBER}</p>`;
  output += `<p>Sum: ${BASE_NUMBER + num}</p>`;
  output += `<p>Difference: ${BASE_NUMBER - num}</p>`;
  output += `<p>Product: ${BASE_NUMBER * num}</p>`;
  output += `<p>Quotient: ${(num !== 0 ? BASE_NUMBER / num : "undefined (division by zero)")}</p>`;

  // 2. Strings
  output += `<p>Uppercase: ${sentence.toUpperCase()}</p>`;
  output += `<p>Lowercase: ${sentence.toLowerCase()}</p>`;

  // 3. If Statement & Ternary
  if (num >= 0) {
    output += `<p>IF check: The number is Positive</p>`;
  } else {
    output += `<p>IF check: The number is Negative</p>`;
  }
  output += `<p>Ternary check: The number is ${num >= 0 ? "Positive" : "Negative"}</p>`;

  // 4. Loops
  output += `<p>For Loop (1 to n): `;
  for (let i = 1; i <= num; i++) {
    output += i + " ";
  }
  output += `</p>`;

  output += `<p>While Loop (countdown from 5): `;
  let i = 5;
  while (i > 0) {
    output += i + " ";
    i--;
  }
  output += `</p>`;

  // 5. Arrays & Functions
  output += `<p>Your favorite fruits: ${fruits.join(", ")}</p>`;

  document.getElementById("results").innerHTML = output;

  // Auto scroll to results
  document.getElementById("results").scrollIntoView({ behavior: "smooth" });
}
