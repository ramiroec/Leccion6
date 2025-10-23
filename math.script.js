        // Mostrar constantes matemáticas
        document.getElementById('euler').textContent = Math.E;
        document.getElementById('pi').textContent = Math.PI;
        document.getElementById('sqrt2').textContent = Math.SQRT2;
        document.getElementById('sqrt1_2').textContent = Math.SQRT1_2;
        document.getElementById('ln2').textContent = Math.LN2;
        document.getElementById('ln10').textContent = Math.LN10;

        // Función para calcular métodos de redondeo
        function calculateRounding() {
            const inputValue = parseFloat(document.getElementById('numberInput').value);
            
            if (!isNaN(inputValue)) {
                document.getElementById('roundResult').textContent = Math.round(inputValue);
                document.getElementById('ceilResult').textContent = Math.ceil(inputValue);
                document.getElementById('floorResult').textContent = Math.floor(inputValue);
                document.getElementById('truncResult').textContent = Math.trunc(inputValue);
            } else {
                alert("Por favor ingresa un número válido");
            }
        }

        // Calcular con el valor inicial
        window.onload = calculateRounding;
