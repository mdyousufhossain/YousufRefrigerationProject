import { Ac, Repire, Parts } from './Avatar';
import Pran from '../public/Pran_Trust_Yousuf_Refrigeration.png';
import Samsung from '../public/Samsung_Trust_Yousuf_Refrigeration.png';
import RFL from '../public/RFL_Trust_Yousuf_Refrigeration.png';
import TheDailyStar from '../public/The_Daily_Star_Trust_Yousuf_Refrigeration.png';
import GrameenPhone from '../public/grameenphone_Yousuf_Refrigeration.png';

export const menu = [
  {
    id: 1,
    titile: 'Home',
    icon: null,
    link: '/',
  },
  {
    id: 2,
    titile: 'Product',
    icon: null,
    link: '/product',
  },
  {
    id: 3,
    titile: 'Service',
    icon: null,
    link: '/service',
  },
  {
    id: 4,
    titile: 'Contract',
    icon: null,
    link: '/contract',
  },
];

export const productPrompt = [
  {
    id: 1,
    title: "Air Conditionar Part's",
    src: '',
  },
  {
    id: 2,
    title: "Fridge Part's",
    src: '',
  },
  {
    id: 3,
    titile: "AC/Fridge Repire Service's",
    src: '',
  },
];

export const heroSection = {
  titile: '20 years of experience',
  details: 'For dacads Yousuf refrigeration have been a trusted choice for reliability and safety in Air-conditioning, heating parts and service. ',
};

export const Services = [
  {
    id: 1,
    SVG: <Ac
      style="fill-secondary dark:fill-primary"
      width={80}
      height={80}
    />,
    title: 'Buy AC With Low Cost',
    description: "Looking for an air conditioning unit that won't break the bank? Look no further! Our AC units are now available at an affordable price.Buy your AC today and enjoy a cool and comfortable summer!",
  },
  {
    id: 2,
    SVG: <Repire
      style="fill-secondary dark:fill-primary"
      width={80}
      height={80}
    />,
    title: 'Get Top & Quick Service ',
    description: "Is your AC or fridge in need of some TLC? Our expert technicians are here to help! From routine maintenance to emergency repairs, we've got you covered.We pride ourselves on providing top-notch service at an affordable price",
  },
  {
    id: 3,
    SVG: <Parts
      style="fill-secondary dark:fill-primary"
      width={80}
      height={80}
    />,
    title: 'Original Product',
    description: 'Are you tired of being duped by fake products? Look no further! Our products are guaranteed to be 100% original, so you can shop with confidence. We believe in the quality of our products and stand behind them with our guarantee.',
  },
];

export const faqData = [
  {
    question: 'Why do you belive earth is flat ?',
    answer: 'Next.js is a React-based web framework that enables server-side rendering and other performance optimizations.',
  },
  {
    question: 'Why do you think its right ?',
    answer: 'You can get started with Next.js by creating a new project using the `create-next-app` command, which sets up a new project with all the necessary dependencies and configuration files.',
  },
  // add more items here
];

export const CarouselItems = [
  { id: 1,
    src: null,
    title: 'Daily Start',
  },
  { id: 2,
    src: Pran,
    title: 'Pran',
  },
  { id: 3,
    src: RFL,
    title: 'RFL',
  },
  { id: 4,
    src: Samsung,
    title: 'Samsung',
  },
  { id: 5,
    src: GrameenPhone,
    title: 'Grameen Phone',
  },
  { id: 6,
    src: null,
    title: 'Cool Point Engineering',
  },
  { id: 7,
    src: null,
    title: 'Seven Star Engineering',
  },
  { id: 8,
    src: null,
    title: 'Three Star Engineering',
  },
  { id: 9,
    src: null,
    title: 'Dhaka Engineering',
  },
  { id: 10,
    src: null,
    title: 'M.A Traders & Engineering',
  },
  { id: 11,
    src: null,
    title: 'Quality Engineering',
  },
  { id: 12,
    src: null,
    title: 'Delco Engineering',
  },

];
