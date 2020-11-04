import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {buy_Cake} from './redux/cake/cakeActions'
import {buy_Ice_Cream} from './redux/ice_cream/ice_creamActions'

const Test = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const numOfIceCream = useSelector(state => state.ice_cream.numOfIceCream)
    const dispatch = useDispatch()
    const [number,setNumber] = useState(1)



    return (
        <div>
            <div>Number of Cakes in stash:  {numOfCakes}</div>
            <button onClick={() => dispatch(buy_Cake())}>Buy Cake</button>
            <br></br>
            
            <div>Number of Ice Creams in stash:  {numOfIceCream}</div>
            <button onClick={() => dispatch(buy_Ice_Cream())}>Buy Ice Cream</button>
            <br></br>
            <input name='buy_cake' value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => dispatch(buy_Cake(number))}>Buy {number} cakes</button>
        </div>
    );
};

export default Test;