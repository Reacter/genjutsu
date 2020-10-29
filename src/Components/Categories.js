import React, { useState,useEffect } from 'react';
import axios from 'axios'
/* eslint-disable */
const opentDB = require('opentdb-api')

const categoryOptions = props =>  {
    const [categorie,setCategorie] = useState([])
    

    const fetchDataHandler =  () => {
        opentDB.getCategories()
        .then(res => {
            setCategorie(res) 
        })
    }
    
    useEffect(() =>{
        fetchDataHandler()
    },[])
    
    let options = null
    if (categorie.length > 0){
        options = categorie.map(opt => <option key={opt.id} id={opt.id} value={opt.id}>{opt.name}</option>)
    }

        return (
                <React.Fragment>
                    <option value="any" >Any</option>
                    {options}
                </React.Fragment>
        );
}



export default categoryOptions;