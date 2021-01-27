import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const Form = ({addAppointment}) => {

    // Creating the state of appointment
    const [appointment, updateAppointment] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
    });

    // State for the errors
    const [error, updateError] = useState(false);

    // Function that excute when the user type in an input
    const handleChangeInput = (event) => {

        updateAppointment({
            ...appointment,
            [event.target.name]: event.target.value,
        })
    }

    // extract the values of the json
    const { mascota, propietario, fecha, hora, sintomas } = appointment;

    // When the user press the button send appointment
    const submitAppointment = (event) => {
        event.preventDefault();

        // Validate values
        if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === "" || hora.trim() === "" || sintomas.trim() === "") {
            updateError(true);
            return;
        }
        // Delete previous
        updateError(false);

        // Asign an Id
        appointment.id = uuid();
        
        // Create an a appointment
        addAppointment(appointment);

        // Reboot the form
        updateAppointment({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: '',
        })
    }

    return (
        <div>
            <h2>Crear Cita</h2>
            {(error) ? <p className="alerta-error">Todos los campos deben ser validados</p> : null}
            <form
                onSubmit={submitAppointment}
            >
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