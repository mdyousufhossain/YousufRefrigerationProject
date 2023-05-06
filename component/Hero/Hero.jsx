import { motion, useScroll, useSpring } from 'framer-motion';
import React, { Suspense } from 'react';
import Link from 'next/link';
import { heroSection } from '@/component/constant';
import NavBar from '@/component/NavBar';
import Slider from './SingleSlider';

import ThemeIcon from '../darkmodeUi';

// const Form = React.lazy(() => import('./Form'));

function Hero() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (

    <div className="section_L  bg-primary dark:bg-secondary bg-gradient-to-r from-violet-700/[0.1] to-[#19A7CE]/[0.3] dark:from-bg-secondary/[0.1] dark:to-orange-500/[0]">
      {/* loding animation div */}
      <motion.div
        className="bg-secondary dark:bg-primary2 h-1  fixed
        top-0 left-0 right-0  origin-top-left z-10"
        style={{ scaleX }}
      />
      {/* navbar for mobile  */}
      <div className="flex justify-between  py-4 mb-4 md:hidden border-b-2 border-primary2 dark:border-secondary2">
        {/* logo for mobile */}
        <Link href="/">
          <h3 className="text-gray-900 dark:text-Title_Dark font-medium  font-title text-xl mx-2"> Yousuf refrigeration</h3>
        </Link>
        {/* navbar design for mobile */}
        <NavBar />
      </div>
      {/* starting the pc section of navbar and hero design */}
      <div className="md:container  md:mx-auto pb-8 md:pb-10
       "
      >

        {/* navbar menu for pc  */}
        <div className="md:flex  md:justify-between hidden md:block  py-6 mb-6">
          {/* logo */}
          <Link href="/">
            <h3 className="text-gray-900 dark:text-Title_Dark font-medium font-title text-xl"> Yousuf refrigeration</h3>
          </Link>
          <NavBar />
        </div>

        {/* hero section starting here  */}
        <div className="md:flex md:justify-between py-4 md:py-8">

          {/* title and details text area and button  */}
          <div className="w-full md:w-3/5">
            {/* titile */}
            <div className="absolute top-20 rounded-full left-2 md:left-20 w-[300px] h-[200px] md:w-[40%] md:h-[700px] bg-gradient-to-r from-[#159895]-700/[0.5] to-[#57C5B6]-500/[0.4] dark:from-yellow-500/[0.3] dark:to-orange-500/[0.5]
            "
            />
            <div
              className="absolute top-20 rounded-full left-3 md:left-22 w-[200px] h-[200px] md:w-[30%] md:h-[450px] bg-gradient-to-r from-[#159895]-500/[0.5] to-[#57C5B6]-600/[0.4]

              dark:from-yellow-400/[0.3] dark:to-orange-600/[0.5] "

            />
            <div className="flex justify-center md:justify-start ">

              <h1

                className="MainTitle bg-clip-text  text-transparent bg-gradient-to-r from-pink-700 to-violet-700 dark:text-Title_Dark z-20"
              >20 years of <br />
                <span className="MainTitle  text-Title_light dark:text-primary2">
                  experience
                </span>
              </h1>
              {/* using it for performance issue  */}

            </div>
            {/* details */}
            <p className="consText  text-Title_light dark:text-Title_Dark">{heroSection.details}</p>
            <div className="flex justify-around md:flex-none md:justify-start">
              <Link className="btn  z-20" href="/product">
                Get Product
              </Link>
            </div>
            {/* image cersalll from glider and motion js */}
          </div>
          <div className="md:w-4/12">
            {/* form need more funcionality and more improvment */}
            <Suspense fallback={<div> Please Wait... </div>}>

              <Slider />
            </Suspense>
          </div>
        </div>
      </div>
      <div className="bg-slate-700 dark:bg-slate-900   w-[60px] h-[60px] rounded-full fixed right-5 bottom-5  z-10 flex items-center justify-center cursor-pointer">
        <ThemeIcon />
      </div>
    </div>
  );
}

export default Hero;

