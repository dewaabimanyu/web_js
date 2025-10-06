// Massa atom unsur (beberapa contoh, bisa kamu tambahkan sendiri)
const atomicMass = {
  H: 1.008,
  He: 4.0026,
  Li: 6.94,
  Be: 9.0122,
  B: 10.81,
  C: 12.011,
  N: 14.007,
  O: 15.999,
  F: 18.998,
  Na: 22.990,
  Mg: 24.305,
  Al: 26.982,
  Si: 28.085,
  P: 30.974,
  S: 32.06,
  Cl: 35.45,
  K: 39.098,
  Ca: 40.078
};

// Fungsi menghitung massa molar dari rumus (misal: H2O, CO2)
function calculateMolarMass(formula) {
  const pattern = /([A-Z][a-z]?)(\d*)/g;
  let match;
  let totalMass = 0;

  while ((match = pattern.exec(formula)) !== null) {
    const element = match[1];
    const count = match[2] ? parseInt(match[2]) : 1;

    if (!atomicMass[element]) {
      throw new Error(`Unsur tidak dikenali: ${element}`);
    }

    totalMass += atomicMass[element] * count;
  }

  return totalMass.toFixed(3);
}

// Event klik tombol "Hitung"
document.getElementById("calculateBtn").addEventListener("click", () => {
  const formula = document.getElementById("formula").value.trim();
  const resultDiv = document.getElementById("result");

  if (!formula) {
    resultDiv.innerHTML = "❗ Masukkan rumus terlebih dahulu.";
    return;
  }

  try {
    const result = calculateMolarMass(formula);
    resultDiv.innerHTML = `💡 Massa molar <b>${formula}</b> = <b>${result} g/mol</b>`;
  } catch (err) {
    resultDiv.innerHTML = `⚠️ ${err.message}`;
  }
});
