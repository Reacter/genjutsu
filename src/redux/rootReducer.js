import {combineReducers} from 'redux'
import pointsReducer from './userPoints/pointsReducer'
import optionsReducer from './options/optionsReducer'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase' 


const rootReducer = combineReducers({
    // cake: cakeReducer,
    // ice_cream: ice_creamReducer,
    // user: userReducer,
    userPoints: pointsReducer,
    options: optionsReducer,
    firebase:firebaseReducer,
    firestore:firestoreReducer
})

export default rootReducer