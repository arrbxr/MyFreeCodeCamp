"use strict";

var test = function () {
  var testString = "How many spaces are there in this sentence?";

  // Only change code below this line.

  var expression = /\s+/g;

  // Only change code above this line.

  return testString.match(expression).length;
}();(function () {
  return test;
})();

//# sourceMappingURL=regex-find-whitespace-compiled.js.map