// Write your solution in this file!
var customerName = "bob";

//uppercase
function upperCaseCustomerName() {
  customerName.toUpperCase();
}
console.log(upperCaseCustomerName());

// declares a variable called bestCustomer in global scope and assign it to be 'not bob'
var bestCustomer;
function setBestCustomer() {
  bestCustomer = "not bob";
  return bestCustomer;
}
console.log(setBestCustomer());

//overwrites the bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
  return bestCustomer;
}
console.log(overwriteBestCustomer());

const leastFavoriteCustomer = "njoroge";
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "micheal";
  //return leastFavoriteCustomer;
}
console.log(leastFavoriteCustomer);
