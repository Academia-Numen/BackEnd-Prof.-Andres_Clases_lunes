//EJERCICIO DE CALLBACK

function hacerTarea(num,cb) {
    console.log('Haciendo tarea ' + num);
    setTimeout(cb,1000)
}


console.log('INICIO DE TAREAS');

hacerTarea(1,() => {
    hacerTarea(2, () => {
        hacerTarea(3,()=>{
            hacerTarea(4,()=>{
                console.log('FIN DE TAREAS'); 
            })
        })
    })
})


console.log('otras tareas.....');




//EJEMPLO DE PROMESAS

const dividir = (dividendo, divisor) => {


    return new Promise ((resolve, reject) => {

        if(divisor == 0) {
            reject('no se puede dividir por cero')
        }else{
            resolve(dividendo / divisor)
        }

    })

}


//CASO FELIZ
dividir(10,2)
    .then(resultado => {
        console.log(`resultado: ${resultado}`);  
    })
    .catch(error => {
        console.log(`error: ${error}`);
        
    })


//CASO TRISTE
dividir(10,0)

    .then(resultado => {
        console.log(`resultado: ${resultado}`);  
    })
    .catch(error => {
        console.log(`error: ${error}`);
        
    })

