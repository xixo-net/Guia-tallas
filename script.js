const tallas = {
    "US": [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12],
    "EU": [35, 35.5, 36, 37, 37.5, 38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45],
    "UK": [2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10],
    "MX": [22, 22.5, 23, 23.5, 24, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5, 30]
};

function actualizarSugerencias() {
    const pais = document.getElementById('pais').value;
    const sugerencias = document.getElementById('sugerencias');
    sugerencias.innerHTML = "";
    tallas[pais].forEach(talla => {
        const option = document.createElement('option');
        option.value = talla;
        sugerencias.appendChild(option);
    });
}

const conversion = {
    "US": {"EU": 35, "UK": 2, "MX": 22},
    "EU": {"US": 4, "UK": 2, "MX": 22},
    "UK": {"US": 4, "EU": 35, "MX": 22},
    "MX": {"US": 4, "EU": 35, "UK": 2}
};

function convertir() {
    const talla = parseFloat(document.getElementById('talla').value);
    const pais = document.getElementById('pais').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(talla) || talla <= 0) {
        resultDiv.innerHTML = "<p>Por favor, introduce una talla válida.</p>";
        return;
    }

    let result = `<p>Talla convertida:</p><ul>`;
    const index = tallas[pais].indexOf(talla);
    if (index !== -1) {
        for (let [key, values] of Object.entries(tallas)) {
            if (key !== pais) {
                result += `<li>${key}: ${tallas[key][index]}</li>`;
            }
        }
    } else {
        result += `<li>Talla no encontrada en las tablas de conversión.</li>`;
    }
    result += `</ul>`;

    resultDiv.innerHTML = result;
}

window.onload = actualizarSugerencias;