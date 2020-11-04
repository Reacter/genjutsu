import {OPTIONS_SAVE} from './optionsTypes'

export const optionsSave = (options) =>{
    return {
        type:OPTIONS_SAVE,
        payload:options
    }
}


