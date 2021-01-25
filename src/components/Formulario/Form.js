import {useState} from 'react';

const Form = () => {

    // Creating the state of appointment
    const[appointment, updateAppointment] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
    });

    // Function that excute when the user type in an input
    const handleChangeInput = (event)=>{
        
        updateAppointment({
            ...appointment,
            [event.target.name]: event.target.value,
        })
    }

    // extract the values of the json
    const {mascota,propietario,fecha,hora,sintomas} = appointment;

    return ( 
    <div>
        <h2>Crear Cita</h2>
        <form>
            <label>Nombre Mascota</label>
            <input
                type="text"
                name="mascota"
                className="u-full-width"
                placeholder="Nombre de la mascota"
                onChange={handleChangeInput}
                value={mascota}
            />
            <label>Nombre Dueño</label>
            <input
                type="text"
                name="propietario"
                className="u-full-width"
                placeholder="Nombre de del dueño de la mascota"
                onChange={handleChangeInput}
                value={propietario}
            />
            <label>Fecha</label>
            <input
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={handleChangeInput}
                value={fecha}
            />
            <label>Hora</label>
            <input
                type="time"
                name="hora"
                className="u-full-width"
                onChange={handleChangeInput}
                value={hora}
            />
            <label>Sintomas</label>
            <textarea
                className="u-full-width"
                name="sintomas"
                onChange={handleChangeInput}
                value={sintomas}
            >

            </textarea>
            <button
                type="submit"
                className="u-full-width button-primary"
            >Agregar cita</button>
        </form>
    </div>
    );
}
 
export default Form;