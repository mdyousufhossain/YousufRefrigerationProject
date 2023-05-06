import { useState, Suspense } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { fetchProducts } from '../api/api';
import Product from '../../component/Product/Product';
import NavBar from '@/component/Navbar';
import ThemeIcon from '@/component/darkmodeUi';
import Footer from '@/component/Footer/Footer';

export async function getStaticProps() {
  const data = await fetchProducts();
  return {
    props: {
      data,
    },
  };
}

export function removeQuotes(str) {
  return str.replace(/["']/g, '');
}

function MyPage({ data }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const router = useRouter();

  const filteredData = data.filter((product) => {
    const title = product.title.toLowerCase();
    const categoryMatch = category === 'All' || product.category === category;

    return title.includes(searchTerm.toLowerCase()) && categoryMatch;
  });

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const getPageTitle = () => {
    switch (router.pathname) {
      case '/':
        return 'Home | Yousuf Refrigeration';
      case '/product':
        return 'Product | Yousuf Refrigeration';
      case '/service':
        return 'Service | Yousuf Refrigeration';
      // add more cases for each page of your website
      default:
        return 'Home | Yousuf Refrigeration';
    }
  };

  return (
    <>
      <Head>
        <title>{getPageTitle()}</title>
        <meta name="description" content="Refrigarent equipment and parts ac shop ,best equipment in bangladesh " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section className="section_L bg-primary dark:bg-secondary">
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
          <div className="md:flex md:justify-between hidden md:block border-b-2 border-primary2 py-6 mb-6 dark:border-secondary2">
            {/* logo */}
            <Link href="/">
              <h3 className="text-gray-900 dark:text-Title_Dark font-medium font-title text-xl">
                Yousuf refrigeration
              </h3>
            </Link>

            <NavBar />
          </div>

          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex-1 md:w-2/5">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search for products"
                  value={searchTerm}
                  onChange={handleSearch}
                  className="py-2 px-4 w-full mb-4 rounded-md border-primary2 dark:border-secondary2"
                />
                <select
                  className="py-2 mx-2 px-4 w-[100px] mb-4 rounded-md border-primary2 dark:border-secondary2"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                >
                  <option value="All">All</option>
                  {Array.from(new Set(data.map((product) => product.category))).map((category) => (
                    <option key={category} value={category}>
                      {removeQuotes(category)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex-1">
              <Suspense fallback={<div> Please Wait... </div>}>
                <Product data={filteredData} />
              </Suspense>
            </div>
          </div>

          <div className="bg-slate-700 dark:bg-slate-900 w-[60px] h-[60px] rounded-full fixed right-5 bottom-5 z-10 flex items-center justify-center cursor-pointer">
            <ThemeIcon />
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default MyPage;
