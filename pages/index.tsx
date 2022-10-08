import type { NextPage } from 'next'
import Head from 'next/head'
import Appbar from '../components/Appbar'
import Banner from '../components/Banner'

const Home: NextPage = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Head>
        <title>Bloggr</title>
        <link rel="icon" href="/icon.png" />
      </Head>

    <Appbar />
    <Banner />
     Hello World, this is bloggr
    </div>
  )
}

export default Home
