import Link from 'next/link';

function Footer() {
  return (
    <section className="bg-primary dark:bg-secondary border-t-2 border-primary2 dark:border-secondary2 ">
      <div className="container md:flex md:justify-evenly py-4 ">
        <div className="md:w-1/3 p-4">
          <h2 className=" text-xl font-bold tracking-tight font-para text-Title_light dark:text-primary2">About us</h2>
          <p className="md:text-justify break-words text-Title_light dark:text-Title_Dark ">For dacads Yousuf refrigeration have been a trusted choice for reliability and safety in Air-conditioning, heating parts and service. </p>
        </div>
        <div className="p-4">
          <h2 className=" text-xl font-bold tracking-tight font-para text-Title_light dark:text-primary2">Useful Link</h2>
          <div className="text-lg tracking-tight font-para text-Title_light dark:text-Title_Dark ">
            <ol>
              <li>
                <Link href="/product">Product</Link>
              </li>
              <li><Link href="/product">Compressor</Link></li>
              <li><Link href="/product">Refrigeratent Gas</Link></li>
              <li><Link href="/product">Find More Product</Link></li>
            </ol>
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-bold tracking-tight font-para text-Title_light dark:text-primary2">Address</h2>
          <p className="text-lg tracking-tight font-para text-Title_light dark:text-Title_Dark ">66,kazinazrulislam avenue,Farmgate ,Dhaka ,Bangladesh</p>
          <button className="btn w-[100%] m-0 h-[60px]"><a href="https://www.google.com/maps/dir//Yousuf+refrigeration/@23.7560704,90.3206788,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3755b91f8ed8b3e7:0x7079cd9970515d2c!2m2!1d90.3907192!2d23.7560862" className="mx-auto"> Get Location</a></button>
        </div>
      </div>
      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-400">
            © 2023 Yousuf Refrigeration. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
