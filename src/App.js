import React, {useState} from 'react';
import Form from './components/Formulario/Form';

function App() {

  // Array of appointments
  const[appointments, saveAppontiments] = useState([]);

  // Function that takes the current appointments 
  const addAppointment = appointment =>{
    
    saveAppontiments([...appointments, appointment]);
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
          2
        </div>
      </div>
    </div>
  );
}

export default App;
