import FaqCreator from './FaqCreator';
import { faqData } from '../constant';

function Faq() {
  return (
    <section className=" bg-primary dark:bg-secondary bg-primary dark:bg-secondary bg-gradient-to-r from-violet-700/[0.1] to-[#19A7CE]/[0.3] dark:from-bg-secondary/[0.1] dark:to-orange-500/[0] shadow-lg">

      <div className="container p-[4%] flex justify-center">
        <div className="mx-auto md:mx-none md:mb-12">
          <h2 className="bg-clip-text  text-transparent bg-gradient-to-r from-pink-900 to-violet-700 dark:text-primary2 font-title text-4xl md:text-6xl text-center md:text-left font-bold ">frequently asked questions</h2>
          <p className="text-center md:text-left text-sm font-medium py-4 text-secondary dark:text-primary2"> Cant Find the answer you looking for ? Reach out to our support team by sending us an Email And we will get back to you as soon as we can</p>
        </div>
        <div className="md:flex  md:mt-15 md:justify-between py-4 md:py-8">

          <div><FaqCreator faqs={faqData} /></div>
        </div>
      </div>

    </section>
  );
}

export default Faq;
