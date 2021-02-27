import React from 'react';

const gridItem = (props) => {
    const {name, description, photo} = props.officeData;

    return ( 
        <div>
            <div><img src={photo} alt='country flag' /></div>
            <div>{name}</div>
            <div>{description}</div>
        </div>
     );
}
 
export default gridItem;