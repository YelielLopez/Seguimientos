const basicPrice = 2000
const PremiumPrice = 4000

const BasicOption = 1
const PremiunOption = 2

let unitaryPrice;
let clothesQuantity;

let selectedOption = parseInt(prompt("Seleccione el tipo de servicio que desea: \n1. Basico ($2000 Por prenda) \n2. Premium ($4000 Por prenda)"))

if(selectedOption == BasicOption) {
    unitaryPrice = basicPrice
    pieces = parseInt(prompt("Ingrese cantidad de prendas de ropa (1-20)"))

}else if (selectedOption == PremiunOption) {
    unitaryPrice = PremiumPrice
    pieces = parseInt(prompt("Ingrese cantidad de prendas de ropa (1- 20)")) 
}else { 
    console.log("Opcion invalida")
}

if(pieces < 1 ||  pieces > 20) {
    console.log("Cantidad de piezas inválida")
}else{
alert("Costo total: $" + (unitaryPrice * pieces))
}