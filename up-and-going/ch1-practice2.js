// write a program to calculate 
//total price of phone purchases (loop) until
// run out of money in bank account
// buy accessories for each phone if purchase amount is < mental spending threshold
// after calculated purchase amount add tax
//print purchase amount properly formatted
// check amount vs bank account to see if can afford
// set up constants Tax rate, phone price, accessory price, spending threshold
// Variable for bank account balance
// define functions calculating tax, formatting with $ rounding to 2 decimal places

// *Bonus challenge incorporate input with prompt "prompt user for bank account balance"

const spendingLimit = 300;
const phonePrice = 99.98;
const lasVegasNmTaxRate = .083958;
const accessoryPrice = 14.99;

// let checkingBalance = 423.63;
let amount = 0;
checkingBalance = prompt("Please tell me your checking balance");

// function calculateTax(amount) {
//   return amount * lasVegasNmTaxRate;
// }

// const calculateTax = (amount) => {
//   return amount * lasVegasNmTaxRate;
// }

const calculateTax = (amount) => (amount * lasVegasNmTaxRate)

// console.log(calculateTax(1));

// function formatAmount(amount) {
//   return "$" + amount.toFixed(2);
// }

const formatAmount = (amount) => {
  return `$${amount.toFixed(2)}`
}

// const formatAmount = (amount) => (`$${amount.toFixed(2)}`)

console.log(formatAmount(99.98345))

// while (amount < checkingBalance) {
//   amount = amount + phonePrice;

//   if (amount < spendingLimit) {
//     amount = amount + accessoryPrice;
//   }
// }

while  (checkingBalance - amount > amount) {
  amount = amount + phonePrice;

  if (spendingLimit >= amount + accessoryPrice) {
    amount = amount + accessoryPrice;
  }
}

amount = amount + calculateTax(amount);

console.log(
  `Your purchase: ${formatAmount(amount)}`
);

if (amount > checkingBalance) {
  console.log(
    `You can not afford this purchase.`
  )
} else {
  console.log(`Conga Ratz on your new Purchase!!`)
}