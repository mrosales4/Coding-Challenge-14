//U22978120

//Create loan payment calculation 
export function calculateLoanPayment(principal, rate, time) {
    const monthlyRate = rate / 12;
    const totalPayments = time * 12;
    return (principal * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
  }
