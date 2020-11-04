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
        const firestore = getFirebase().firestore()
        firestore.collection('users').add({
            
            pointsData,
            username: 'nemo'
        }).then(() => {
            console.log('here')
            dispatch(savePoints(pointsData))
        }).catch(()=>{
            console.log('failed')
        })
    }
}