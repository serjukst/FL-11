function getMin () {
    let minNumber = Infinity;
    for (var i = 0; i < arguments.length; i++) {
      if (arguments[i] < minNumber) {
        minNumber = arguments[i];
      }
    }
    return minNumber;
}
getMin();