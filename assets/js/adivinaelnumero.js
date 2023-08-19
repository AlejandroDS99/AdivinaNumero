/* function encuentraNumero(n) {
    let inicio = 0, fin = 100, intentoUno = 50;
    while ( n != intentoUno ) {
        console.log( intentoUno);
        if ( n < intentoUno ) {
            fin = intentoUno
        }
        else { 
            inicio = intentoUno; 
        }
        intentoUno = Math.floor(( inicio + fin ) /2);
    }
    console.log( "si, estees tu numero " + n);
}

encuentraNumero ( 73 ); */

/* function encuentraNumero(n) {
    let inicio = 0, fin = 100, intentoUno = 50;
    alert ("Piensa en un número");
    while ( n != intentoUno ) {
        console.log( intentoUno);
        if ( n < intentoUno ) {
            fin = intentoUno
        }
        else { 
            inicio = intentoUno; 
        }
        intentoUno = Math.floor(( inicio + fin ) /2);
    }
    console.log( "si, estees tu numero " + n);
}

encuentraNumero ( 73 ); */


function adivinaNumero() {
    alert ("Piensa en un número del 0 al 100");
    let inicio = 0, fin = 101;
    let acierto = false;
    do {
        let intento = Math.floor(( inicio + fin ) /2 ); 
        acierto = confirm ("¿Es éste tu número? " + intento );
        if (acierto ){
            alert ("Excelente elección, tu número es " + intento + " ¡Fantastico!" );
        }
        else {
            let esMenor = confirm ("Tu número ¿es menor?");
            if ( esMenor) {
                fin = intento;
            }
            else {
                inicio = intento;
            }
        }
    } while ( !acierto );
}


