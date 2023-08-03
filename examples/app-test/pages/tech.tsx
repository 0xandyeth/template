import { NextPage } from 'next';
import React from 'react';
import Header from '../components/header/Header';
import Head from 'next/head';

const TechPage: NextPage = () => {
  return (
    <div className='max-w-screen flex min-h-screen bg-[#0A0B0D] flex-col items-center'>
      <Head>
        <title>My Victory</title>
      </Head>
      <Header />
    </div>
  );
};

export default TechPage;
