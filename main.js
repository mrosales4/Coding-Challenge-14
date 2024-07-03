//U22978120

//Import
import { calculateInterest } from './interest.js';
import { calculateLoanPayment } from './loanPayment.js';
import { calculateInvestmentReturn } from './returnInvestment.js';

function calculateInterestRate() {
  const principal = parseFloat(document.getElementById('interestPrincipal').value);
  const rate = parseFloat(document.getElementById('interestRate').value);
  const time = parseFloat(document.getElementById('interestTime').value);

  if (validateInput(principal, rate, time)) {
    const interest = calculateInterest(principal, rate, time);
    document.getElementById('interestResult').textContent = `Interest: ${interest.toFixed(2)}`;
  }
}
// Loan payment Amount calculation
function calculateLoanPaymentAmount() {
  const principal = parseFloat(document.getElementById('loanPrincipal').value);
  const rate = parseFloat(document.getElementById('loanRate').value);
  const time = parseFloat(document.getElementById('loanTime').value);

  if (validateInput(principal, rate, time)) {
    const payment = calculateLoanPayment(principal, rate, time);
    document.getElementById('loanPaymentResult').textContent = `Monthly Payment: ${payment.toFixed(2)}`;
  }
}

function calculateInvestmentGrowth() {
  const principal = parseFloat(document.getElementById('investmentPrincipal').value);
  const rate = parseFloat(document.getElementById('investmentRate').value);
  const time = parseFloat(document.getElementById('investmentTime').value);

  if (validateInput(principal, rate, time)) {
    const futureValue = calculateInvestmentReturn(principal, rate, time);
    document.getElementById('investmentResult').textContent = `Future Value: ${futureValue.toFixed(2)}`;
  }
}

function validateInput(principal, rate, time) {
  if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
    alert('Please enter valid numbers for all fields.');
    return false;
  }
  return true;
}

// Add event listeners for buttons
document.getElementById('calculateInterestButton').addEventListener('click', calculateInterestRate);
document.getElementById('calculateLoanPaymentButton').addEventListener('click', calculateLoanPaymentAmount);
document.getElementById('calculateInvestmentButton').addEventListener('click', calculateInvestmentGrowth);
