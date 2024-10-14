export function formatNumber(num: number): string {
    if (Math.abs(num) >= 1.0e12) {
      return (num / 1.0e12).toFixed(2) + "T"; // Trillions
    } else if (Math.abs(num) >= 1.0e9) {
      return (num / 1.0e9).toFixed(2) + "B"; // Billions
    } else if (Math.abs(num) >= 1.0e6) {
      return (num / 1.0e6).toFixed(2) + "M"; // Millions
    } else if (Math.abs(num) >= 1.0e3) {
      return (num / 1.0e3).toFixed(2) + "K"; // Thousands
    } else {
      return num.toString(); // Less than 1000
    }
  }