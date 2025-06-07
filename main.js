const individual = document.getElementById('consultaIndividual');
const masiva = document.getElementById('consultaMasiva');


function esPrimo(numero) {
    numero = Number(numero)
    if (numero <= 1) {
        return false;
    }
    if (numero === 2) {
        return true;
    }
    if (numero % 2 === 0) {
        return false;
    }
    if (esDivisibleImpar(numero) === false) {
        return false
    }
    return true;
}

function esDivisibleImpar(valor) {
    for (let i = 3; i <= Math.sqrt(valor); i += 2) {
        if (valor % i === 0) {
            return false;
        }
    }
    return true;
}

function bucle(limite) {
    console.log(`--- Números primos hasta el ${limite} ---`)
    const primosEncontrados = []
    for (let i = 2; i <= limite; i++) {

        if (esPrimo(i)) {
            primosEncontrados.push(i)
        }
    }
    if (primosEncontrados.length > 0) {
        console.log(`--- Se encontraron : ${primosEncontrados.length} numero ---`)
        console.log(primosEncontrados.join(', '));
    } else {
        console.log(`No se encontraron números primos hasta el ${limite}.`);
    }
}

individual.addEventListener('click', function () {
    let numeroUsuario = prompt("Ingrese un numero para saber si es primo ");
    let primo = esPrimo(numeroUsuario) ? "es primo" : "NO es primo";
    console.log(`El numero ${numeroUsuario}  ${primo}`)
})

masiva.addEventListener('click', function () {
    let cantidad = prompt("Ingese hasta que numero quire averiguar");
    let primo = bucle(cantidad);
})
