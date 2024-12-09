document.getElementById('convertBtn').addEventListener('click', function () {
    const tempInput = document.getElementById('tempInput').value;
    const selectedUnit = document.getElementById('unitSelect').value;
    const resultDiv = document.getElementById('result');
  
    // Validate input
    if (isNaN(tempInput) || tempInput.trim() === '') {
      resultDiv.textContent = 'Please enter a valid temperature.';
      resultDiv.style.color = 'red';
      return;
    }
  
    const temp = parseFloat(tempInput);
    let resultText;
  
    // Conversion logic
    switch (selectedUnit) {
      case 'Celsius':
        resultText = `
          Fahrenheit: ${(temp * 9/5 + 32).toFixed(2)}°F
          Kelvin: ${(temp + 273.15).toFixed(2)}K
          Reaumur: ${(temp * 4/5).toFixed(2)}°Ré
        `;
        break;
      case 'Fahrenheit':
        resultText = `
          Celsius: ${((temp - 32) * 5/9).toFixed(2)}°C
          Kelvin: ${((temp - 32) * 5/9 + 273.15).toFixed(2)}K
          Reaumur: ${((temp - 32) * 4/9).toFixed(2)}°Ré
        `;
        break;
      case 'Kelvin':
        resultText = `
          Celsius: ${(temp - 273.15).toFixed(2)}°C
          Fahrenheit: ${((temp - 273.15) * 9/5 + 32).toFixed(2)}°F
          Reaumur: ${((temp - 273.15) * 4/5).toFixed(2)}°Ré
        `;
        break;
      case 'Reaumur':
        resultText = `
          Celsius: ${(temp * 5/4).toFixed(2)}°C
          Fahrenheit: ${(temp * 9/4 + 32).toFixed(2)}°F
          Kelvin: ${(temp * 5/4 + 273.15).toFixed(2)}K
        `;
        break;
      default:
        resultText = 'Invalid unit selected.';
    }
  
    // Display result
    resultDiv.style.color = 'black';
    resultDiv.innerHTML = `<pre>${resultText}</pre>`;
  });
  