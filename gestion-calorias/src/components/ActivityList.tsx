import type { Activity } from "../types"
import { categories } from "../data/categorias"
import { useMemo } from "react"
import type { ActivityActions } from "../reducers/activity-reducer"

type ActivityListProps = {
    activities: Activity[],
    dispatch: React.Dispatch<ActivityActions>
}

export default function ActivityList({activities, dispatch} : ActivityListProps) {

    const categoryName = useMemo(() =>
        (category: Activity['category']) =>
            categories.map( cat => cat.id === category ? cat.name : '')
    , [activities])

    const isEmptyActivities = useMemo(() => activities.length === 0, [activities])

  return (
    <>
        <h2 className="paraH2">Comida y Actividades</h2>

        {isEmptyActivities ? <p className="parapdeH2">No hay actividades aún...</p> :

        activities.map( activity => (
            <div key={activity.id} className="paraMap">
                <div className="div1">
                    <p className={`pos ${activity.category === 1 ? 'color1' : 'color2'}`}>
                        {categoryName(+activity.category)}
                    </p>
                    <p className="div1p2">
                        {activity.name}
                    </p>
                    <p className="div1p3">
                        {activity.calories} {' '}
                        <span>Calorias</span>
                    </p>
                </div>
                <div>
                    <button
                    onClick={() => dispatch({type: "save-activeId", payload: {id: activity.id}})}
                    >Editar</button>
                    <button
                    onClick={() => dispatch({type: "delete-activity", payload: {id: activity.id}})}
                    >Eliminar</button>
                </div>
            </div>
        ))}
    </>
  )
}
