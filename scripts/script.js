var run1 = function () {
  document.calc.result.value += "1";
}
var run2 = function () {
  document.calc.result.value += "2";
}
var run3 = function () {
  document.calc.result.value += "3";
}
var run4 = function () {
  document.calc.result.value += "4";
}
var run5 = function () {
  document.calc.result.value += "5";
}
var run6 = function () {
  document.calc.result.value += "6";
}
var run7 = function () {
  document.calc.result.value += "7";
}
var run8 = function () {
  document.calc.result.value += "8";
}
var run9 = function () {
  document.calc.result.value += "9";
}
var runTimes = function () {
  document.calc.result.value += "*";
}
var runDivide = function () {
  document.calc.result.value += "/";
}
var runAdd = function () {
  document.calc.result.value += "+";
}
var runSubtract = function () {
  document.calc.result.value += "-";
}
var runClear = function () {
  document.calc.result.value = "";
}
var runEvaluate = function () {
  var evalu = eval(document.calc.result.value)
  document.calc.result.value = evalu
}
