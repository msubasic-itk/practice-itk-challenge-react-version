import React from 'react';

import shorten from '../../helpers/shorten-string';

const gridItem = (props) => {
    const {name, description, photo} = props.officeData;
    const shortenDescription = shorten(description, 77);

    return ( 
        <div className='office'>
            <div className='container-image'>
                { photo ? <img className='image'src={photo} alt='country flag' /> :
                          <div className='image-alternative'> {shorten(name, 1, true)} </div>
                }
            </div>
            <div className='container-text'>
                <div className='container-text-name'>{name}</div>
                <div className='container-text-description'>{shortenDescription}</div>
            </div>
        </div>
     );
}
 
export default gridItem;