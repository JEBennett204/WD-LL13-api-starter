/*
🧠 Copilot Helper Notes – Please Follow These Guidelines:

This is a beginner-friendly project. Suggestions should:
- Use plain JavaScript (no frameworks, Canvas, or game libraries).
- Use `fetch()` with `.then()` syntax (not async/await unless requested).
- Prefer `const` and `let`, and keep variable/function names clear and descriptive.
- Use `||` and `&&` in conditionals only when needed – clarity first.
- Break logic into small, readable functions when appropriate.
- Avoid advanced ES6+ features (e.g., destructuring, optional chaining) unless scaffolded.
- Avoid arrow functions unless needed for clarity or brevity.
- Add helpful inline comments, especially around tricky logic or new patterns.

This helps students learn to read, debug, and extend code confidently.
*/

/*
Students — No need to worry about this block! 
It’s just here to help Copilot support you better. 
Start your code below 👇
*/

// Select the card body and button elements
const factOutput = document.getElementById("fact-output");
const factBtn = document.getElementById("new-fact-btn");

// Show a placeholder before the first click
factOutput.innerHTML = "Click the button to see a fun fact!";

// Function to fetch and display a fun fact
function fetchFunFact() {
  // Show loading message
  factOutput.innerHTML = "Loading a fun fact...";
  // Fetch from the Useless Facts API
  fetch('https://uselessfacts.jsph.pl/random.json?language=en')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Animate the fact in the card
      factOutput.innerHTML = `<span>${data.text}</span>`;
      factOutput.classList.remove("grow-in"); // Reset animation
      // Force reflow to restart animation
      void factOutput.offsetWidth;
      factOutput.classList.add("grow-in");
    })
    .catch(function(error) {
      // Show a user-friendly error message
      factOutput.innerHTML = "Oops! Couldn't load a fact.";
      factOutput.classList.remove("grow-in");
      void factOutput.offsetWidth;
      factOutput.classList.add("grow-in");
      console.error("Error fetching data:", error);
    });
}

// Button click event to fetch a new fact
factBtn.addEventListener("click", fetchFunFact);

// Optionally, fetch a fact on first load (uncomment to auto-load)
// fetchFunFact();