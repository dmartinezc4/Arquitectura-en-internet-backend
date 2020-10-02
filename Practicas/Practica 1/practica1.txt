const David ={
    nombre:"David",
    edad:21,
    amigos:[
        {
            nombre:"Pepe",
            edad:21,
        },
        {
            nombre:"Paco",
            edad:20,
        }
    ],
}
const Davidbis ={
    nombre:"David",
    edad:21,
    amigos:[
        {
            nombre:"Pepe",
            edad:21,
        },
        {
            nombre:"Paco",
            edad:20,
        }
    ],
}

const vehiculo={
    marca:"Toyota",
    ruedas:4,
}


//Funcion deepPrint
const DeepPrint=(obj:Object):void =>{
    Object.keys(obj).forEach(atributo=>{//Cogemos las keys y las recorremos
        if(atributo in obj){//Si hay keys imprimimos
            if(typeof obj[atributo as keyof typeof obj]==='object'){
                //Si la key es una array con mas atributos/keys hacemos esto
                //Imprimimos el atributo del array (ej. amigo)
                console.log(atributo+":");
                
                //Recursion
                DeepPrint(obj[atributo as keyof typeof obj])
            }else{
                //Para atributos simples
            console.log(atributo+": "+obj[atributo as keyof typeof obj]);
            }
            
        }
        
        
    })
}

console.log("Imprimir");

DeepPrint(vehiculo);

console.log("------------------------------------------");

DeepPrint(David);

console.log("------------------------------------------")




//Funcion deepClone


console.log("Clonacion de un objeto");

console.log("------------------------------------------")

const deepClone=function (obj:object):object {
    if(typeof obj!=='object'){
        //Sin esto da error

         return obj;
     }
     let objcopy=obj.constructor()
     /*inicializo un constructor del tipo del objeto 
      que le he metido como parametro     
     */

     for(var atributo in obj){
         objcopy[atributo]= deepClone(obj[atributo as keyof typeof obj])
         //clono cada elemento
     }
     return objcopy;
     //Una vez terminada la recursividad devolvemos el objeto
}


const clone=deepClone(David);
DeepPrint(clone)

console.log("------------------------------------------")

//Funcion deepEqual


console.log("Comprobacion de dos objetos");

console.log("------------------------------------------")

var deepEqual=(object1:object,object2:Object):boolean=>{
    let equal:boolean=false;
    if(object1===object2){//Si son iguales no sigo
        equal=true;

    }else if(object1!=null&&object2!=null){//En caso contrario
        if(Object.keys(object1).length!=Object.keys(object2).length){
            //Si no tienen las misma cantidad de atributos no pueden ser el mismo objeto
            equal= false

        }else{
            for(const elemento in object1) {

                if(object2.hasOwnProperty(elemento)){
                    //Si tienen la misma propiedad comprueba que es igual de manera recursiva
                    equal=deepEqual(object1[elemento as keyof typeof object1],
                    object2[elemento as keyof typeof object2]);
                }else{
                    return false;
                }
            }
        }
    }

    else{
        equal= false
    }
    return equal;
}

console.log(deepEqual(vehiculo,David));
console.log(deepEqual(clone,David));
console.log(deepEqual(Davidbis,David));
