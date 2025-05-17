document.addEventListener("DOMContentLoaded", () => {
    const loginTab = document.getElementById('loginTab');
    const registerTab = document.getElementById('registerTab');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
  
    // 🔁 Tab Switcher
    loginTab.addEventListener('click', () => {
      loginTab.classList.add('active-tab');
      registerTab.classList.remove('active-tab');
      loginForm.classList.add('active-form');
      registerForm.classList.remove('active-form');
    });
  
    registerTab.addEventListener('click', () => {
      registerTab.classList.add('active-tab');
      loginTab.classList.remove('active-tab');
      registerForm.classList.add('active-form');
      loginForm.classList.remove('active-form');
    });
  
    // 📝 Register Handler (Simulated)
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const name = registerForm[0].value;
      const email = registerForm[1].value;
      const password = registerForm[2].value;
  
      if (!name || !email || !password) {
        alert("Please fill all fields.");
        return;
      }
  
      // Save fake token and email locally
      localStorage.setItem("token", "mock-token");
      localStorage.setItem("email", email);
  
      alert("Registered successfully! You can now log in.");
      loginTab.click();
    });
  
    // 🔐 Login Handler (Simulated)
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const email = loginForm[0].value;
      const password = loginForm[1].value;
  
      if (!email || !password) {
        alert("Please enter email and password.");
        return;
      }
  
      // Set mock token/email (you can later validate this with backend)
      localStorage.setItem("token", "mock-token");
      localStorage.setItem("email", email);
  
      alert("Login successful!");
      window.location.href = "dashboard.html";
    });
  });
  
  
