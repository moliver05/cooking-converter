//Prompt for user
gallon = parseFloat(prompt("Enter gallons to convert to liters:"));

//US Gallons to liters formula
function gallonToLiter(gallon) {
  return gallon * 3.785411784;
};

//returns results
result = gallonToLiter(gallon) + " liters.";
alert(result);
