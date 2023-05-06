import React, { useRef, useEffect } from 'react';
import Glide from '@glidejs/glide';
import BusinessHours from './BusinessHour';

function Slider() {
  const glideRef = useRef(null);

  useEffect(() => {
    // Initialize the Glide instance after the component has been rendered
    const glide = new Glide(glideRef.current, {
      type: 'slider',
      perView: 1,
      autoplay: 3000, // Change slide automatically every 3 seconds
      hoverpause: true,
    });

    // Mount and destroy the Glide instance as needed
    glide.mount();
    return () => {
      glide.destroy();
    };
  }, []);

  return (
    <div className="p-6 my-4 h-full w-full rounded-lg hover:shadow-md border-2  border-violet-300 dark:border-secondary2">
      <div ref={glideRef} className="glide relative">
        <div className="glide__track overflow-hidden my-4" data-glide-el="track">
          <ul className="glide__slides flex">
            <li className="glide__slide ">
              {/* Render your third slide content */}
              <BusinessHours />
            </li>
            <li className="glide__slide bg-slate-600">
              {/* Render your third slide content */}
              <div className="justify-center items-center h-full w-full ">
                <h2>Title</h2>
                <p>dd</p>
              </div>
            </li>
            <li className="glide__slide bg-slate-100">
              {/* Render your third slide content */}
              <div className="justify-center items-center h-full w-full ">
                <h2>Title</h2>
                <p>aaaa!</p>
              </div>
            </li>
            {/* Add more slides as needed */}
          </ul>
        </div>
        <div data-glide-el="controls" className="flex py-4  justify-between items-end">
          <button data-glide-dir="<" className="btn "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-secondary dark:fill-secondary my-2 cursor-pointer"><path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z" /></svg></button>
          <button data-glide-dir=">" className="btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-secondary dark:fill-secondary my-2 cursor-pointer"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slider;
