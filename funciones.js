const guardarContacto = (localHost, contacto) =>{
    localHost.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = "/"
}

const cargarContacto = (dataBase, parentNode) =>{ //se ejecuta cada vez que se guarde un contacto
    let claves = Object.keys(dataBase)
    // console.log(claves)
    for(claves of claves){
        let contacto = JSON.parse(dataBase.getItem(claves))
        // console.log(contacto)
        crearContacto(parentNode, contacto, dataBase)
    }
}

const crearContacto = (parentNode, contacto, dataBase) => {

    let divContacto = document.createElement("div")
    let idContacto = document.createElement("h3")
    let nombresContacto = document.createElement("h3")
    let apellidosContacto = document.createElement("h3")
    let direccionContacto = document.createElement("h3")
    let telefonoContacto = document.createElement("h3")
    let ciudadContacto = document.createElement("h3")
    let iconoDelete = document.createElement("span")

    idContacto.innerHTML = contacto.id
    nombresContacto.innerHTML = contacto.nombres
    apellidosContacto.innerHTML = contacto.apellidos
    direccionContacto.innerHTML = contacto.direccion
    telefonoContacto.innerHTML = contacto.telefono
    ciudadContacto.innerHTML = contacto.ciudad
    iconoDelete.innerHTML = "delete"

    divContacto.classList.add("tarea")
    iconoDelete.classList.add("material-symbols", "icono")

    iconoDelete.onclick = () =>{
        dataBase.removeItem(contacto.id)
        window.location.href="/"
    }

    divContacto.appendChild(idContacto)
    divContacto.appendChild(nombresContacto)
    divContacto.appendChild(apellidosContacto)
    divContacto.appendChild(direccionContacto)
    divContacto.appendChild(telefonoContacto)
    divContacto.appendChild(ciudadContacto)
    divContacto.appendChild(iconoDelete)

    parentNode.appendChild(divContacto)

}
