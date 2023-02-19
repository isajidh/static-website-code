// Select the h1 element
const header = document.querySelector("h1");

// Add an event listener for when the user clicks on the header
header.addEventListener("click", () => {
  // Change the background color of the body to a random color
  const colors = ["#FF5733", "#C70039", "#900C3F", "#581845"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
