const mangoLargo = 2000;
const gancho = 500;
const minimacantidad = 3;
const maximacantidad = 30;
let precioTotal = 0;

const modeloEscoba = prompt(
  "Digite el modelo de escoba:\n1. Escoba dura\n2. Escoba suave\n3. cepillo"
);

const material = prompt(
  "Seleccione el tipo del material: \n1. Cerdas sintéticas\n2. Cerdas naturales"
);

let opcionesAdicionales = "";

const mangoOpcion = prompt(
  "Desea opciones adicionales de fabricación?\nyes\nno"
);

if (mangoOpcion === "yes") {
  const mangoLargoOpcion = prompt("Desea tener mango largo?\nyes\nno");

  if (mangoLargoOpcion === "yes") {
    if (precioTotal + 2000) {
      alert("Esta opción ya se encuentra agregada.");
    } else {
      precioTotal += mangoLargo;
    }
  } else if ((mangoLargoOpcion = no)) {
    const ganchoOpcion = prompt("Desea tener gancho en punta?\nyes\nno");

    if (ganchoOpcion === "yes") {
      if (precioTotal + 500) {
        precioTotal += gancho;
        alert("Esta opción ya se encuentra agregada.");
      } else {
        precioTotal += gancho;
      }
    }
  }
}

switch (modeloEscoba) {
  case "1":
    precioTotal += material === "1" ? 8000 : 10000;
    break;
  case "2":
    precioTotal += material === "1" ? 15000 : 20000;
    break;
  case "3":
    precioTotal += material === "1" ? 12000 : 15000;
    break;
  default:
    alert("El modelo de escoba no es válido");
    break;
}

let cantidad = parseInt(prompt("Que cantidad de escobas desea (1-30):"));
if (minimacantidad < 1 || maximacantidad > 30) {
  alert("cantidad invalida");
} else {
  alert(
    `su total a pagar es: ${
      precioTotal * cantidad
    } \n Compro una cantidad de: ${cantidad}`
  );
}