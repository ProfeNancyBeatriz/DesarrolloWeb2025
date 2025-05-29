import type { Activity } from "../types"


export type ActivityActions = 
{ type: 'save-activity', payload :{newActivity: Activity}} |
{ type: 'save-activityId'} |
{ type: 'delete-activity'} 

export type ActivityState = {
    activities : Activity[]
}

export const initialState: ActivityState = {
    activities: []
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
    if (action.type === 'save-activity') {
        return {
            ...state,
            activities: [...state.activities, action.payload.newActivity]
        }
    }
    if (action.type === 'save-activityId') {
        console.log('actualizar')
    }
    if (action.type === 'delete-activity') {
        console.log('eliminar')
    }
}
