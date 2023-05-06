import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { fetchProducts } from '../api/api';
import { removeQuotes } from '.';
import NavBar from '@/component/Navbar';
import ThemeIcon from '@/component/darkmodeUi';
import Style from '@/styles/Home.module.css';
import placeHolder from '@/public/placeholder.webp'
import Footer from '@/component/Footer/Footer';

export async function getStaticPaths() {
  const data = await fetchProducts();
  const paths = data.map((product) => ({
    params: { productId: product.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { productId } = params;
  const data = await fetchProducts();
  const product = data.find((p) => p.id.toString() === productId);
  return { props: { product } };
}

function reduceToTenChars(inputString) {
  if (inputString.length > 10) {
    return inputString.substring(0, 10);
  }
  return inputString;
}

function SingleProduct({ product }) {
  const brands = product.brand;
  const { description } = product;

  const router = useRouter();
  const titleChar = reduceToTenChars(product.title);
  const pid = removeQuotes(titleChar);

  const productTitle = `${pid} | Product`;

  const getPageTitle = () => {
    switch (router.pathname) {
      case '/product/[productId]':
        return productTitle;
      // add more cases for each page of your website
      default:
        return `${pid} | Product`;
    }
  };

  const handlePrevious = () => {
    let previousId = parseInt(product.id) - 1;
    if (previousId < 1) {
      previousId = 26;
    }
    // Navigate to previous product
    router.push(`/product/${previousId}`);
  };

  const handleNext = () => {
    let nextId = parseInt(product.id) + 1;
    if (nextId > 26) {
      nextId = 1;
    }
    // Navigate to next product
    router.push(`/product/${nextId}`);
  };

  return (
    <>
      <Head>
        <title>{getPageTitle()}</title>
        <meta
          name="description"
          content="Refrigarent equipment and parts ac shop ,best equipment in bangladesh "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`section_L bg-primary dark:bg-secondary  ${Style.animatedude}`}>
        <div className="flex justify-between py-4 mb-4 md:hidden border-b-2 border-primary2 dark:border-secondary2">
          {/* logo for mobile */}
          <Link href="/">
            <h3 className="text-gray-900 dark:text-Title_Dark font-medium 22txt font-title text-xl mx-2">
              Yousuf refrigeration
            </h3>
          </Link>
          {/* navbar design for mobile */}
          <NavBar />
        </div>

        <div className="md:container md:mx-auto pb-8 md:pb-10">
          <div className="md:flex md:justify-between hidden md:block  py-6 mb-6 dark:border-secondary2">
            {/* logo */}
            <Link href="/">
              <h3 className="text-gray-900 dark:text-Title_Dark font-medium font-title text-xl">
                Yousuf refrigeration
              </h3>
            </Link>

            <NavBar />
          </div>

          <div className="flex  mx-auto  border-primary2 dark:border-secondary2 ">
            <div className="md:flex-1 flex flex-col px-4 justify-center items-center hidden md:block">
              {/* Previous button */}
              <button
                className="w-12 my-4 h-16 btn bg-gray-200 rounded-full flex justify-center items-center  "
                onClick={handlePrevious}
                disabled={product.id === '10'}
                type="button"
              >
                Prev
              </button>
            </div>
            <div className="w-full">
              <div className="w-full px-4">
                {product.src ? (
                  <div className="w-[255px] h-[200px] md:w-full  md:h-full relative">
                    <Image
                      src={product.src}
                      alt={product.title}
                      fill
                    />
                  </div>
                ) : (
                  <div className=" w-[255px] h-[200px] md:w-full  md:h-full relative">
                    <Image
                      src={placeHolder}
                      alt={product.title}
                      fill
                    />
                  </div>
                )}
              </div>
              {/* text-md my-4 px-2 font-medium mb-2  text-secondary dark:text-primary2 */}
              <div className="w-full md:w-2/6 h-full flex flex-col  md:justify-center px-4">
                <h3 className="text-xl my-4 font-bold mb-2  text-secondary dark:text-primary2">{removeQuotes(product.title)}</h3>
                <div className="flex">
                  <div className="md:flex-1 flex flex-col px-4 justify-between items-center md:hidden block">
                    {/* Previous button */}
                    <button
                      className="w-16 h-16  btn bg-gray-200 rounded-full flex justify-center items-center  "
                      onClick={handlePrevious}
                      disabled={product.id === '10'}
                      type="button"
                    >
                      Prev
                    </button>
                  </div>
                  <div className="md:flex-1 flex flex-col px-4 justify-center items-center md:hidden block">
                    {/* Next button */}
                    <button
                      className="w-16  h-16 btn bg-gray-200 rounded-full flex justify-center items-center "
                      onClick={handleNext}
                      disabled={product.id === '10'}
                      type="button"
                    >
                      Next
                    </button>
                  </div>
                </div>

                <h4 className="text-large my-4 font-bold mb-2  text-secondary dark:text-primary2"> Brand:
                  {brands === null ? (
                    <span>No Brand</span>
                  ) : (
                    brands
                  && brands.map((b, index) => (
                    <span
                      key={index}
                      className="text-md my-4 text-justify font-medium mb-2  text-secondary/70 dark:text-primary2/30"
                    >
                      {`${b.Brand}${index !== brands.length - 1 ? ', ' : ''}`}
                    </span>
                  ))
                  )}
                </h4>
                <h4 className="text-large my-4 px-2 font-bold mb-2  text-secondary dark:text-primary2 ">{description === null ? (
                  <span> No description </span>
                ) : (
                  description
              && description.map((d) => (
                <span
                  key={d}
                  className="text-md my-4 px-2 font-medium mb-2  text-secondary dark:text-primary2"
                >
                  Model: {`${d.Model}, `}
                  <span className="text-md my-4 px-2 font-medium mb-2  text-secondary dark:text-primary2">
                    Details: {`${d.Details}, `}
                  </span>

                </span>
              ))
                )}
                </h4>
              </div>
            </div>
            <div className="md:flex-1 flex flex-col px-4 justify-center items-center hidden md:block">
              {/* Next button */}
              <button
                className="w-12 h-16 my-4 btn bg-gray-200 rounded-full flex justify-center items-center "
                onClick={handleNext}
                disabled={product.id === '10'}
                type="button"
              >
                Next
              </button>
            </div>
          </div>

          <div className="bg-slate-700 dark:bg-slate-900 w-[60px] h-[60px] rounded-full fixed right-5 bottom-5 z-10 flex items-center justify-center cursor-pointer">
            <ThemeIcon />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SingleProduct;
