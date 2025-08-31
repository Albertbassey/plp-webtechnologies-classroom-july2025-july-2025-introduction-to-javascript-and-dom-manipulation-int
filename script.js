// Part 1: JavaScript Basics
let userNumber = 0;

document.getElementById("checkBtn").addEventListener("click", () => {
  userNumber = parseInt(document.getElementById("userInput").value);
  if (userNumber > 10) {
    document.getElementById("result").textContent = "That's a big number!";
  } else {
    document.getElementById("result").textContent = "That's a small number!";
  }
});

// Part 2: Functions
function calculateSquare(num) {
  return num * num;
}

function formatGreeting(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}

// Using the functions
console.log(calculateSquare(5)); // 25
console.log(formatGreeting("Ada")); // Hello, Ada! Welcome to JavaScript.

// Part 3: Loops
const fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

let countdown = 5;
while (countdown > 0) {
  console.log(`Countdown: ${countdown}`);
  countdown--;
}

// Part 4: DOM Manipulation
// Toggle visibility of a message
document.getElementById("toggleBtn").addEventListener("click", () => {
  const msg = document.getElementById("message");
  msg.classList.toggle("hidden");
});

// Dynamically create list items
const listContainer = document.getElementById("listContainer");
const items = ["Learn JS", "Practice DOM", "Build Projects"];

items.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  listContainer.appendChild(li);
});

// Change text content dynamically
document.getElementById("message").textContent = "DOM is powerful!";