import React from 'react';
import CorporatePartner from './CorporatePartner';

const CorporatePartnerCards = () => {
    const corporates = [
        {
          id: 1,
          img: 'https://www.bdhti.com/hadmin/upload/bteb.jpg'
        },
        {
          id: 2,
          img: 'https://www.bdhti.com/hadmin/upload/BU.jpg'
        },
        {
          id: 3,
          img: 'https://www.bdhti.com/hadmin/upload/kgsc.jpg'
        },
        {
          id: 4,
          img: 'https://www.bdhti.com/hadmin/upload/lalmatia.jpg'
        },
        {
          id: 5,
          img: 'https://www.bdhti.com/hadmin/upload/queens-school.jpg'
        },
        {
          id: 6,
          img: 'https://www.bdhti.com/hadmin/upload/shadow.jpg'
        },
        {
          id: 7,
          img: 'https://www.bdhti.com/hadmin/upload/asa.jpg'
        },
        {
          id: 8,
          img: 'https://www.bdhti.com/hadmin/upload/bangabondhu.jpg'
        }
       
      ]
      
      
      
    return (
        <div>
            <h2 style={{fontSize: '20px',fontWeight: 600,color: '#44425a'}}>Choose your course</h2>


            {
                corporates.map(corporate => <CorporatePartner
                key={corporate }
                corporate ={corporate }
                ></CorporatePartner>)
            }
        </div>
    );
};

export default CorporatePartnerCards;