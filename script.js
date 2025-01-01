// Toggle sidebar for mobile
const mySidebar = document.getElementById("mySidebar");

function w3_open() {
  mySidebar.style.display = mySidebar.style.display === "block" ? "none" : "block";
}

function w3_close() {
  mySidebar.style.display = "none";
}
