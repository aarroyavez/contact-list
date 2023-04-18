
// Crear lista de contactos con datos predifinidos//

// Cada contacto contiene el nombre y apellido en un solo string

let misContactos = [
    {nombreApellido: "Maria Alejandra Amaya Rodriguez"},
    {nombreApellido: "Vanessa Mejía"},
    {nombreApellido: "Luz Dary Zapata Valencia"},
    {nombreApellido: "Walter Arroyave"},
    {nombreApellido: "Andrés Felipe Arroyave Zapata"},
    {nombreApellido: "Leticia Rodriguez"}
];

/// Función para añadir un nuevo contacto ///

function anadirContacto(misContactos, nombreApellido){
    misContactos.push({nombreApellido});
}

anadirContacto(misContactos, "Lucas Antonio Arroyave");


/// Funcion para borrar un contacto de la lista ///

function eliminarContacto(misContactos, nombreApellido){
    for (let i = 0; misContactos.length; i++){
        if (misContactos[i].nombreApellido===nombreApellido){
            misContactos.splice(i, 1);
            break;
        }
    }
}

eliminarContacto(misContactos, "Leticia Rodriguez"); // Voy a eliminar el contacto Leticia Rodriguez de mi lista


/// Crea una función para imprimir en consola los contactos presentes en la lista ///

function verContactos(){
    console.log(misContactos);
}
verContactos();


// Lista de Contactos -2

// Ajusta las funciones de crear y eliminar un contacto para que puedan almacenar la siguiente información como objetos

// Agregar Contacto Función

// Declaro una nueva variable (lista de contactos con más propiedades) tipo objeto //

let myContactList = [
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

// Creo una función que permita añadir un contacto almacenando información como objeto //

function anadirContactoDos(id, nombres, apellidos, telefono, direccion, ciudad){
    const newContact = {
        id: id,
        nombres: nombres,
        apellidos: apellidos,
        telefono: telefono,
        direccion: direccion,
        ciudad: ciudad,
    };
    myContactList.push(newContact);
    console.log("Se agregó un nuevo contacto a la lista: ", newContact);
}

anadirContactoDos(1000201, "Pepito", "Perez", "3201545858", "calle 23 # 34-24", "Palmira"); // Llamar la función y agregar las propiedades del contacto a añadir
console.log(myContactList); // Imprime la list de contactos con el contacto Pepito Perez añadido




// Función que borre un contacto recibiendo el id //

let eliminarContactoDos = function(id){
    for (let i=0; i < myContactList.length; i++){
        if (myContactList[i].id === id){
        const contactoBorrado = myContactList.splice(i, 1)[0];
        console.log("Se borró el contacto", contactoBorrado);
        return;
    }
}
console.log("No fue posible encontrar el contacto con el 'id'");
}

eliminarContactoDos(31645854); // llamando la función, se elimina el contacto Luz Dary Zapata Valencia, propietaria del id 31645854

eliminarContactoDos(54622); // Si trato de buscar un id que no está en mi lista, imprime que no fue posible encontrarlo

