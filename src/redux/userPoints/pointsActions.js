import { SAVE_POINTS } from './pointsTypes'


export const savePoints = (pointsData) => {
        return {
            type: SAVE_POINTS,
            payload: pointsData
        }

}

export const savePointsToFirebase = (pointsData) => {
    return (dispatch, getState, { getFirebase }) => {
        console.log(1)
        const userId = getState().firebase.auth.uid
        const firestore = getFirebase().firestore()
        // const username = useSelector(state => state.firebase.auth.displayName)   
        const username = getState().firebase.auth.displayName
        
        firestore.collection('quizResult').add({
            ...pointsData,
            userId:userId,
            username:username,
            date: new Date()
        }).then(() => {
            console.log('here')
            dispatch(savePoints(pointsData))
        }).catch(()=>{
            console.log('failed')
        })
    }
}