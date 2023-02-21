const convertToCelsius = function(temperature) {
  // Convert a temperature in CELSIUS to FAHRENHEIT.
  // Conversion equation:
  //    <write equation from Wiki here>
  // inputs: 
  //    temperature (number): in units of Fahreinheit
  // outputs:
  //    temperature (number): in units of Celsius
  
  let cel = (temperature - 32) * (5/9);
  let roundedCel = Number(cel.toFixed(1));
  return roundedCel;
};

const convertToFahrenheit = function(temperature) {
  // Convert a temperature in CELSIUS to FAHRENHEIT.
  // Conversion equation:
  //    <write equation from Wiki here>
  // inputs: 
  //    temperature (number): in units of Fahreinheit
  // outputs:
  //    temperature (number): in units of Celsius

  let fahr = temperature * (9/5) + 32;
  let roundedFahr = Number(fahr.toFixed(1));
  return roundedFahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
