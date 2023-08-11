import React, { useState, useReducer } from 'react';
import { BsArrowLeftShort} from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillEnvironment, AiFillGift} from 'react-icons/ai';
import {MdSportsBasketball,MdCasino} from 'react-icons/md';
import {GiTicket} from 'react-icons/gi';
import { HiMenu } from 'react-icons/hi';
import { keys } from '../../utils/key-list';
import useStorage from '../../hooks/useStorage';
import { toggleSidebar,spinModal } from '../../store/actions';
const Sidebar = () => {
  const open = useSelector((state: any) => state.sidebar.isSidebarOpen);
  const dispatch = useDispatch();
  const { setValue } = useStorage();
  const handleClickMenuIcon = (open: boolean) => {
    dispatch(toggleSidebar());
  };
  const handleClickSpin=()=>{
    dispatch(spinModal());
  }
  return (
    <div className='absolute left-0 top-0 shadow-md z-[1002]'>
      <div
        className={`bg-[#1C1E22] h-screen p-5 pt-8 ${
          open ? 'w-72' : 'w-20'
        } duration-300 relative z-40`}
      >
        <div className='inline-flex space-x-4'>
          <HiMenu
            className='bg-dark-purple text-gray-300 text-3xl cursor-pointer'
            onClick={() => handleClickMenuIcon(!open)}
          />
         <a href='/'>
         <img
            src='/images/logo.png'
            className={`w-[140px] h-[32px] ${!open && 'hidden'}`}
          />
         </a>
        </div>

        <div
          className={`flex itmes-center rounded-md bg-blu mt-6 ${
            !open ? 'px-4' : 'px-2.5'
          } py-2`}
        ></div>
        <div className={`p-2 ${open && 'bg-[#17191B] rounded-sm'}`}>
          <div
            className={`text-gray-300 flex items-center  rounded-sm space-x-2 cursor-pointer ${
              open && 'bg-dark-purple hover:bg-[#2D3035] p-2'
            }`}
          >
            <span
              className={`text-2xl block float-left ${
                !open && 'hover:bg-[#2D3035] p-2'
              }`}
            >
              <AiFillGift />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && 'hidden'
              }`}
            >
              Bonus
            </span>
          </div>
          <div className={`flex flex-row items-center justify-between pt-2`}>
            <div
              className={`flex flex-row items-center cursor-pointer ${
                open &&
                'p-4 h-[42px] bg-gradient-26 from-[rgb(109,43,255,.480402)] from-1.86% via-[rgb(109,43,255,.04)] from-85.25%  to-[rgb(216,216,216,.05)] from-85.25%'
              }`}
            >
              <img src='/images/quests.png' className='w-10' />
              <span
                className={`text-white text-sm font-normal ${
                  !open && 'scale-0'
                }`}
              >
                QUEST
              </span>
            </div>
            <div
              className={`flex-row flex space-x-3 items-center p-4 h-[42px] bg-gradient-19 from-[rgb(175,13,132,.511772)] from-(-6.45%) via-[rgb(175,13,132,.04)] from-78.77% to-[rgb(216,216,216,.05)] cursor-pointer ${
                !open && 'hidden'
              }`}
              onClick={()=>handleClickSpin()}
            >
              <div className='item-center flex relative '>
                <img
                  src='https://bcgame.top/assets/pointer.fe72597d.png'
                  className='w-[18px] h-[32px] z-10  absolute -top-2 left-[6px]'
                />
                <img
                  src='https://bcgame.top/assets/turntable.b21b0d0a.png'
                  className='w-8 h-8 animate-spin duration-500'
                />
              </div>
              <span className='text-sm text-white font-normal'>SPIN</span>
            </div>
          </div>
        </div>
        <div className='mt-4 p-2'>
          <div
            className={`text-gray-300 flex items-center mt-1 rounded-sm space-x-2 cursor-pointer ${
              open && 'bg-dark-purple hover:bg-[#2D3035] p-2'
            }`}
          >
            <span
              className={`text-2xl block float-left ${
                !open && 'hover:bg-[#2D3035] p-2'
              }`}
            >
              <MdCasino />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && 'hidden'
              }`}
            >
              Casino
            </span>
          </div>
          <div
            className={`text-gray-300 flex items-center mt-1 rounded-sm space-x-2 cursor-pointer ${
              open && 'bg-dark-purple hover:bg-[#2D3035] p-2'
            }`}
          >
            <span
              className={`text-2xl block float-left ${
                !open && 'hover:bg-[#2D3035] p-2'
              }`}
            >
              <MdSportsBasketball />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && 'hidden'
              }`}
            >
              Sports
            </span>
          </div>
          <div
            className={`text-gray-300 flex items-center mt-1 rounded-sm space-x-2 cursor-pointer ${
              open && 'bg-dark-purple hover:bg-[#2D3035] p-2'
            }`}
          >
            <span
              className={`text-2xl block float-left ${
                !open && 'hover:bg-[#2D3035] p-2'
              }`}
            >
              <GiTicket />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && 'hidden'
              }`}
            >
              Lottery
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
