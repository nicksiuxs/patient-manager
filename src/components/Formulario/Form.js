const Form = () => {
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
            />
            <label>Nombre Dueño</label>
            <input
                type="text"
                name="propietario"
                className="u-full-width"
                placeholder="Nombre de del dueño de la mascota"
            />
            <label>Fecha</label>
            <input
                type="date"
                name="fecha"
                className="u-full-width"
            />
            <label>Hora</label>
            <input
                type="time"
                name="hora"
                className="u-full-width"
            />
            <label>Sintomas</label>
            <textarea
                className="u-full-width"
                name="sintomas"
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