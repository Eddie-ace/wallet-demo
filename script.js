let balance = 150.00;
let transactions = [];

function updateUI() {
  document.querySelector("#balance span").textContent = balance.toFixed(2);
  const txList = document.getElementById("transactions");
  txList.innerHTML = "";
  transactions.slice().reverse().forEach(tx => {
    const li = document.createElement("li");
    li.textContent = tx;
    txList.appendChild(li);
  });
}

function sendMoney() {
  const amount = prompt("Enter amount to send:");
  if (amount && !isNaN(amount) && amount > 0 && amount <= balance) {
    balance -= parseFloat(amount);
    transactions.push(`Sent $${amount}`);
    updateUI();
  } else {
    alert("Invalid amount or insufficient funds.");
  }
}

function receiveMoney() {
  const amount = prompt("Enter amount to receive:");
  if (amount && !isNaN(amount) && amount > 0) {
    balance += parseFloat(amount);
    transactions.push(`Received $${amount}`);
    updateUI();
  } else {
    alert("Invalid amount.");
  }
}

updateUI();
