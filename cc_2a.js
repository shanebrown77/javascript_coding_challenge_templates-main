//coding Challenge 2a - Shane Brown

const productName = "Midi Piano";

let costPerUnit = 200;
let basePrice = 250;
let discountRate = 0.20;
let salesTaxRate = 0.05;
let fixedMonthlyCosts = 700;


let discountPrice = basePrice * (1-discountRate);
let finalPriceWithTax = discountPrice * (1+salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;


console.log(productName);
console.log(discountPrice);
console.log(finalPriceWithTax);
console.log(profitPerUnit);
console.log(breakEvenUnits);
console.log(isProfitablePerUnit);