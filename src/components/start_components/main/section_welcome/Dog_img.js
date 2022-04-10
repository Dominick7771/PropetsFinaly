import React from 'react';
import dog_img from '../../../../assets/png/dog.png'

const DogImg = () => {
    return (
        <div className={'d-flex justify-content-center'}>
            <img src={dog_img}/>
        </div>
    );
};

export default DogImg;