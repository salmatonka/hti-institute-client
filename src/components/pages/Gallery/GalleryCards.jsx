import React from 'react';

const GalleryCards = ({gallery}) => {
    return (
        <div className='px-4 py-12 '>
            <img className='border-b-4 border-orange-600' src={gallery.img} alt="" />
        </div>
    );
};

export default GalleryCards;