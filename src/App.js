import React, {useState, useEffect} from 'react';
import Form from './components/Formulario/Form';
import Appointment from './components/Appointment/Appointment';

function App() {

  // Appointment in localstorage
  let initialAppointments = JSON.parse(localStorage.getItem('citas'));
  if(!initialAppointments){
    initialAppointments = [];
  }

  // Array of appointments
  const[appointments, saveAppontiments] = useState(initialAppointments);

  // useEffect para realizar ciertas operaciones cuando el state cambia
  useEffect(()=>{
      if(initialAppointments){
        localStorage.setItem('citas', JSON.stringify(appointments));
      }else{
        localStorage.setItem('citas', JSON.stringify([]))
      }
  }, [appointments]); //cada vez que cambien las citas se ejecutará el use effect

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

  //  conditional message 
  const title = appointments.length===0 ? "Agregar citas" : "Administra tus citas";

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
          <h2>{title}</h2>
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
