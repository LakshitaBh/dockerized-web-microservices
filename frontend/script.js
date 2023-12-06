function calculateSum() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
  
    fetch('http://localhost:5001/sum', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({num1, num2}),
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('result').innerText = `Result: ${data.sum}`
    })
    .catch(error => console.error('Error:', error));
  }
  