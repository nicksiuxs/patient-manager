import React from 'react';

const Appointment = ({appointment, deleteAppointment}) => {
    return (
    <div className="cita">
        <p>Mascota: <span>{appointment.mascota}</span></p>
        <p>Propietario: <span>{appointment.propietario}</span></p>
        <p>Fecha: <span>{appointment.fecha}</span></p>
        <p>Hora: <span>{appointment.hora}</span></p>
        <p>Hora: <span>{appointment.sintomas}</span></p>
        <button
            className="button eliminar u-full-width"
            onClick={()=>deleteAppointment(appointment.id)}
        >
            Eliminar
        </button>
    </div>
    );
}
 
export default Appointment;