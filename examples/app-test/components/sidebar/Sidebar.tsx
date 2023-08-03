import React, { useState } from 'react';
import { BsArrowLeftShort } from 'react-icons/bs';
import { AiFillEnvironment, AiFillGift } from 'react-icons/ai';
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className='absolute top-0 shadow-md'>
      <div
        className={`bg-[#1C1E22] h-screen p-5 pt-8 ${
          open ? 'w-72' : 'w-20'
        } duration-300 relative z-40`}
      >
        <BsArrowLeftShort
          className={`bg-white text-dark-purple text-3xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer ${
            !open && 'rotate-180'
          }`}
          onClick={() => setOpen(!open)}
        />

        <div className='inline-flex'>
          <AiFillEnvironment
            className={`bg-amber-300 text-4xl rounded coursor-pointer block float-left duration-500 ${
              open && 'rotate-[360deg]'
            }`}
          />
          <h1
            className={`text-white origin-left font-semibold text-3xl ml-4 cursor-pointer duration-300 ${
              !open && 'scale-0'
            }`}
          >
            BC.GAME
          </h1>
        </div>

        <div
          className={`flex itmes-center rounded-md bg-blu mt-6 ${
            !open ? 'px-4' : 'px-2.5'
          } py-2`}
        ></div>
        <div className={`p-2 ${open && 'bg-[#17191B] rounded-sm'}`}>
          <div className={`text-gray-300 flex items-center  rounded-sm space-x-2 cursor-pointer ${open && 'bg-dark-purple hover:bg-[#2D3035] p-2'}`}>
            <span className={`text-2xl block float-left ${!open && 'hover:bg-[#2D3035] p-2'}`}>
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
          <div className={`flex flex-row items-center justify-between pt-2 ${!open && 'hidden'}`}>
            <div className='flex flex-row items-center p-4 h-[42px] bg-gradient-26 from-[rgb(109,43,255,.480402)] from-1.86% via-[rgb(109,43,255,.04)] from-85.25%  to-[rgb(216,216,216,.05)] from-85.25%'>
              <img src='/images/quests.png' className='w-10'/>
              <span className='text-white text-sm font-normal'>QUEST</span>
            </div>
            <div className=' flex-row flex space-x-3 items-center p-4 h-[42px] bg-gradient-19 from-[rgb(175,13,132,.511772)] from-(-6.45%) via-[rgb(175,13,132,.04)] from-78.77% to-[rgb(216,216,216,.05)]'>
             <div className='item-center flex relative'>
             <img src='https://bcgame.top/assets/pointer.fe72597d.png' className='w-[18px] h-[32px] z-10  absolute -top-2 left-[6px]'/>
             <img src='https://bcgame.top/assets/turntable.b21b0d0a.png' className='w-8 h-8 animate-spin duration-500'/>
             </div>
             <span className='text-sm text-white font-normal'>SPIN</span> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
