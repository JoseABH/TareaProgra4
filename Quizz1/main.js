
function problema1() {
    const arr = [1, 2, 3];
    const [x, y] = arr;
    console.log(y);

    //Resultado 2

    // Las variables que se declaran [a,y] van en orden al arr y se imprime el numero correspondiente de la posicion
}



function problema2() {
    let a = [1, 2, 3];
    let b = a;
    b.push(4);
    console.log(a);

    //  Respuesta [1,2,3,4]
    // hace la insercion en la nueva variable que es igual a la anterios "a" con push que lo agrega a lo ultimo 
}


function problema3() {
    console.log(typeof NaN);

    //Respuesta number
    //porque NaN es un valor numerico pero no es un numero

}



function problema4() {
    let x  = 10;
    (function(){
        console.log(x);
        let x = 20 ;
        
    })();

    //Respuesta ReferenceError
    // la variable x no está definida cuando se hace el console.log 


}


function problema5() {
   
    let x = 5;
    let y = x++;
    console.log(y);

    //Respuesta 5
    //porque "y" se imprime antes de que el valor de "x" se incremente


}


function problema6() {
   
    console.log(1 + '1' -1);
    //Respuesta 10

    //Porque el primer valor de "1" suma con el otro haciendo el resultado de "11" ,
    // y despues resta "1", al resultado de "11" dando "10"


}


function problema7() {
   
    console.log(typeof null );

    //Respuesta objet
    // porque null lo interpreta como un objeto

}

function problema8() {
   
    console.log(0 == '0' );

    //Respuesta true
    // porque el valor de "0" es igual al valor de 0 ya que no se esta comparando el tipo de dato

}


function problema9() {
   
    console.log([]== false);

    //Respuesta True
    // porque el [] array esta vacio y es igual a false

}


function problema10() {
   
   let a = {};
   let b = a;
   console.log(a === b);

   // Respuesta True
   // porque "a" y "b" son iguales en el valor y en el tipo de dato 


}

//llamar al numero de problema

problema1();



