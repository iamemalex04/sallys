
function myFunction() {
    alert("Your details have been successfully submitted");
}

const form = document.getElementById('myForm');
const responseDiv = document.getElementById('response');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('password').value;

  // Save form details to local storage
  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);

  // Send form details to server (example using fetch API)
  fetch('/submit-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })
  .then((response) => response.text())
  .then((message) => {
    responseDiv.innerHTML = `Form submitted successfully! ${message}`;
  })
  .catch((error) => {
    responseDiv.innerHTML = `Error submitting form: ${error.message}`;
  });
});



const fOrm = document.getElementById('loginForm');
const ResponseDiv = document.getElementById('response');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Save user details to local storage
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);

  // Login successfully, show welcome message
  responseDiv.innerHTML = `Welcome, ${username}!`;
});

// Check if user has already logged in
const storedUsername = localStorage.getItem('username');
const storedPassword = localStorage.getItem('password');

if (storedUsername && storedPassword) {
  responseDiv.innerHTML = `Welcome back, ${storedUsername}!`;
}
