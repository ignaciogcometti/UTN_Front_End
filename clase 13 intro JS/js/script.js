//Arrays 
//Unidemsional

let numeros = [1,2,3,5,8];
let colores = ["rojo", "verde", "rojo"]

console.log(numeros[1]);
console.log(colores[0]);


//multidimensional 
let colorMascotas = [
    ["perro", "marron", "gris", "rojo"],
    ["gato", "blanco", "negro"],
    ["pez", "amarillo"],
    ["jirafa", "amarilla"]
];


//Objeto utilizado como array asociativo

let persona = {
    nombre : "Juan",
    edad : 32,
    profesion: "Desarrollador"
};

console.log(persona["nombre"]);
console.log(persona.edad);

let empleados = [
{ nombre: "Juan", edad: 32, profesion: "Desarrollador"},
{ nombre: "Cosme", edad: 22, profesion: "Pintor"},
{ nombre: "Nacho", edad: 41, profesion: "Cantante"}
];