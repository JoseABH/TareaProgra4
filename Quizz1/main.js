
function problema1() {
    const arr = [1, 2, 3];
    const [x, y] = arr;
    console.log(y);

    //Resultado 2

    // Las variables que se declaran [a,y] van en orden al arr y se imprime el numero correspondiente
}



function problema2() {
    let a = [1, 2, 3];
    let b = a;
    b.push(4);
    console.log(a);

    //  Respuesta [1,2,3,4]
    // hace la insercion en la nueva variable con push que lo agrega a lo ultimo 
}


function problema3() {
    console.log(typeof NaN);

    //Respuesta number

}



function problema4() {
    let x  = 10;
    (function(){
        console.log(x);
        let x = 20 ;
    })();

    //Respuesta ReferenceError

}


function problema5() {
   
    let x = 5;
    let y = x++;
    console.log(y);

    //Respuesta 5

}


function problema6() {
   
    console.log(1 + '1' -1);
    //Respuesta 10

    //porque el uno es el string y el menos uno hace hacer cero el otro 

}


function problema7() {
   
    console.log(typeof null );
    //Respuesta objet

}

function problema8() {
   
    console.log(0 == '0' );
    //Respuesta true

}


function problema9() {
   
    console.log([]== false);
    //Respuesta True
    // porque el [] esta vacio 

}


function problema10() {
   
   let a = {};
   let b = a;
   console.log(a === b);

   // Respuesta True

}

//llamar al numero de problema

problema1();



