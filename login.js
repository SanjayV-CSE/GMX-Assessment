function login() {
  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;

  // Checking the username and password are correct or not
  if (username === "login" && password === "11") {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    window.location.href = "DetailsPage/staffpage.html";
  }
  if (username === "login" && password === "22") {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Redirect the user to the studentpage
    window.location.href = "nxtpage1/studentpage.html";
  } else {
    // Display the message if it is wrong
    const errorMessage = document.getElementById("error-message");
    errorMessage.innerHTML = "Invalid username or password";
  }
}
