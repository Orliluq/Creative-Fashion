import React from 'react';
import Map from '../components/Map';
import MapBox from '../components/MapBox';

function contact() {
  return (
    <div className='py-20'>
      {/* <Map /> */}
      {/* <MapBox /> */}
      <div className='max-w-1/4 pt-12 text-center x-spacing flex flex-col gap-4'>
        <div>
          <h4 className='text-header py-2'>Contact us </h4>
          <p>
          Do you have any question? We are here to respond to all your requests.
          </p>
        </div>
        <div>
          <p>Mail:</p>
          <p>
            Orders: <span>order@gmail.com</span>
          </p>
          <p>
            General Inquiries: <span>general@gmail.com</span>
          </p>
          <p>
            Service / Claims: <span>services@gmail.com</span>
          </p>
        </div>
        <div>
          <p>Phone:</p>
          <p>+5812345678910</p>
        </div>
        <div>
          <p>Monday - Friday: 09:00 - 17:00</p>
          <p>Saturday: 09:00 - 14:30</p>
        </div>
      </div>
    </div>
  );
}

export default React.memo(contact);
