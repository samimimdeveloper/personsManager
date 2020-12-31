import React from 'react';

const Person = ({firstname,lastname,personDelet}) => {
    return ( <div onClick={personDelet} style={{cursor :"pointer"}}>
        <p>
            {`.${firstname} ${lastname}  `}
        </p>
    </div> );
}
 
export default Person;