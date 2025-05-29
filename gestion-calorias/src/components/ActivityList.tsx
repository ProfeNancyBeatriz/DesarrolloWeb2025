import { useMemo } from "react"
import type { Activity } from "../types"
import { categories } from "../data/categorias"

 type ActivityListProps = {
  activities: Activity[]
 }
export default function ActivityList({activities} : ActivityListProps) {

   const categoryName = useMemo(() =>
    (category: Activity['category']) => 
      categories.map( cat => cat.id === category ? cat.name : '')
      ,[activities])
  return (
    <>
        <h2 className="paraH2">Comida y Actividades</h2>

            <div className="paraMap">
                <div className="div1">
                    <p>{activities.map(activity => (
                      <div key={activity.id} className="paraMap">
                        <div className="div1">
                          <p className={`pos ${activity.category === 1 ? 'color1' : 'color2'}`}>
                            {categoryName(+activity.category)}</p>
                          <p className="div1p2">{activity.name}</p>
                          <p className="div1p3">{activity.calories}{' '}
                            <span>Calorias</span>
                          </p>
                        </div>
                      </div>
                    ))}</p>
                </div>
                <div>
                    <button>Editar</button>
                    <button>Eliminar</button>
                </div>
            </div>

    </>
  )
}
