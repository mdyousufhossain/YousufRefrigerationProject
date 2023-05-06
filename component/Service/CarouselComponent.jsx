import React, { useRef, useEffect } from 'react';

import Glide from '@glidejs/glide';
import Image from 'next/image';

function CarousalComponent({ data }) {
  const glideRef = useRef(null);
  // Filter the data array based on the random ids
  useEffect(() => {
    // Initialize the Glide instance after the component has been rendered
    const glide = new Glide(glideRef.current, {
      type: 'slider',
      perView: 3,
      autoplay: 2000, // Change slide automatically every 3 seconds
      hoverpause: true,
      // Responsive breakpoints
      breakpoints: {
        768: {
          perView: 1, // Show 1 slide per view on screens smaller than 768px
        },
        992: {
          perView: 2, // Show 2 slides per view on screens smaller than 992px
        },
      },
    });

    // Mount and destroy the Glide instance as needed
    glide.mount();
    return () => {
      glide.destroy();
    };
  }, []);

  return (
    <div>

      <div ref={glideRef} className="glide relative">
        <div className="glide__track overflow-hidden" data-glide-el="track">
          <ul className="glide__slides flex ">
            { data && data.map((item) => (
              <li className="glide__slide" key={item.id}>
                <div>
                  <div className="px-4">
                    { item.src ? (
                      <div className="relative mx-auto my-4 w-[200px] h-[155px]">
                        <Image
                          src={item.src}
                          alt="khuni"
                          fill
                          quality={75}
                        />
                      </div>
                    ) : (
                      <div className="relative mx-auto my-4 w-[200px] h-[200px] rounded-full object-cover bg-green-700 flex justify-center items-center text-white text-4xl font-bold">
                        {item.title[0]}
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <h2 className="text-Para_Light dark:text-Para_Dark text-xl font-bold">{item.title}</h2>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* <div data-glide-el="controls" className="flex py-4  justify-between items-end">
          <button data-glide-dir="<" className="btn "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-secondary dark:fill-secondary my-2 cursor-pointer"><path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z" /></svg></button>
          <button data-glide-dir=">" className="btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-secondary dark:fill-secondary my-2 cursor-pointer"><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z" /></svg>
          </button>
        </div>; */}
      </div>
    </div>
  );
}

export default CarousalComponent;

