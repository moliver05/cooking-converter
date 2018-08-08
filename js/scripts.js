//US Gallons to liters formula
function gallonToLiter(gallon) {
  return gallon * 3.785411784;
};
//Liters to US Gallons
function literToGallon(liter) {
  return liter / 3.785411784;
};

//returns results
// result = gallonToLiter(gallon) + " liters.";
// alert(result);


//User Interface
$(document).ready(function() {
  //First convert
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var gallonToLiterInput = $("input#gallonXLiter").val();
    var gallonToLiterInput = parseFloat(gallonToLiterInput);
    gallonToLiterInput = gallonToLiter(gallonToLiterInput);
    gallonToLiterInput = gallonToLiterInput.toFixed(2) + " liters."
    $("#outputOne").text(gallonToLiterInput);
  })

  //Second convert
  $("#formTwo").submit(function(event) {
    event.preventDefault();
    var literToGallonInput = $("input#literXGallon").val();
    var literToGallonInput = parseFloat(literToGallonInput);
    literToGallonInput = literToGallon(literToGallonInput);
    literToGallonInput = literToGallonInput.toFixed(2) + " gallons."
    $("#outputTwo").text(literToGallonInput);
  })
})
