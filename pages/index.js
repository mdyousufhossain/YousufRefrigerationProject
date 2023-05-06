import Head from 'next/head';
import { useRouter } from 'next/router';
import Hero from '../component/Hero/Hero';
import Service from '@/component/Service/Service';
import Faq from '@/component/QnA/Faq';
import Direction from '@/component/Direction';
import Footer from '@/component/Footer/Footer';

export default function Home() {
  const router = useRouter();
  const getPageTitle = () => {
    switch (router.pathname) {
      case '/':
        return 'Home | Yousuf Refrigeration';
      case '/product':
        return 'Product | Yousuf Refrigeration';
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <Hero />
        <Service />
        <Faq />
        <Direction />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
