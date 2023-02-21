const convertToCelsius = function(temperature) {
  // Convert a temperature in CELSIUS to FAHRENHEIT.
  // Conversion equation:
  //    <write equation from Wiki here>
  // inputs: 
  //    temperature (number): in units of Fahreinheit
  // outputs:
  //    temperature (number): in units of Celsius
  
  let cel = temperature * (9/5) + 32;
  cel.toFixed(1);
  return cel;
};

const convertToFahrenheit = function(temperature) {
  // Convert a temperature in CELSIUS to FAHRENHEIT.
  // Conversion equation:
  //    <write equation from Wiki here>
  // inputs: 
  //    temperature (number): in units of Fahreinheit
  // outputs:
  //    temperature (number): in units of Celsius

  let fahr = (temperature - 32) * (5/9);
  fahr.toFixed(1);
  return fahr;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
