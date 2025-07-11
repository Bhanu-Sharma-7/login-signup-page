const showPass = document.getElementById("show-and-hide");
const passValue = document.getElementById("password");

showPass.addEventListener("click", () => {
  const isHidden = passValue.type === "password";
  passValue.type = isHidden ? "text" : "password";
  showPass.textContent = isHidden ? "Hide Password" : "Show Password";
});
