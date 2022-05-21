//capturar el evento click del boton
const botSumar= document.getElementById('sumar'); //obtengo el objeto del boton
const btnRestar= document.getElementById('restar');
const btnMultipl= document.getElementById('multiplicar');
const btnDividir= document.getElementById('dividir');

//puedo capturar los valores por dentro del boton
const a = document.getElementById('a');
const b = document.getElementById('b');

//BOTÓN DE SUMA
//asociar al boton el evento click (sumar)
botSumar.addEventListener('click', () =>{
    //sumar el valor de a y de b en una nuev variable para despues asignarlo 
    //tomo el valor de los inputs
    const valorA= a.value;
    const valorB=b.value;

    //controlar que los inputs sean !vacio
    if (esValido(valorA) && esValido(valorB)){
      //invoco a la funcion sumar
      const suma=sumar(valorA,valorB);  

      //invoco a la funcion de actualizar
      actualizarResult(suma);
    }else{
       actualizarResult('Debe completar a y b');
    }   
});



/*LAS FUNCIONES DEBEN TENER UN SOLO RETURN*/

function esValido(valor){
     return valor!=='';
}

function sumar(a,b){
    return parseInt(a) + Number(b);
}

 function actualizarResult(suma){
      //capturar el div por su id
      const div = document.getElementById('resultado');

      //actualizar el contenido del div con la variable suma
       div.innerHTML = suma;

    }


//BOTÓN DE RESTA
    function restar(a,b){
     return parseInt(a) - Number(b);
}

//asociar al boton el evento click (restar)
btnRestar.addEventListener('click', () =>{
    //sumar el valor de a y de b en una nuev variable para despues asignarlo 
    //tomo el valor de los inputs
    const valorA= a.value;
    const valorB=b.value;

    //controlar que los inputs sean !vacio
    if (esValido(valorA) && esValido(valorB)){
      //invoco a la funcion restar
      const resta=restar(valorA,valorB);  

      //invoco a la funcion de actualizar
      actualizarResult(resta);
    }else{
       actualizarResult('Debe completar a y b');
    }   
});


//BOTÓN DE DIVIDIR

function div(a,b){
  return parseInt(a) / Number(b);
}

//asociar al boton el evento click (multiplicar)
btnDividir.addEventListener('click', () =>{
  //sumar el valor de a y de b en una nuev variable para despues asignarlo 
  //tomo el valor de los inputs
  const valorA= a.value;
  const valorB=b.value;

  //controlar que los inputs sean !vacio
  if (esValido(valorA) && esValido(valorB)){
    //invoco a la funcion restar
    const dividir= div(valorA,valorB);  

    //invoco a la funcion de actualizar
    actualizarResult(dividir);
  }else{
     actualizarResult('Debe completar a y b');
  }   
});


//BOTÓN DE MULTIPLICAR

function multipl(a,b){
  return parseInt(a) * Number(b);
}

//asociar al boton el evento click (multiplicar)
btnMultipl.addEventListener('click', () =>{
  //sumar el valor de a y de b en una nuev variable para despues asignarlo 
  //tomo el valor de los inputs
  const valorA= a.value;
  const valorB=b.value;

  //controlar que los inputs sean !vacio
  if (esValido(valorA) && esValido(valorB)){
    //invoco a la funcion restar
    const multiplicar= multipl(valorA,valorB);  

    //invoco a la funcion de actualizar
    actualizarResult(multiplicar);
  }else{
     actualizarResult('Debe completar a y b');
  }   
});
