function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let nameRegex = /^[A-Za-z ]{3,}$/;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!nameRegex.test(name)) {
    alert("Name should contain at least three letters");
    return false;
  }

  if (!passwordRegex.test(password)) {
    alert("Enter a valid password");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("Enter a valid email only");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}
