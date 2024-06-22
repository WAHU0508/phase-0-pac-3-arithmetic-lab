//test1
function add() {

}
//test2
function subtract() {

}
//test3
function multiply() {

}
//test4
function divide() {

}
//test5
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
//test6
function subtract(a, b) {
    return a - b;
}
console.log(subtract(10, 4));
//test7
function multiply(a, b) {
    return a * b;
}
console.log(multiply(6, 8));
//test8
function divide(a, b) {
    return a / b;
}
console.log(divide(81, 3));
//test9
function increment(n) {
    n++;
    return n;
}
console.log(increment(5));
//test10
function decrement(n) {
    n--;
    return n;
}
console.log(decrement(9));
//tests 11, 12 and 13
function makeInt(string) {
    return parseInt(string, 10);
}
console.log(makeInt("11"));
//tests 14 and 15
function preserveDecimal(string) {
    return parseFloat(string);
}
console.log(preserveDecimal("9.124786"));