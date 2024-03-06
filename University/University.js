const originalPrice = 7000000;

const fullPayment = 1;

const twoInstallments = 2;

const ThreeInstallments = 3;

let firstInstallment;

let operation1, operation2, operation3, operation4, operation5;

let secondInstallment;

let thirdInstallment;

let totalCost;

let discount; 

let selectedOption = parseInt(prompt("Seleccione el metodo de pago que desea: \n1. Pago completo (Descuento del 5%) \n2. Pago a dos cuotas (2% de interes mensual) \n3. Pago a tres cuotas (2% de interes mensual)"));

switch (selectedOption) {
    case 1:
        totalCost = originalPrice * 5 / 100;
        discount = originalPrice - totalCost; 
        alert("Su total a pagar es" + " " + discount);

        break;
    case 2:
        let paymode = parseInt(prompt("Selecciones modo de pago a dos cuotas: \n1. Pago inmediato \n2. Mes vencido"));
        if(paymode == 1){
            firstInstallment = originalPrice / 2;
            operation1 = firstInstallment *2 / 100;
            secondInstallment = firstInstallment + operation1;
            totalCost = firstInstallment + secondInstallment;
            alert("Su total a pagar es" + " " + totalCost);
        }else if(paymode == 2){
            operation1 = originalPrice * 2 / 100;
            operation2 = originalPrice  / 2;
            firstInstallment = operation1 + operation2;
            operation3 = operation2 * 2 / 100;
            secondInstallment = operation3 + operation2;
            totalCost = firstInstallment + secondInstallment;
            alert("Su total a pagar es" + " " + totalCost)
        }else {
        alert("Ingrese un modo de pago valido (1, 2)");
        }

        break;
     case 3:
        let paymode2 = parseInt(prompt("Selecciones modo de pago a dos cuotas: \n1. Pago inmediato \n2. Mes vencido"));
        if (paymode2 == 1) {
            firstInstallment = originalPrice / 3;
            operation1 = firstInstallment * 2;
            operation2 = operation1 * 2 / 100;
            secondInstallment = firstInstallment + operation2;
            operation3 = firstInstallment * 2 / 100;
            thirdInstallment = firstInstallment + operation3;
            totalCost = firstInstallment + secondInstallment + thirdInstallment;
            alert("Su total a pagar es" + " " + totalCost);

        } else if(paymode2 == 2) {
            operation1 = originalPrice * 2 / 100;
            operation2 = originalPrice / 3;
            firstInstallment = operation1 + operation2;
            operation3 = operation2 * 2;
            operation4 = operation3 * 2 / 100;
            secondInstallment = operation2 + operation4;
            operation5 = operation2 * 2 / 100;
            thirdInstallment = operation5 + operation2;
            totalCost = firstInstallment + secondInstallment+ thirdInstallment;
            alert("Su total a pagar es" + " " + totalCost);

        }else {
            alert("Ingrese un modo de pago valido (1, 2)");

        }

     break;

    default:
        alert("Ingrese una opcion valida (1, 2, 3)")
        break;
}