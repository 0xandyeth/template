import { NextPage } from 'next'
import Head from 'next/head';
import React from 'react'
import Header from '../../components/header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import BalanceLayout from '../../components/wallet/balance';

const Balance:NextPage = ()=> {
    return (
        <div className='h-screen bg-[#1C1E22] overflow-y-auto'>
        <Head>
          <title>BC.Game:Crypto Casino Game</title>
        </Head>
        <Header />
        <Sidebar />
        <BalanceLayout/>
      </div>
    )
}

export default Balance;
