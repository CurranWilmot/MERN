import React, {useState, useEffect} from "react";
import SwapiFormComponent from "../components/SwapiFormComponent";
import {useParams} from 'react-router-dom'
import axios from 'axios';



const SWPersonDisplay = (props) => {
    const [swTopic, setSwTopic] = useState();
    const {swthing, swid} = useParams();
    console.log(swthing);
    console.log(swid);


    useEffect(() => {
        axios.get(`https://swapi.dev/api/${swthing}/${swid}`)
            .then(response => {setSwTopic(response.data)})
            .catch(err => {
                setSwTopic()
                console.log(err)
            })
    }, [swid, swthing]);

    return(
        <>
            <SwapiFormComponent/>
            {swTopic?
            <div>
                <p>{swTopic.name}</p>
                <div>
                    {Object.keys(swTopic).filter((swkey, i) => 0 < i < 5).map((swkey, i) => {
                        if(0 < i < 4){
                    return(
                        <p key={i}>
                            {swkey}: {swTopic[swkey]}
                        </p>)
                        }
                })}
                </div>
            </div>:
            <div>
                <img src="https://starwarsblog.starwars.com/wp-content/uploads/2017/06/25-star-wars-quotes-obi-wan-kenobi-identification-tall.jpg" alt="" />
                <p>These are not the droids you're looking for</p>
            </div>
            
            }
        </>
    )

}


export default SWPersonDisplay;