// Solucion de las practicas

const obj={
    name:"David",
    edad:28,
    amigos:[
        "Juan","Paco","Pepe"
    ],
    mascotas:[
        {
            name:"Mery",
            raza:"oveja"
        },
        {
            name:"sunny",
            raza:"leon"
        },
    ]
}

const DeepPrint=(obj:any) =>{//porque puede ser cualquier cosa por eso any
    if(["string", "number","boolean"].includes(typeof obj)){
        console.log(obj);
    }

    else if(Array.isArray(obj)){
        obj.forEach(elem => DeepPrint(elem));
    }
    
    else{
        Object.keys(obj).forEach( key =>{
            console.log(key);
            DeepPrint(obj[key]);
        })
    }
}

DeepPrint(obj);
//---------------------------------------
//Programacion asincrona

//Callback

console.log("empiezo");
setTimeout(()=> console.log("Han pasado 3 segundos"),3000);
setTimeout(()=> console.log("Han pasado otros 3 segundos"),3000);
console.log("sigo");

setTimeout(
  ()=> setTimeout(()=>console.log("Han pasado 5 en total segundos"),3000),2000); 


//si pusiese aqui un while true no habria callback

//----------
//Promise

let a =5;
const promesa =new Promise((resolve,reject) =>{
  setTimeout(()=> resolve("Hello There!"),2000);
})

promesa.then((texto)=>{
  console.log(texto);
}).catch(()=>{
  console.log("Promesa rechazada");
})

console.log("Holi")

//Se pueden enlazar
//1º Holi luego el texto
//--------------------

//Await

const text= Deno.readTextFile("./people.txt");

/*
text.then((loleido)=>{
  console.log(loleido);
  console.log("hola");
}).catch(()=>{
  console.log("error")
});

*/

try{
const loleido =await text;

console.log(loleido);

console.log("holi")
}catch(e){
  console.log("error")
}
//Primero lo del await y luego el resto

//-----------
//Fetch data (rickymortiapi) cuantos ricks

const json = fetch("https://rickandmortyapi.com/api/");

json.then((response) => {
  return response.json();
}).then((jsonData) => {
  console.log(jsonData);
});





