import React, {useState, useEffect} from "react";
import SwapiFormComponent from "../components/SwapiFormComponent";
import {useParams} from 'react-router-dom'



const SwapiDisplayComponent = (props) => {

    const {swThing, swId} = useParams();


    return(
        <>
            <SwapiFormComponent/>
        </>
    )

}


export default SwapiDisplayComponent;