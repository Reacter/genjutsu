import React, { useState } from 'react'
import { act } from 'react-dom/test-utils'
import styled from 'styled-components'

const MyButton = styled.button`
    background-color:lightblue;
    border-color:lightblue;
    font-size:20px;
    margin-top:10px;
    width:400px;
    border-radius:6px;
    cursor:pointer;


:hover{
    background-color:blue;
    border-color:blue;
}
/* ${({isMouseUp, correct}) => isMouseUp && `background-color: ${correct ? 'green' : 'red'}`  } */
${({activeStatus, correct}) => !activeStatus && `background-color: ${correct ? 'green' : 'red'}`  }


`


//
//



const Answer = ({children,correct,keyValue,updateId,updateCorrectId,setActiveStatus,activeStatus}) => {
    const [onMouseUp,setOnMouseUp] = useState(false)
    const onMouseUpHandler = (correct) =>{
        if(correct){
            setActiveStatus(false)
            setOnMouseUp('mouseUp')
            setTimeout(() => {
                updateCorrectId()
                setOnMouseUp('')
                setActiveStatus(true)
            }, 1000);
        }else{
            setActiveStatus(false)
            setOnMouseUp('mouseUp')
            setTimeout(() => {
                updateId()
                setOnMouseUp('')
                setActiveStatus(true)
            }, 1000);
        }
    }

    if (correct) {
        return (<MyButton   key={keyValue} 
                            correct
                            activeStatus={activeStatus}
                            isMouseUp={onMouseUp}
                            onMouseUp={()=>onMouseUpHandler(true)}>{children}
                </MyButton>)
    }
    else {
        return (<MyButton 
                    key={keyValue}
                    activeStatus={activeStatus}
                    isMouseUp={onMouseUp}
                    onMouseUp={()=>onMouseUpHandler(false)}>{children}
                </MyButton>)
    }
}

export default Answer






