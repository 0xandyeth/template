import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';
import Header from '../components/header/Header';
import Sidebar from '../components/sidebar/Sidebar';
import HomeLayout from '../components/home';

const DynamicHome = dynamic(() => import('../components/home/Home'), {
  loading: () => <p>Loading...</p>,
});
const Home: NextPage = () => {
  return (
    <div className='h-screen bg-[#1C1E22] overflow-y-auto'>
      <Head>
        <title>BC.Game:Crypto Casino Game</title>
      </Head>
      <Header />
      <Sidebar />
      <HomeLayout/>
    </div>
  );
};

export default Home;
