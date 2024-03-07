const clasic = 500000; const running = 800000; const basketball = 1000000; 

let quantity; let shoes; let size; let operation1; let operation2; let totalCost;

shoes = parseInt(prompt("Seleccionar tipo de tennis: \n1 clasicos. \n2 running. \n3 basketball"));

if (shoes < 1 || shoes > 3) {
                alert("Ingrese un tipo de tenis valido");
        shoes = parseInt(prompt("Seleccionar tipo de tennis: \n1 clasicos. \n2 running. \n3 basketball"));
        if (shoes < 1 || shoes > 3) {
                alert("Ingrese un tipo de tenis valido");
                shoes = parseInt(prompt("Seleccionar tipo de tennis: \n1 clasicos. \n2 running. \n3 basketball"));
        }
}

size = parseInt(prompt("Elija la talla de su preferencia: (35-44)"));

if (size < 35 || size > 44) {
        alert("Ingrese una talla valida");
        size = parseInt(prompt("Elija la talla de su preferencia: (35-44)"));
if (size < 1 || size > 3) {
        alert("Ingrese una talla valida");
        size = parseInt(prompt("Elija la talla de su preferencia: (35-44)"));
}
}
quantity = parseInt(prompt("Selecciones la cantidad de pares que desea (de 1 a 5 pares)"))

if (quantity < 3) {
    switch (shoes) {
        case 1:
totalCost = quantity * clasic;
alert("Su total a pagar es " + totalCost);        
                break;
        case 2:
totalCost= quantity * running
alert("Su total a pagar es " + totalCost);
                break;
        case 3:
totalCost = quantity * basketball
alert("Su total a pagar es " + totalCost);
                break;
        default:
alert("Ingrese un tipo valido");
                break;
    } }
    let entrada = true

    if (3 <= quantity && entrada ) {
        switch (shoes) {
                case 1:
                operation1 = quantity * clasic;
                operation2 = operation1 * 10 / 100;
                totalCost = operation1 - operation2;
                alert("Su total a pagar es " + totalCost);
                        break;
                case 2:
                operation1 = quantity * running;
                operation2 = operation1 * 10 / 100;
                totalCost = operation1 - operation2
                alert("Su total a pagar es " + totalCost);      
                        break;
        
                case 3:
                operation1 = quantity * basketball 
                operation2 = operation1 * 10 / 100
                totalCost = operation1 - operation2
                alert("Su total a pagar es " + totalCost);
                        break;
        
                default:
                alert("Ingrese un valor valido")
                        break;

 }
}
