import { getByTitle } from '@testing-library/react';
import React, { useState } from 'react';


const BoxGenerator = (props) => {
    const[boxColor, setBoxColor] = useState("");
    const[boxSize, setBoxSize] = useState("");

    const[boxList, setBoxList] = useState([]);

    

    const createBox = (e) =>{
        e.preventDefault();
        const newBox = {boxColor, boxSize};
        setBoxList([...boxList, newBox]);
        setBoxSize("");
        setBoxColor("");

    }

    return(
        <div>
            <p style={{color:'red'}}>Hello</p>
            <form onSubmit={createBox}>
                <div>
                    <label for="makeColor">Box color: </label>
                    <input type="text" name="makecolor" value={boxColor} onChange={(e) => setBoxColor(e.target.value)} /> 
                </div>
                <div>
                    <label for="makeSize">Box size: </label>
                    <input type="text" name="makeSize" value={boxSize} onChange={(e) => setBoxSize(parseInt(e.target.value))} />
                </div>
                <input type="submit" value="Add" />
            </form>
            <div className="boxContainer">
                {boxList.map(box => {
                    return(
                        <div style={{backgroundColor: box.boxColor, height: box.boxSize, width: box.boxSize}}> 
                        </div>)})
                }
            </div>
            <p>{boxList.map(box => box.color)}</p>
        </div>
    )
}

export default BoxGenerator;

