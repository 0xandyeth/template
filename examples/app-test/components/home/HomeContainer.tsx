import React, { useEffect } from 'react';


const HomeContainer = () => {

  return (
    <div className='flex w-full max-w-[1440px] m-auto mt-8 flex-col-reverse items-center self-center lg:flex-row lg:relative lg:space-x-4'>
      <div className='flex-1 bg-gradient-180 from-[#6621E4] to-[#1C1E22]'>
        <div className='flex items-center h-full flex-col p-3'>
          <img
            src='https://bcgame.top/assets/casino.74471929.png'
            className='w-[481px] h-[252px]'
          />
          <div className='w-full items-start'>
            <span className='text-2xl'>CASINO</span>
           
          </div>
          <button className='rounded-sm text-white text-lg font-medium btn-gradient-m w-full h-[44px]'>Go to Casino</button>
        </div>
      </div>

      <div className='flex-1 bg-gradient-180 from-[#1d823b] to-[#1c1E22]'>
        <div className='flex items-center h-full flex-col p-3'>
          <img
            src='https://bcgame.top/assets/sports.2f749e0a.png'
            className='w-[481px] h-[252px]'
          />
          <div className='w-full items-start'>
            <span className='text-2xl'>SPORTS</span>
           
          </div>
          <button className='rounded-sm text-white text-lg font-medium btn-gradient-h w-full h-[44px]'>Go to Sports</button>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
