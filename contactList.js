
// Crear lista de contactos con datos predifinidos
// Cada contacto contiene el nombre y apellido en un solo string

let misContactos = [
    {nombreApellido: "Maria Alejandra Amaya Rodriguez"},
    {nombreApellido: "Vanessa Mejía"},
    {nombreApellido: "Luz Dary Zapata Valencia"},
    {nombreApellido: "Walter Arroyave"},
    {nombreApellido: "Andrés Felipe Arroyave Zapata"},
    {nombreApellido: "Leticia Rodriguez"}
];

console.log(misContactos); 

/// Función para añadir un nuevo contacto ///

function anadirContacto(misContactos, nombreApellido){
    misContactos.push({nombreApellido});
}

anadirContacto(misContactos, "Lucas Antonio Arroyave");

console.log(misContactos);

/// Funcion para borra un contacto de la lista ///

function eliminarContacto(misContactos, nombreApellido){
    for (let i = 0; misContactos.length; i++){
        if (misContactos[i].nombreApellido===nombreApellido){
            misContactos.splice(i, 1);
            break;
        }
    }
}

eliminarContacto(misContactos, "Leticia Rodriguez"); // Voy a eliminar el contacto Leticia Rodriguez de mi lista

console.log(misContactos);

/// Crea una función para imprimir en consola los contactos presentes en la lista ///

function verContactos(){
    console.log(misContactos);
}
verContactos();


// Lista de Contactos -2

// Ajusta las funciones de crear y eliminar un contacto para que puedan almacenar la siguiente información como objetos:

let misContactos = [
    {
        id: 1000380949,
        nombres: "Maria Alejandra",
        apellidos: "Amaya Rodriguez",
        direccion: "Calle 29G # 5i-76",
        telefono: "3167585850",
        ciudad: "Palmira",
    },
    {
        id: 1234567890,
        nombres: "Julieth ",
        apellidos: "Vanessa Mejia",
        direccion: "Valle del Lilí",
        telefono: "3162843778",
        ciudad: "Cali",
    },
    {
        id: 31645854,
        nombres: "Luz Dary",
        apellidos: "Zapata Valencia",
        direccion: "Calle 23a # 37-17",
        telefono: "3122215058",
        ciudad: "Palmira",
    },
    {
        id: 16694193,
        nombres: "Walter",
        apellidos: "Arroyave Larrahondo",
        direccion: "Calle 23a # 37-17",
        telefono: "3202121938",
        ciudad: "Palmira",
    },
    {
        id: 1000380949,
        nombres: "Andres Felipe",
        apellidos: "Arroyave Zapata",
        direccion: "Argentina",
        telefono: "316758254",
        ciudad: "Buenos Aires",
    },
];

// Agregar Contacto Función

function anadirContacto(misContactos, nuevoContacto){
    let nuevo
}

