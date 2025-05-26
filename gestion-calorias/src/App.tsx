
import Form from "./components/Form"

import ActivityList from "./components/ActivityList"
import CaloriesTrucker from "./components/CaloriesTrucker"
import { useReducer } from "react"
import { activityReducer, initialState } from "./reducers/activity-reducer"

function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)
  return (
    <>
      <header className="py-3">
        <div className="fondoTitulo">
          <h1 className="tituloApp">
            Contador de Calorias
          </h1>
          <button>Reiniciar App</button>
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
          
        />
      </section>    
      <section className="paraSection">
        <ActivityList
          
        />
      </section>

    </>
  )
}

export default App
