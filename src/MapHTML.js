import React, { useState, useMemo } from 'react';

const MapHTML = ({ mapHTML, location, locationDetails }) => {
  const [isActive, setIsActive] = useState(true);

  const classes = useMemo(() => `${!isActive ? 'closed' : ''} card-body px-0`, [isActive]);

  return (
    <div className='container'>
        <section>
            <div className='card map-card'>
                <div id='map-container-google-1' className='z-depth-1-half map-container'>
                    {/* Use mapHTML as the src for the iframe */}
                    <iframe 
                        src={mapHTML} 
                        className='mapTest w-100'></iframe>
                </div>
                <div className={classes} onClick={() => setIsActive(!isActive)}>
                    <div className='bg-white px-3 pb-2'>
                        <h5 className='card-title h5 living-coral-text'>{location || 'Location'}</h5>
                        <div className='d-flex justify-content-between living-coral-text'>
                            <h6 className='card-subtitle font-weight-light'>{locationDetails || 'Details not available'}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default MapHTML;
