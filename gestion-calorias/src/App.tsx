import { useEffect, useMemo, useReducer } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList"
import CaloriesTrucker from "./components/CaloriesTrucker"

function App() {

  const [state , dispatch] = useReducer(activityReducer, initialState)

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])

  const canRestarApp = () => useMemo(() => state.activities.length, [state.activities])

  return (
    <>
      <header className="py-3">
        <div className="fondoTitulo">
          <h1 className="tituloApp">
            Contador de Calorias
          </h1>
          <button 
          disabled={!canRestarApp()}
          onClick={() => dispatch({type: 'restart-app'})}>Reiniciar App</button>
        </div>
      </header>  
      <section className="paraSection">
        <div className="paraDivSection">
          <Form
            dispatch={dispatch}
            state={state}
          />
        </div>        
      </section>
      <section className="paraSection">
        <CaloriesTrucker
          activities={state.activities}
        />
      </section>    
      <section className="paraSection">
        <ActivityList
          activities = {state.activities}
          dispatch={dispatch}
        />
      </section>

    </>
  )
}

export default App
