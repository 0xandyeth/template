import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';

const DynamicHome = dynamic(()=> import('../components/home/Home'),{
  loading:()=><p>Loading...</p>
})
const Home: NextPage = () => {
  return (
    <div className='bg-[#17191B] h-screen'>
      {/* <h1 className='bg-yellow-600 border-4 border-green-600 mb-1'>Hello World!</h1>
      //className='max-w-screen flex min-h-screen  flex-col items-center'
      <h1 className='text-xs sm:text-base md:text-lg lg:text-3xl'>Hello World!</h1> */}
      <Head>
        <title>My Victory</title>
      </Head>
      <Header/>
      <Sidebar/>
      {/* <DynamicHome/>
       */}
       <div>Homepage</div>
    </div>
  );
};

export default Home;
