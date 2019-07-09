function getMin () {
    let args = [];
    for (var i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }
    return Math.min.apply(null, args);
}
getMin();