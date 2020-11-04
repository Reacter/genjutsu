import {OPTIONS_SAVE} from './optionsTypes'

const initialState = {
    options: {}
}

const optionsReducer = (state = initialState,action) => {
    switch (action.type){
        case OPTIONS_SAVE: 
            return {
                ...state,
                options:action.payload
            }
        default: return state
    }
}

export default optionsReducer