/*
function outer(){
    const a= 23;


    function inner(){
     console.log(a);
    }
    inner();
}

//¿qué funcion debo invocar primero? 
//A la función padre que es el outer en este caso. 

//outer < fueras por ende  es a quien debo llamar primero
// < esta esta dentro del outer, por ende es invocada por esta


//tomar la información del botón
document.getElementById('btn').addEventListener('click',() => {
   outer();
})

// F12 en el navegador

//en la pestaña source, tiene html, css, js
//ctr+p busco archivo qe quiero debuggear
//selecciono la linea y hago click para agregar un "break point"


//function que haga la suma de dos valores
/*
function adder(first){
    function add(second){
        console.log(first + second);
    }
    return add;
}

const primerLlamado= adder(10); //devuelve una funcion que espera un segundo argumento
//quedaria como 10 + algo

*/

//¿cuánto vale la variable del primer llamado? 10


/*para llamar al segundo argumento
const segundoLlamado= primerLlamado(5);//no hacer esto porque no espero un valor de retorno
*/

//invoco a la funcion que me retorno la llamada anterior y le agrego el segundo valor
//primerLlamado(5);

/*todo esto se lo tenemos que asignar a un botón p/ que
luego de presionarlo realice el closure
//1. agregar botón en html y cambiarle el identificador al segundo (el btn)

document.getElementById('btnSumar').addEventListener('click',() => {
    const primerLlamado= adder(10);
    primerLlamado(5);
 })

 */

 /*Utilizar closures con el mismo ejercicio de la clase 19
1. Crear un nuevo botón que sea una petición a una API
 */

//Implementar el closure
function outer(){
    const endpoint= 'https://reqres.in/api/users';
    async function inner(page){   //es una funcion asincronica la que está dentro, NO la que esta afuera
       if(!page){
          page=1;
       }
        return await axios.get(`${endpoint}?page=${page}`);//tiene que devolver el objeto, osea, la estructura JSON que queres
    }
    return inner;
}


//agregar boton
document.getElementById('btnAxiosRequest').addEventListener('click',async() => {
    const fnInner = outer(); //-->Retorna la referencia a inner(page)
    const jsonObject = await fnInner();
    alert(JSON.stringify(jsonObject));
});