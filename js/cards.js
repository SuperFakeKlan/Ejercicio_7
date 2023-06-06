/**
 * 
 * @param {Object} student objeto con los datos del estudiante
 * @returns {String} html de una tarjeta
 */
const StudentCard = (student,i) => {
    return (
        `
        <div class="card text-white bg-dark mb-3" style="max-width: 20rem;">
            <div class="card-header">${student.email}</div>
            <div class="card-body">
                <h4 class="card-title">${student.name}</h4>
                <p class="card-text">${student.numero}</p>
                <p class="card-text">Estudiante número: ${i}</p>
            </div>
            <button class="btn btn-danger eliminar" id="${i}">Eliminar</button>
        </div>
        `
    )
}
/**
 * 
 * @param {Array} studentsList arreglo con los objetos de los estudiantes
 * @returns {String} html con todas las tarjetas
 */
export const StudentCards = (studentsList) => {
    return studentsList.map(StudentCard).join('')
}