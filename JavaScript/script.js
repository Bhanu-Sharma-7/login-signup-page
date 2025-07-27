// Show/Hide password button ko get kar rahe hain (button jisme "Show Password" likha hai)
const showPass = document.getElementById("show-and-hide");

// Password input field ko get kar rahe hain (jisme type="password" hota hai)
const passValue = document.getElementById("password");

// Jab "Show/Hide Password" button par click hoga
showPass.addEventListener("click", () => {
  
  // Check karte hain ki abhi password hidden hai ya visible
  const isHidden = passValue.type === "password";

  // Agar hidden hai to uska type text kar do (visible), warna password (hidden)
  passValue.type = isHidden ? "text" : "password";

  // Button ke text ko accordingly change karte hain
  showPass.textContent = isHidden ? "Hide Password" : "Show Password";
});