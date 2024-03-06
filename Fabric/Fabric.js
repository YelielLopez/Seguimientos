const mangoLargo = 2000;
const gancho = 500;
const minimum = 3;
const maximum = 30;
let totalCost = 0;

const sweepModel = prompt(
  "Digite el modelo de escoba:\n1. Escoba dura\n2. Escoba suave\n3. cepillo"
);

const material = prompt(
  "Seleccione el tipo del material: \n1. Cerdas sintéticas\n2. Cerdas naturales"
);

let AditinalsOptions = "";

const stickModel = prompt(
  "Desea opciones adicionales de fabricación?\nyes\nno"
);

if (stickModel === "yes") {
  const mangoLargoOpcion = prompt("Desea tener mango largo?\nyes\nno");

  if (mangoLargoOpcion === "yes") {
    if (totalCost + 2000) {
      alert("Esta opción ya se encuentra agregada.");
    } else {
      totalCost += mangoLargo;
    }
  } else if ((mangoLargoOpcion = no)) {
    const ganchoOpcion = prompt("Desea tener gancho en punta?\nyes\nno");

    if (ganchoOpcion === "yes") {
      if (totalCost + 500) {
        totalCost += gancho;
        alert("Esta opción ya se encuentra agregada.");
      } else {
        totalCost += gancho;
      }
    }
  }
}

switch (sweepModel) {
  case "1":
    totalCost += material === "1" ? 8000 : 10000;
    break;
  case "2":
    totalCost += material === "1" ? 15000 : 20000;
    break;
  case "3":
    totalCost += material === "1" ? 12000 : 15000;
    break;
  default:
    alert("El modelo de escoba no es válido");
    break;
}

let cantidad = parseInt(prompt("Que cantidad de escobas desea (1-30):"));
if (minimum < 1 || maximum > 30) {
  alert("cantidad invalida");
} else {
  alert(
    `su total a pagar es: ${
      totalCost * cantidad
    } \n Compro una cantidad de: ${cantidad}`
  );
}