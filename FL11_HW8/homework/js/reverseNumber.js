function reverseNumber(n) {
  let result = '';
  if (n >= 0) {
    while (n) {
      result += (n % 10);
      result *= 10;

      n = Math.floor(n / 10);
    }
  } else {
    n = n * (-1);
    while (n) {
      result += (n % 10);
      result *= 10;

      n = Math.floor(n / 10);
    }
    result = result * (-1);
  }
  return result / 10;
}
reverseNumber();