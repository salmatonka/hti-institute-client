import React from 'react';
import GalleryCards from './GalleryCards';

const Gallery = () => {
  const galleries = [
    {
      id: 1,
      img: 'https://www.bdhti.com/hadmin/upload/certificate-2.jpg'
    },
    {
      id: 2,
      img: 'https://www.bdhti.com/hadmin/upload/cer-1.jpg'
    },
    {
      id: 3,
      img: 'https://www.bdhti.com/hadmin/upload/cer-2.jpg'
    },
    {
      id: 4,
      img: 'https://www.bdhti.com/hadmin/upload/cer-3.jpg'
    },
    {
      id: 5,
      img: 'https://www.bdhti.com/hadmin/upload/cer-4.jpg'
    },
    {
      id: 6,
      img: 'https://www.bdhti.com/hadmin/upload/boishak-1.jpg'
    },
    {
      id: 7,
      img: 'https://www.bdhti.com/hadmin/upload/booth.jpg'
    },
    {
      id: 8,
      img: 'https://www.bdhti.com/hadmin/upload/rajdhani-seminer-1.jpg'
    },
    {
      id: 9,
      img: 'https://www.bdhti.com/hadmin/upload/seminer-1.jpg'
    },
    {
      id: 10,
      img: 'https://www.bdhti.com/hadmin/upload/queens-booth-1.jpg'
    },
    {
      id: 11,
      img: 'https://www.bdhti.com/hadmin/upload/mkuc-1.jpg'
    },
    {
      id: 12,
      img: 'https://www.bdhti.com/hadmin/upload/boishak.jpg'
    }
    

  ]
  return (
    <div>

      <div className="hero about-hero" >
        <img className='' src="https://www.bdhti.com/images/news.jpg" alt="" />
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Gallery</h1>
            <p className="mb-5"><a style={{color: '#ffffff', fontSize: '12px', fontWeight: 600}} href="index.php">Home /</a> <span style={{color: '#ff8a00', fontSize: '12px', fontWeight: 600}}>Gallery</span>
            </p>

          </div>
        </div>
      </div>

      {/* gallery map */}

      <div>

        <h2 style={{ color: '#44425a', fontWeight: 700, fontSize: '36px' }} className='text-center pt-20'>Photo Gallery</h2>

        <div className="gallery-container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-20 py-16 ">
          {
            galleries.map(gallery => <GalleryCards
              key={gallery.id}
              gallery={gallery}
            />)
          }
        </div>
      </div>

    </div>
  );
};

export default Gallery;