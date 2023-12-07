// Selecting elements
const inputField = document.querySelector("#userInput");
const result = document.querySelector("#ourResult");
const btnCheck = document.querySelector("#palindromeChecker");
const btnOpenModal = document.querySelector("#openModalButton");
const modal = document.querySelector(".modal");
const modalContent = document.getElementById("modalContent");

// Functions
function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

function palindromeChecker() {
  openModal();

  let userInput = inputField.value.trim();
  let reversedInput = userInput.split("").reverse().join("");
  if (!userInput) {
    result.innerHTML = "Please enter a word.";
  } else if (userInput == reversedInput) {
    result.innerHTML = `${userInput} is a PALINDROME`;
  } else {
    result.innerHTML = `${userInput} is NOT A PALINDROME`;
  }

  inputField.value = "";
}

// Event listeners
modalContent.addEventListener("click", (e) => {
  e.stopPropagation();
});
modal.addEventListener("click", closeModal);
btnCheck.addEventListener("click", palindromeChecker);
btnOpenModal.addEventListener("click", openModal);
