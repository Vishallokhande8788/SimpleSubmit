document.getElementById("my-form").addEventListener("submit", function (e) {
  e.preventDefault(); // stop Page reload 

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    showAlert("⚠️ Enter both Name and Email!", "error");
  } else if (!validateEmail(email)) {
    showAlert("⚠️ Enter a valid Email!", "error");
  } else {
    showAlert(
      `✅ Name: ${name}<br>✅ Email: ${email}<br>Submitted successfully! 🎉`,
      "success"
    );

    // Input Fields Clear 
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
  }
});

// Custom Alert Function
function showAlert(message, type) {
  let alertBox = document.getElementById("custom-alert");
  let alertMessage = document.getElementById("alert-message");

  alertMessage.innerHTML = message;
  alertBox.style.display = "block"; // show Alert 
  alertBox.classList.add("show");

  if (type === "error") {
    alertBox.style.border = "2px solid #FF4B2B";
  } else {
    alertBox.style.border = "2px solid #00D1FF";
  }
}

//  Email Validation Function
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

//  Close Alert Function
function closeAlert() {
  let alertBox = document.getElementById("custom-alert");
  alertBox.classList.remove("show");
  alertBox.style.display = "none"; // Alert Hide 
}
