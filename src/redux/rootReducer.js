import { combineReducers } from 'redux'
import pointsReducer from './userPoints/pointsReducer'
import optionsReducer from './options/optionsReducer'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import authReducer from './auth/authReducer'

const rootReducer = combineReducers({
    userPoints: pointsReducer,
    options: optionsReducer,
    auth: authReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
    
})

export default rootReducer