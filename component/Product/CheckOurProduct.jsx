import Background from '../../public/OurProduct.png';
import Style from '../../styles/Home.module.css';

function CheckOurProduct() {
  return (
    <section
      className="h-[700px] relative"
      style={{
        backgroundImage: `url(${Background.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div>
        <div className={Style.customShapeDividerTop}>
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="dark:fill-secondary fill-primary">
            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" />
          </svg>
        </div>
      </div>

      <div className="w-full h-[100%] bg-gradient-to-t from-[#19A7CE]/[0.7]  to-primary dark:from-[#19A7CE]/[0.3] dark:to-secondary flex justify-center items-center b">

        <button className="btn bg-secondary dark:hover:bg-primary2 text-slate-50 dark:bg-primary dark:text-secondary p-5 px-8"> Try our product</button>
      </div>

    </section>
  );
}

export default CheckOurProduct;
