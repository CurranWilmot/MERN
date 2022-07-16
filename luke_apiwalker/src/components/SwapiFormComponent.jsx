import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const SwapiFormComponent = (props) => {
    const [swThing, setSwThing] = useState("");
    const [swId, setSwId] = useState("");

    
    const navigate = useNavigate();
   
    
    const HandleSwRedirect = (e) =>{
        e.preventDefault();
        navigate(`/${swThing}/${swId}`);
    }

    return(
        <>
            <form onSubmit={HandleSwRedirect}>
        
                <label for="sw_thing">Search for: </label>
                <select name="sw_thing" onChange={(e) => setSwThing(e.target.value)} >
                    <option hidden value="">Please select something</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label for="sw_id"> ID: </label>
                <input type="number" name="sw_id"  onChange={(e) => setSwId(e.target.value)}/>
                <input type="submit" value="Search" />
            </form>
        </>
    )


}

export default SwapiFormComponent;












































// import React, { useState, useEffect } from "react";
// import axios from "axios";


// const SwapiFormComponent = (props) => {
//     const [swThing, setSwThing] = useState("");
//     const [swId, setSwId] = useState("");
//     const [swPerson, setSwPerson] = useState({});

    

//     const fetchSWPerson = (e) => {
//         console.log(swThing)
//         e.preventDefault();
//         axios.get(`https://swapi.dev/api/${swThing}/${swId}`)
//         .then(response => {
//             setSwPerson(response.data)
//             console.log(response.data)
//         })
//         .catch(err => console.log(err))
//     }

//     // useEffect(() => {
//     //     fetch(`https://swapi.dev/api/people/${swId}`)
//     //         .then(response => response.json())
//     //         .then(response => {
//     //             setSwPerson(response.results)
//     //             console.log(response.results)
//     //         })
//     //         .catch(err => console.log(err))
//     // }, []);          ${swId}



//     return(
//         <>
//             <form onSubmit={fetchSWPerson}>
        
//                 <label for="sw_thing">Search for: </label>
//                 <select name="sw_thing" onChange={(e) => setSwThing(e.target.value)} >
//                     <option hidden disabled value="">Please select something</option>
//                     <option value="people">People</option>
//                     <option value="planets">Planets</option>
//                 </select>
//                 <label for="sw_id"> ID: </label>
//                 <input type="number" name="sw_id"  onChange={(e) => setSwId(e.target.value)}/>
//                 <input type="submit" value="Search" />
//             </form>
//             {
//                 swPerson?
//                 <div>
//                     <h1>{swPerson.name}</h1>
//                 </div>:
//                 console.log("error bruh")
//             }
//         </>
//     )


// }

// export default SwapiFormComponent;