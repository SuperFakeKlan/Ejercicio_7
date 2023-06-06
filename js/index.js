import { StudentCards } from "./cards.js"
document.addEventListener('DOMContentLoaded', () => {
    let alumnos = []
    
    /**
     * toma el elemento con el id "cards" y coloca las tarjetas dentro del div
     */
    const viewCards = () => {
        const div = document.getElementById('cards')
        const cards = StudentCards(alumnos)
        div.innerHTML = cards
    }
    /**
     * toma los id del formulario y coloca los datos dentro del objeto
     * push inserta los datos de un nuevo alumno al arreglo de los alumnos 
     */
    const obtainForm = () => {
        const name = document.getElementById('name')
        const apaterno = document.getElementById('apaterno')
        const amaterno = document.getElementById('amaterno')
        const email = document.getElementById('email')
        const puesto = document.getElementById('puesto')
        const numero = document.getElementById('numero')
        const organi = document.getElementById('organi')
        const alumno = {
            name: name.value,
            apaterno: apaterno.value,
            amaterno: amaterno.value,
            email: email.value,
            puesto: puesto.value,
            numero: numero.value,
            organi: organi.value,
        }
        alumnos.push(alumno)
        console.log('nuevo insertado')
    }

    /**
     * la funcion elimina un alumno con indice igual al id del elemento clickeado
     * @param {Event} e evento del click
     */
    const eliminar = (e) => {
        console.log(e.target.id)
        alumnos.splice(e.target.id, 1)
        viewCards()
        addlistens()
    }

    /**
     * toma todos los elementos con la clase "eliminar" y les añade el oyente de eventos para ejecutar la funcion "eliminar" cuando se detecte un click
     */
    const addlistens = () => {
        const botones = document.querySelectorAll('.eliminar')
        botones.forEach(boton=>{
            boton.addEventListener('click',eliminar)
        })
    }

    const btn = document.getElementById('enviar')
    /**
     * flujo de ejecucion principal que genera las tarjetas
     */
    const generateCards = () => {
        obtainForm()
        viewCards()
        addlistens()
    }
    btn.addEventListener('click', generateCards)


})