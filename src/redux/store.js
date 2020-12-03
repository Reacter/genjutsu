import { createStore, applyMiddleware,compose } from 'redux'
import rootReducer from './rootReducer'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { getFirestore, reduxFirestore } from 'redux-firestore'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'
import fbConfig from '../Firebase'

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(  thunk.withExtraArgument({getFirebase})),
       
    )
)

export default store