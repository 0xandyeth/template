import React from 'react';
import { BiSolidWallet,BiMoneyWithdraw } from 'react-icons/bi';
import {FaPiggyBank} from 'react-icons/fa';
import {BsCashCoin} from 'react-icons/bs';
import {MdOutlineSwapCalls} from 'react-icons/md';
import {PiVault} from 'react-icons/pi';
import {RiNftFill} from 'react-icons/ri';
import {AiOutlineTransaction} from 'react-icons/ai'
const BalanceContainer = () => {
  return (
    <div className='flex w-full max-w-[1440px] m-auto flex-col space-x-4 lg:flex-row lg:relative'>
      <div className='flex-[20%]'>
        <span className='text-xl font-medium text-white'>WALLET</span>
        <div className='p-3 mt-3 flex-col space-y-4 bg-dark-purple rounded-sm'>
          <div className='p-2 space-x-3 rounded-sm hover:bg-[#1C1E22]'>
            <span className='text-2xl block float-left text-gray-300'>
              <BiSolidWallet />
            </span>
            <span className='text-white'>Balance</span>
          </div>
          <div className='p-2 space-x-3 rounded-sm hover:bg-[#1C1E22]'>
            <span className='text-2xl block float-left text-gray-300'>
              <FaPiggyBank />
            </span>
            <span className='text-white'>Deposit</span>
          </div>
          <div className='p-2  space-x-3 rounded-sm hover:bg-[#1C1E22]'>
            <span className='text-2xl block float-left text-gray-300'>
              <BiMoneyWithdraw />
            </span>
            <span className='text-white'>Withdraw</span>
          </div>
          <div className='p-2 space-x-3 rounded-sm hover:bg-[#1C1E22]'>
            <span className='text-2xl block float-left text-gray-300'>
              <BsCashCoin />
            </span>
            <span className='text-white'>Buy Crypto</span>
          </div>
          <div className='p-2 space-x-3 rounded-sm hover:bg-[#1C1E22]'>
            <span className='text-2xl block float-left text-gray-300'>
              <MdOutlineSwapCalls />
            </span>
            <span className='text-white'>BC Swap</span>
          </div>
          <div className='p-2 space-x-3 rounded-sm hover:bg-[#1C1E22]'>
            <span className='text-2xl block float-left text-gray-300'>
              <PiVault />
            </span>
            <span className='text-white'>Vault Pro</span>
          </div>
          <div className='p-2 space-x-3 rounded-sm hover:bg-[#1C1E22]'>
            <span className='text-2xl block float-left text-gray-300'>
              <RiNftFill />
            </span>
            <span className='text-white'>NFT</span>
          </div>
          <div className='p-2 space-x-3 rounded-sm hover:bg-[#1C1E22]'>
            <span className='text-2xl block float-left text-gray-300'>
              <AiOutlineTransaction />
            </span>
            <span className='text-white'>Transaction</span>
          </div>
        </div>
      </div>
      {/** toptal balance */}
      <div className='flex-[80%] mt-11 bg-dark-purple rounded-sm p-4'>
        <div className='flex items-center justify-between self-center'>
          <div className='flex items-center space-x-3'>
            <img
              src='https://bcgame.top/assets/coin.8d5cf053.png'
              className='w-[30px] h-[25.63px]'
              alt=''
            />
            <span className='text-white'>Total Balance</span>
          </div>
          <span className='text-xl text-yellow-400 font-medium'>$ 1000</span>
        </div>
      </div>
      {/** end */}
    </div>
  );
};

export default BalanceContainer;
