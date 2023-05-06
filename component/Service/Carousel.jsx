import { CarouselItems } from '../constant';
import CarousalComponent from './CarouselComponent';

function Carousel() {
  return (
    <section className=" bg-primary dark:bg-secondary py-4">
      <div className="container py-4">
        <h1 className="text-Title_light dark:text-primary2 font-title text-4xl md:text-6xl text-center font-bold ">Our Clients</h1>
      </div>
      <div className="py-8">
        <CarousalComponent data={CarouselItems} />
      </div>
    </section>
  );
}

export default Carousel;
