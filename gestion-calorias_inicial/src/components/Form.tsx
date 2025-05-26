
export default function Form() {

    return (
        <form>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Categoría</label>
                <select className="form-select"
                    id="category"
                >
                  
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="nameAct" className="form-label">Actividad:</label>
                <input
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
                    
                />
            </div>
            <div className="mb-3">
                <label htmlFor="calories" className="form-label">Calorias:</label>
                <input
                    id="calories"
                    type="number"
                    className="form-control"
                    placeholder="Calorias. ej. 300 o 500"
                    
                />
            </div>

            <div className="d-grid gap-2 mt-5">
                <button 
                className="btn  btn-info" 
                type="submit"                
                >Guardar Comida o Ejercicio
                </button>
            </div>
        </form>
    )
}
