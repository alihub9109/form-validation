const form = document.getElementById("registrationForm");
const passInput = document.getElementById("password");
const passConfirm = document.getElementById("confirmPassword");
const confirmMessage = document.getElementById("confirmMessage");
const submitBtn = document.querySelector(".submit-btn");
const emailInput = document.getElementById("email");
const nameInput = document.getElementById("fullName");
const countryInput = document.getElementById("country");

// ===== Helper Functions =====
function showError(input, message) {
  let error = document.getElementById(`${input.id}Error`);
  if (!error) {
    error = document.createElement("span");
    error.id = `${input.id}Error`;
    error.className = "error-message";
    input.parentNode.appendChild(error);
  }
  error.textContent = message;
  input.style.borderColor = "red";
}

function clearError(input) {
  const error = document.getElementById(`${input.id}Error`);
  if (error) error.textContent = "";
  input.style.borderColor = "#ccc";
}

function isValidName(name) {
  return /^[a-zA-Z\s]+$/.test(name);
}

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function isRadioSelected(name) {
  return document.querySelector(`input[name="${name}"]:checked`);
}

function isAnyCheckboxChecked(name) {
  return [...document.querySelectorAll(`input[name="${name}"]`)].some(c => c.checked);
}

function updateBackgroundBasedOnGender() {
  const femaleRadio = document.querySelector('input[name="gender"][value="female"]');
  if (femaleRadio && femaleRadio.checked) {
    document.body.style.background = "linear-gradient(to right, #f8bbd0, #f48fb1)";
    document.querySelectorAll("h2").forEach(h2 => {
      h2.style.color = "#f8bbd0";
    });
    document.querySelectorAll("label").forEach(label => {
      label.style.color = "#f48fb1";
    });
    submitBtn.style.background = "#f48fb1";

    // Focus styling for female
    document.querySelectorAll("input").forEach(input => {
      input.addEventListener("focus", () => {
        input.style.borderColor = "#f48fb1";
      });
      input.addEventListener("blur", () => {
        input.style.borderColor = "#ccc";
      });
    });
  } else {
    document.body.style.background = "linear-gradient(to right, #e3f2fd, #bbdefb)";
    document.querySelectorAll("h2").forEach(h2 => {
      h2.style.color = "#1565c0";
    });
    document.querySelectorAll("label").forEach(label => {
      label.style.color = "#1565c0";
    });
    submitBtn.style.background = "#1565c0";
    
    // Focus styling for male (or default)
    document.querySelectorAll("input").forEach(input => {
      input.addEventListener("focus", () => {
        input.style.borderColor = "#1565c0";
      });
      input.addEventListener("blur", () => {
        input.style.borderColor = "#ccc";
      });
    });
  }
}

// ===== Password Validation =====
function validatePassword() {
  checkPasswordMatch();
  toggleSubmitButton();
}

function checkPasswordMatch() {
  const pass = passInput.value;
  const confirm = passConfirm.value;

  if (!confirm) {
    confirmMessage.textContent = "";
    toggleSubmitButton();
    return;
  }

  if (pass !== confirm) {
    confirmMessage.textContent = "Passwords do NOT match!";
    confirmMessage.style.color = "red";
  } else {
    confirmMessage.textContent = "Passwords match!";
    confirmMessage.style.color = "green";
  }

  toggleSubmitButton();
}

function toggleSubmitButton() {
  const passFilled = passInput.value.trim() !== "";
  const match = passInput.value === passConfirm.value;
  submitBtn.disabled = !(passFilled && match);
  submitBtn.classList.toggle("disabled", submitBtn.disabled);
}

// ===== Final Submission Handler =====
form.addEventListener("submit", function (e) {
  let hasError = false;

  if (!isValidName(nameInput.value.trim())) {
    showError(nameInput, "Name must only contain letters and spaces. Numbers are not allowed.");
    nameInput.focus();
    hasError = true;
  } else {
    clearError(nameInput);
  }

  if (!isRadioSelected("gender")) {
    alert("Please select your gender.");
    hasError = true;
  }

  if (!isAnyCheckboxChecked("hobbies")) {
    alert("Please select at least one hobby.");
    hasError = true;
  }

  if (countryInput.value === "") {
    alert("Please select your country.");
    hasError = true;
  }

  const email = emailInput.value.trim();
  if (!email.includes("@") || !email.includes(".")) {
    showError(emailInput, "Email must include '@' and '.'");
    emailInput.focus();
    hasError = true;
  } else if (!isValidEmail(email)) {
    showError(emailInput, "Please enter a valid email address.");
    emailInput.focus();
    hasError = true;
  } else {
    clearError(emailInput);
  }

  if (passInput.value !== passConfirm.value) {
    confirmMessage.textContent = "Passwords do NOT match!";
    confirmMessage.style.color = "red";
    passConfirm.focus();
    hasError = true;
  } else {
    confirmMessage.textContent = "";
  }

  if (!hasError) {
    e.preventDefault();const form = document.getElementById("registrationForm");
    const passInput = document.getElementById("password");
    const passConfirm = document.getElementById("confirmPassword");
    const confirmMessage = document.getElementById("confirmMessage");
    const submitBtn = document.querySelector(".submit-btn");
    const emailInput = document.getElementById("email");
    const nameInput = document.getElementById("fullName");
    const countryInput = document.getElementById("country");
    const genderRadios = document.querySelectorAll('input[name="gender"]');
    const hobbyCheckboxes = document.querySelectorAll('input[name="hobbies"]');
    
    // ===== Helper Functions =====
    function showError(input, message) {
      let error = document.getElementById(`${input.id}Error`);
      if (!error) {
        error = document.createElement("span");
        error.id = `${input.id}Error`;
        error.className = "error-message";
        input.parentNode.appendChild(error);
      }
      error.textContent = message;
      input.style.borderColor = "red";
    }
    
    function clearError(input) {
      const error = document.getElementById(`${input.id}Error`);
      if (error) error.textContent = "";
      input.style.borderColor = "#ccc";
    }
    
    function isValidName(name) {
      return /^[a-zA-Z\s]+$/.test(name);
    }
    
    function isValidEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
    
    function isRadioSelected(name) {
      return document.querySelector(`input[name="${name}"]:checked`);
    }
    
    function isAnyCheckboxChecked(name) {
      return [...document.querySelectorAll(`input[name="${name}"]`)].some(c => c.checked);
    }
    
    function updateBackgroundBasedOnGender() {
      const femaleRadio = document.querySelector('input[name="gender"][value="female"]');
      if (femaleRadio && femaleRadio.checked) {
        // Update background and elements
        document.body.style.background = "linear-gradient(to right, #f8bbd0, #f48fb1)";
        document.querySelectorAll("h2").forEach(h2 => {
          h2.style.color = "#f8bbd0";
        });
        document.querySelectorAll("label").forEach(label => {
          label.style.color = "#f48fb1";
        });
        submitBtn.style.background = "#f48fb1";
        // Update checkboxes and radio buttons
        document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(input => {
          input.style.borderColor = "#f48fb1";
        });
        hobbyCheckboxes.forEach(cb => {
          cb.style.backgroundColor = "#f8bbd0";
        });
      } else {
        // Reset to default styles for non-female selection
        document.body.style.background = "linear-gradient(to right, #e3f2fd, #bbdefb)";
        document.querySelectorAll("h2").forEach(h2 => {
          h2.style.color = "#1565c0";
        });
        document.querySelectorAll("label").forEach(label => {
          label.style.color = "#1565c0";
        });
        submitBtn.style.background = "#1565c0";
        document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach(input => {
          input.style.borderColor = "#1565c0";
        });
        hobbyCheckboxes.forEach(cb => {
          cb.style.backgroundColor = "#e3f2fd";
        });
      }
    }
    
    // ===== Password Validation =====
    function validatePassword() {
      checkPasswordMatch();
      toggleSubmitButton();
    }
    
    function checkPasswordMatch() {
      const pass = passInput.value;
      const confirm = passConfirm.value;
    
      if (!confirm) {
        confirmMessage.textContent = "";
        toggleSubmitButton();
        return;
      }
    
      if (pass !== confirm) {
        confirmMessage.textContent = "Passwords do NOT match!";
        confirmMessage.style.color = "red";
      } else {
        confirmMessage.textContent = "Passwords match!";
        confirmMessage.style.color = "green";
      }
    
      toggleSubmitButton();
    }
    
    function toggleSubmitButton() {
      const passFilled = passInput.value.trim() !== "";
      const match = passInput.value === passConfirm.value;
      submitBtn.disabled = !(passFilled && match);
      submitBtn.classList.toggle("disabled", submitBtn.disabled);
    }
    
    // ===== Final Submission Handler =====
    form.addEventListener("submit", function (e) {
      let hasError = false;
    
      if (!isValidName(nameInput.value.trim())) {
        showError(nameInput, "Name must only contain letters and spaces. Numbers are not allowed.");
        nameInput.focus();
        hasError = true;
      } else {
        clearError(nameInput);
      }
    
      if (!isRadioSelected("gender")) {
        alert("Please select your gender.");
        hasError = true;
      }
    
      if (!isAnyCheckboxChecked("hobbies")) {
        alert("Please select at least one hobby.");
        hasError = true;
      }
    
      if (countryInput.value === "") {
        alert("Please select your country.");
        hasError = true;
      }
    
      const email = emailInput.value.trim();
      if (!email.includes("@") || !email.includes(".")) {
        showError(emailInput, "Email must include '@' and '.'");
        emailInput.focus();
        hasError = true;
      } else if (!isValidEmail(email)) {
        showError(emailInput, "Please enter a valid email address.");
        emailInput.focus();
        hasError = true;
      } else {
        clearError(emailInput);
      }
    
      if (passInput.value !== passConfirm.value) {
        confirmMessage.textContent = "Passwords do NOT match!";
        confirmMessage.style.color = "red";
        passConfirm.focus();
        hasError = true;
      } else {
        confirmMessage.textContent = "";
      }
    
      if (!hasError) {
        e.preventDefault();
    
        const newWindow = window.open("", "_blank");
    
        const gender = document.querySelector('input[name="gender"]:checked')?.value || "";
        const hobbies = [...document.querySelectorAll('input[name="hobbies"]:checked')]
          .map(cb => cb.value).join(", ");
        const country = countryInput.value;
        const bio = document.getElementById("bio").value;
    
        newWindow.document.write(`
          <html>
          <head>
            <title>Registration Summary</title>
            <style>
              html, body {
                height: 100%;
                margin: 0;
                padding: 0;
              }
    
              body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: ${gender === "female"
                  ? "linear-gradient(to right, #ff9a9e , #fecfef)"
                  : "linear-gradient(to right, #e3f2fd, #bbdefb)"};
                color: #333;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 20px;
                line-height: 1.6;
              }
    
              .container {
                background: #fff;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                padding: 30px;
                max-width: 800px;
                width: 100%;
                max-height: 100%;
                overflow-y: auto;
              }
    
              h2 {
                text-align: center;
                color: ${gender === "female" ? "#ff9a9e" : "#1565c0"};
                margin-bottom: 20px;
                font-size: 2rem;
              }
    
              p {
                font-size: 1rem;
                margin-bottom: 10px;
                word-wrap: break-word;
              }
    
              strong {
                color: #333;
              }
    
              .summary-section {
                margin-bottom: 20px;
              }
    
              .footer {
                text-align: center;
                margin-top: 40px;
                font-size: 0.9rem;
                color: #777;
              }
    
              @media (max-width: 600px) {
                h2 {
                  font-size: 1.5rem;
                }
    
                .container {
                  padding: 20px;
                }
    
                p {
                  font-size: 0.95rem;
                }
              }
    
              @media (max-width: 400px) {
                h2 {
                  font-size: 1.25rem;
                }
    
                p {
                  font-size: 0.9rem;
                }
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h2>Registration Summary</h2>
    
              <div class="summary-section">
                <p><strong>Full Name:</strong> ${nameInput.value}</p>
                <p><strong>Email:</strong> ${emailInput.value}</p>
                <p><strong>Gender:</strong> ${gender.charAt(0).toUpperCase() + gender.slice(1).toLowerCase()}</p>
                <p><strong>Hobbies:</strong> ${hobbies.charAt(0).toUpperCase() + hobbies.slice(1).toLowerCase()}</p>
                <p><strong>Country:</strong> ${country.charAt(0).toUpperCase() + country.slice(1).toLowerCase()}</p>
                <p><strong>Bio:</strong> ${bio}</p>
              </div>
    
              <div class="footer">
                <p>Thank you for registering with us!</p>
              </div>
            </div>
          </body>
          </html>
        `);
      }
    });
    
    // ===== Live Input Validation =====
    nameInput.addEventListener("input", () => {
      const name = nameInput.value.trim();
      if (!/^[a-zA-Z\s]*$/.test(name)) {
        showError(nameInput, "Name must only contain letters and spaces. Numbers are not allowed.");
      } else if (name === "") {
        showError(nameInput, "Name is required.");
      } else {
        clearError(nameInput);
      }
    });
    
    emailInput.addEventListener("input", () => {
      const email = emailInput.value.trim();
      if (!email.includes("@") || !email.includes(".")) {
        showError(emailInput, "Email must include '@' and '.'");
      } else if (!isValidEmail(email)) {
        showError(emailInput, "Please enter a valid email address.");
      } else {
        clearError(emailInput);
      }
    });
    
    passInput.addEventListener("input", validatePassword);
    passConfirm.addEventListener("input", checkPasswordMatch);
    
    // ===== Gender Background Update on Change =====
    genderRadios.forEach(radio => {
      radio.addEventListener("change", updateBackgroundBasedOnGender);
    });
    

    const newWindow = window.open("", "_blank");

    const gender = document.querySelector('input[name="gender"]:checked')?.value || "";
    const hobbies = [...document.querySelectorAll('input[name="hobbies"]:checked')]
      .map(cb => cb.value).join(", ");
    const country = countryInput.value;
    const bio = document.getElementById("bio").value;

    newWindow.document.write(`
      <html>
      <head>
        <title>Registration Summary</title>
        <style>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: ${gender === "female"
      ? "linear-gradient(to right, #ff9a9e , #fecfef)"
      : "linear-gradient(to right, #e3f2fd, #bbdefb)"};
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    line-height: 1.6;
  }

  .container {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 30px;
    max-width: 800px;
    width: 100%;
    max-height: 100%;
    overflow-y: auto;
  }

  h2 {
    text-align: center;
    color: ${gender === "female" ? "#ff9a9e" : "#1565c0"};
    margin-bottom: 20px;
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 10px;
    word-wrap: break-word;
  }

  strong {
    color: #333;
  }

  .summary-section {
    margin-bottom: 20px;
  }

  .footer {
    text-align: center;
    margin-top: 40px;
    font-size: 0.9rem;
    color: #777;
  }

  @media (max-width: 600px) {
    h2 {
      font-size: 1.5rem;
    }

    .container {
      padding: 20px;
    }

    p {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 400px) {
    h2 {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
</style>

      </head>
      <body>
        <div class="container">
          <h2>Registration Summary</h2>

          <div class="summary-section">
            <p><strong>Full Name:</strong> ${nameInput.value}</p>
            <p><strong>Email:</strong> ${emailInput.value}</p>
            <p><strong>Gender:</strong> ${gender.charAt(0).toUpperCase() + gender.slice(1).toLowerCase()}</p>
            <p><strong>Hobbies:</strong> ${hobbies.charAt(0).toUpperCase() + hobbies.slice(1).toLowerCase()}</p>
            <p><strong>Country:</strong> ${country.charAt(0).toUpperCase() + country.slice(1).toLowerCase()}</p>
            <p><strong>Bio:</strong> ${bio}</p>
          </div>

          <div class="footer">
            <p>Thank you for registering with us!</p>
          </div>
        </div>
      </body>
      </html>
    `);
  }
});

// ===== Live Input Validation =====
nameInput.addEventListener("input", () => {
  const name = nameInput.value.trim();
  if (!/^[a-zA-Z\s]*$/.test(name)) {
    showError(nameInput, "Name must only contain letters and spaces. Numbers are not allowed.");
  } else if (name === "") {
    showError(nameInput, "Name is required.");
  } else {
    clearError(nameInput);
  }
});

emailInput.addEventListener("input", () => {
  const email = emailInput.value.trim();
  if (!email.includes("@") || !email.includes(".")) {
    showError(emailInput, "Email must include '@' and '.'");
  } else if (!isValidEmail(email)) {
    showError(emailInput, "Please enter a valid email address.");
  } else {
    clearError(emailInput);
  }
});

passInput.addEventListener("input", validatePassword);
passConfirm.addEventListener("input", checkPasswordMatch);

// ===== Gender Background Update on Change =====
document.querySelectorAll('input[name="gender"]').forEach(radio => {
  radio.addEventListener("change", updateBackgroundBasedOnGender);
});
