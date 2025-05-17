document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
  
    // If no token or email, redirect to login
    if (!token || !email) {
      alert("Please login first.");
      window.location.href = "auth.html";
      return;
    }
  
    // 👋 Greet the user
    document.querySelector(".dashboard-title").innerText = `Welcome, ${email} 👋`;
  
    // 💰 Show mock balance
    document.getElementById("balance").innerText = "₹ 12,500.00";
  
    // 📜 Mock transaction history
    document.getElementById("txn-list").innerHTML = `
      <li>+ ₹500 — Deposit</li>
      <li>- ₹250 — Grocery Transfer</li>
      <li>+ ₹2,000 — Refund</li>
    `;
  });
  
  