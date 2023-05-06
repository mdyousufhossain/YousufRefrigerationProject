import CheckOurProduct from '../Product/CheckOurProduct';
import Carousel from './Carousel';
import { ServicesMini } from './MiniService';

function Service() {
  return (
    <section className="bg-primary dark:bg-secondary">
      <div className="container">
        <div className="md:flex md:py-16">
          <div className="lg:mr-16 md:mr-8">
            <h2 className="consText px-0 text-left  text-4xl font-extrabold lg:text-6xl text-Title_light dark:text-primary2"> Why Choose us?</h2>
            <p className="text-lg tracking-tight font-para text-Title_light dark:text-Title_Dark text-justify">
              We offer top-notch refrigerant and AC services,along with high-quality fridge and AC parts.
              We also have a range of new and used AC and fridge units for sale.Trust us for all your cooling needs-fast,efficient,and affordable service guaranteed.
            </p>
            <button className="btn m-0 my-4 md:my-8" type="button">Get a Qoute</button>
          </div>
          <div>
            <ServicesMini />
          </div>
        </div>
      </div>
      <Carousel />
      <CheckOurProduct />
    </section>
  );
}

export default Service;
