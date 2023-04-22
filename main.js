const id = document.querySelector('.id ')
const nombres = document.querySelector('.nombres ')
const apellidos = document.querySelector('.apellidos ')
const direccion = document.querySelector('.direccion ')
const telefono = document.querySelector('.telefono ')
const ciudad = document.querySelector('.ciudad ')
const boton_agregar = document.querySelector('.boton_agregar')

const listaContactos = document.querySelector('lista_de_contactos')

const localHost = window.localStorage

boton_agregar.onclick = () => {
    let contacto = {
        id: Math.random(1, 11),
        nombres: nombres.value,
        apellidos: apellidos.value,
        direccion: direccion.value,
        telefono: telefono.value,
        ciudad: ciudad.value,
    }
    guardarContacto(localHost, contacto)
}