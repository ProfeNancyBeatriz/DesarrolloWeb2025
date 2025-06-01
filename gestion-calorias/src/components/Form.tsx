import { useEffect, useState, type Dispatch } from "react"
import { v4 as uuidv4 } from 'uuid'
import { categories } from "../data/categorias"
import type { Activity } from "../types"
import type { ActivityActions, ActivityState } from "../reducers/activity-reducer"

type FormProps = {
    dispatch: Dispatch<ActivityActions>,
    state: ActivityState
}
//crearé initialState para reiniciar el formulario cada nuevo ingreso
const initialState : Activity= {
        id: uuidv4(),
        category: 1,
        name: '',
        calories: 0
    }

export default function Form({dispatch, state} : FormProps) {

    const [activity, setActivity] = useState<Activity>(initialState)

    useEffect(() => {
        if (state.activeId) {
            const selectedActivity = state.activities.filter(stateActivity => stateActivity.id === state.activeId)[0]
            setActivity(selectedActivity)
        }
    },[state.activeId])

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
        //esto es para mantener la coherencia en los tipos (la fc. retorna true o false)
        const isNumberField = ['category', 'calories'].includes(e.target.id)

        setActivity({
            ...activity,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        })
    }

    //función para lograr deshabilitar el botón hasta que se completen los inputs
    const isValidActivity = () => {
        const { name, calories } = activity
        return name.trim() !== '' && calories > 0
    }


    //utilizaremos useReducer (alternativa a useState, sirve para acciones mas complejas)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        dispatch({ type: 'save-activity' , payload: {newActivity: activity}})

        setActivity({
            ...initialState,
            id: uuidv4()
        })

    }
    return (
        <form
            onSubmit={ handleSubmit }
        >
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Categoría</label>
                <select className="form-select"
                    id="category"
                    value={activity.category}
                    onChange={handleChange}

                >
                    {categories.map(category => (
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="nameAct" className="form-label">Actividad:</label>
                <input
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
                    value={activity.name}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="calories" className="form-label">Calorias:</label>
                <input
                    id="calories"
                    type="number"
                    className="form-control"
                    placeholder="Calorias. ej. 300 o 500"
                    value={activity.calories}
                    onChange={handleChange}
                />
            </div>

            <div className="d-grid gap-2 mt-5">
                <button 
                className="btn  btn-info" 
                type="submit"
                disabled={!isValidActivity()}
                >{activity.category === 1 ? 'Guardar Comida' : 'Guardar Ejercicio'}
                </button>
            </div>
        </form>
    )
}
