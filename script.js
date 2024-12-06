function calculate() {
  const formula = document.getElementById("formula").value;

  const C0 = parseFloat(document.getElementById("initialCapital").value) || 0; // Capital inicial


  const rate = parseFloat(document.getElementById("rate").value) / 100 || 0; // Tasa de interés en decimal

  const timeInYears = parseFloat(document.getElementById("time").value) || 0; // Tiempo


  let result = 0;
  let procedure = "";

  // Fórmula de interés simple
  if (formula === "simple") {
    result = C0 * (1 + (rate * timeInYears)); 
    procedure += `Fórmula: C(t) = C₀ * (1 + r * t)\n`;
    procedure += `C₀ = ${C0}, r = ${rate}, t = ${timeInYears} años\n`;
    procedure += `Resultado: C(t) = ${result.toFixed(2)}\n`;
  }

  // Interés compuesto según la frecuencia de capitalización
  else if (formula === "annual") {
    // Capitalización anual
    result = C0 * Math.pow(1 + rate, timeInYears);
    procedure += `Fórmula: C(t) = C₀ * (1 + r)^t\n`;
    procedure += `C₀ = ${C0}, r = ${rate}, t = ${timeInYears}\n`;
    procedure += `Resultado: C(t) = ${result.toFixed(2)}\n`;

  } else if (formula === "semiannual") {
    // Capitalización semestral
    const periodsPerYear = 2;
    const periodicRate = rate / periodsPerYear;
    const totalPeriods = periodsPerYear * timeInYears;
    result = C0 * Math.pow(1 + periodicRate, totalPeriods);
    procedure += `Fórmula: C(t) = C₀ * (1 + r/m)^(m*t)\n`;
    procedure += `C₀ = ${C0}, r = ${rate}, m = ${periodsPerYear}, t = ${timeInYears}\n`;
    procedure += `Resultado: C(t) = ${result.toFixed(2)}\n`;

  } else if (formula === "quarterly") {
    // Capitalización trimestral
    const periodsPerYear = 4;
    const periodicRate = rate / periodsPerYear;
    const totalPeriods = periodsPerYear * timeInYears;
    result = C0 * Math.pow(1 + periodicRate, totalPeriods);
    procedure += `Fórmula: C(t) = C₀ * (1 + r/m)^(m*t)\n`;
    procedure += `C₀ = ${C0}, r = ${rate}, m = ${periodsPerYear}, t = ${timeInYears}\n`;
    procedure += `Resultado: C(t) = ${result.toFixed(2)}\n`;

  } else if (formula === "monthly") {
    const periodsPerYear = 12;
    const periodicRate = rate / periodsPerYear;
    const totalPeriods = periodsPerYear * timeInYears;
    result = C0 * Math.pow(1 + periodicRate, totalPeriods);
    procedure += `Fórmula: C(t) = C₀ * (1 + r/12)^(12 * t)\n`;
    procedure += `C₀ = ${C0}, r = ${rate}, m = ${periodsPerYear}, t = ${timeInYears} años\n`;
  procedure += `Resultado: C(t) = ${result.toFixed(2)}\n`;


  } else if (formula === "continuous") {
    // Interés compuesto continuo
    result = C0 * Math.exp(rate * timeInYears);
    procedure += `Fórmula: C(t) = C₀ * e^(r * t)\n`;
    procedure += `C₀ = ${C0}, r = ${rate}, t = ${timeInYears}\n`;
    procedure += `Resultado: C(t) = ${result.toFixed(2)}\n`;

  } else {
    procedure += "Frecuencia de capitalización no reconocida.\n";
  }

  // Mostrar resultados
  document.getElementById("resultText").textContent = `El resultado es: ${result.toFixed(2)}`;
  document.getElementById("procedureText").textContent = procedure;
}

document.getElementById("calculate").addEventListener("click", calculate);
