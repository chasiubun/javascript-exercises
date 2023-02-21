onst convertToCelsius = function(temperature) {
  // Convert a temperature in fahrenheit to celsius.
  // Conversion equation:
  //    <write equation from Wiki here>
  // inputs: 
  //    temperature (number): in units of Fahreinheit
  // outputs:
  //    temperature (number): in units of Celsius
  
  let cel = temperature * (9/5) + 32;
  return cel;
};

const convertToFahrenheit = function(temperature) {
  // Convert a temperature in CELSIUS.
  // Conversion equation:
  //    <write equation from Wiki here>
  // inputs: 
  //    temperature (number): in units of Fahreinheit
  // outputs:
  //    temperature (number): in units of Celsius

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
