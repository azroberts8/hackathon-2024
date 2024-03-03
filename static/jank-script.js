const input = document.getElementById("searchBox");
const button = document.getElementById("searchButton");

button.addEventListener("click", () => window.location.replace(window.origin + "/stock/" + input.value));