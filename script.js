function convertLength() {
  const input = document.getElementById('lengthInput').value;
  const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;

  // Conversion factors (to meters)
  const conversionFactors = {
    cm: 0.01,
    m: 1,
    km: 1000,
    in: 0.0254,
    ft: 0.3048
  };

  // Convert input to meters
  const inputInMeters = input * conversionFactors[fromUnit];

  // Convert to desired unit
  const result = inputInMeters / conversionFactors[toUnit];

  document.getElementById('lengthOutput').value = result.toFixed(2);
}

function convertWeight() {
  const input = document.getElementById('weightInput').value;
  const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;

  // Conversion factors (to grams)
  const conversionFactors = {
    g: 1,
    kg: 1000,
    mt: 1000000,
    oz: 28.3495,
    lb: 453.592
  };

  // Convert input to grams
  const inputInGrams = input * conversionFactors[fromUnit];

  // Convert to desired unit
  const result = inputInGrams / conversionFactors[toUnit];

  document.getElementById('weightOutput').value = result.toFixed(2);
}

function convertTemperature() {
  const input = parseFloat(document.getElementById('temperatureInput').value);
  const fromUnit = document.getElementById('fromUnit').value;
  const toUnit = document.getElementById('toUnit').value;

  if (Number.isNaN(input)) {
    document.getElementById('temperatureOutput').value = '';
    return;
  }

  // Convert input to Celsius
  let inputInCelsius;       
    if (fromUnit === 'c') {
        inputInCelsius = input;
    } 
    else if (fromUnit === 'f') {
        inputInCelsius = (input - 32) * (5 / 9);
    }
    else if (fromUnit === 'k') {
        inputInCelsius = input - 273.15;
    }

    // Convert to desired unit
    let result;
    if (toUnit === 'c') {
        result = inputInCelsius;
    } 
    else if (toUnit === 'f') {
        result = (inputInCelsius * (9 / 5)) + 32;
    }
    else if (toUnit === 'k') {
        result = inputInCelsius + 273.15;
    }

    document.getElementById('temperatureOutput').value = result.toFixed(2);
}