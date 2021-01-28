import React, {useState} from 'react';
import Form from './components/Formulario/Form';
import Appointment from './components/Appointment/Appointment';

function App() {

  // Array of appointments
  const[appointments, saveAppontiments] = useState([]);

  // Function that takes the current appointments 
  const addAppointment = appointment =>{
    
    saveAppontiments([...appointments, appointment]);
  }

  // function that delete an appointment by id
   const deleteAppointment= (id)=>{
    const newAppointment = appointments.filter(ap =>{
      return  ap.id!==id;
    })

    // save th new arry of appointments
    saveAppontiments(newAppointment);
   }
  return (
    <div className="container">
      <h1>Admnistrador de pacientes</h1>
      <div className="row">
        <div className="one-half column">
          <Form
            addAppointment = {addAppointment}
          />
        </div>
        <div className="one-half column">
          <h2>Administra tus citas</h2>
          {
            appointments.map(appointment=>(
              <Appointment
                key={appointment.id}
                appointment ={appointment}
                deleteAppointment = {deleteAppointment}
              />
            )
              
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
