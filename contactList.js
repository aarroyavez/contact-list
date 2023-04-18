
// Crear lista de contactos con datos predifinidos //
// Cada contacto contiene el nombre y apellido en un solo string //

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

anadirContacto(misContactos, "Lucas Antonio Arroyave"); //Llamando la función y tomando como parámetros el array de la lista de contactos y el contacto a agregar, añado un nuevo contacto

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

/// Crear una función para imprimir en consola los contactos presentes en la lista ///

function verContactos(){
    console.log(misContactos);
}
verContactos();



/// Las funciones actualizan que tratan la lista de contactos como un objeto están en la rama project-2, la cual, 
/// equivale a la segunda parte de la práctica lista de contactos o contact list-2