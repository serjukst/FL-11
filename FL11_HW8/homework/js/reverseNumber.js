function reverseNumber (number) {
    return (
        parseFloat(number.toString().split('').reverse().join('')) * Math.sign(number)
      )     
}
reverseNumber ();