import Head from 'next/head'
import Hero from '../component/Hero/Hero'



export default function Home() {
  return (
    <>
      <Head>
        <title>Yousuf Refrigeration</title>
        <meta name="description" content="Refrigarent equipment and parts ac shop ,best equipment in bangladesh " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
      </main>
    </>
  )
}
