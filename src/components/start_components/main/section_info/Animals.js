import React from 'react';
import animals_img from '../../../../assets/png/animals.png'

const Animals = () => {
    return (
        <div className={`d-flex justify-content-center`}>
            <img src={animals_img}/>
        </div>
    );
};

export default Animals;