const phoneNumberInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

checkButton.addEventListener("click", () => {
  const phoneNumber = phoneNumberInput.value.trim();

  if (!phoneNumber) {
    alert("Please provide a phone number");
    return;
  }

  const isValid = validatePhoneNumber(phoneNumber);

  if (isValid) {
    results.textContent = `Valid US number: ${phoneNumber}`;
  } else {
    results.textContent = `Invalid US number: ${phoneNumber}`;
  }
});

clearButton.addEventListener("click", () => {
  results.innerHTML = "";
});

function validatePhoneNumber(phoneNumber) {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
  return regex.test(phoneNumber);
}
