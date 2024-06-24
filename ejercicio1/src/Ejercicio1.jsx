import React,{useState} from 'react';
import './Ejercicio1.css'

const Ejercicio1 = () => {
    const[visibleButton,setbotonvisible] = useState(0);
    const buttons = ["left","center","right"];

    const handleClick = () => {
        setbotonvisible((prevbotonvisible) => (prevbotonvisible + 1) % buttons.length);
    };

    return (
            <div className="container">
            {visibleButton === 0 && (
            <button className="button left" onClick={handleClick}>
                Left
            </button>
            )}
            {visibleButton === 1 && (
            <button className="button center" onClick={handleClick}>
                Center
            </button>
            )}
            {visibleButton === 2 && (
            <button className="button right" onClick={handleClick}>
                Right
            </button>
            )}
        </div>
    )
}

export default Ejercicio1
