//U22978120

export function calculateInvestmentReturn(principal, rate, time) {
    const compoundingFrequency = 12; // Assuming monthly compounding
    const totalPeriods = time * compoundingFrequency;
    return principal * Math.pow(1 + rate / compoundingFrequency, totalPeriods);
  }
