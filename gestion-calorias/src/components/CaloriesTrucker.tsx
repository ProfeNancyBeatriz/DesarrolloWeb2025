import { useMemo } from "react"
import type { Activity } from "../types"
import CaloriesDisplay from "./CaloriesDisplay"

type CalorieTrackerProps = {
    activities: Activity[]
}

export default function CaloriesTrucker({ activities }: CalorieTrackerProps) {

    //contadores
    const caloriasConsumidas = useMemo(() => activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total, 0), [activities])

    const caloriasGastadas = useMemo(() => activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories : total, 0), [activities])

    const caloriasTotales = useMemo(() => caloriasConsumidas - caloriasGastadas, [activities])
    return (
        <>
            <h2 className="paraH2">Resumen de Calorias</h2>
            <div className="divTrucker">
                <CaloriesDisplay
                    calories={caloriasConsumidas}
                    text="Consumidas"
                />
                <CaloriesDisplay
                    calories={caloriasGastadas}
                    text="Gastadas"
                />
                <CaloriesDisplay
                    calories={caloriasTotales}
                    text="Diferencia"
                />
            </div>
        </>
    )
}
