//ASIGNAR UN TURNO Y EN CUANTOS MINUTOS ES SU CONSULTA.

function tiempo_de_espera() {
    for (i = 1; i <= 5; i++) {
        //AL INGRESAR SU NOMBRE, SE LE ASIGNA UN NUMERO DE TURNO-
        let nombre = prompt("ingrese su nombre y apellido");

        console.log("Turno N°"+ i , "Nombre y apellido: "+ nombre);

        //SE SUMAN 20 MINUTOS POR CADA TURNO
        let espera = i * 20;
        console.log("Su turno para su consulta es dentro de "+ espera , "minutos")
    }
}

tiempo_de_espera()