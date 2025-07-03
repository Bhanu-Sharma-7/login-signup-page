const showPass = document.getElementById("show-and-hide");
const passValue = document.getElementById("password");

showPass.addEventListener("click", () => {
  if (passValue.type == "password") {
    passValue.type = "text";
  } else {
    passValue.type = "password";
  }
});