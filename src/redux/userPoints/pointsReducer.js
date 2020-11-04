import { SAVE_POINTS } from './pointsTypes'

const initialState = {
    points: 0,
    questions: 0
}

const pointsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_POINTS:
            return {
                ...state,
                points: action.payload.points,
                questions: action.payload.questions
            }
        default: return state 
    }
}

export default pointsReducer

