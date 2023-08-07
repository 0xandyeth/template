import React from 'react'

const HomeSkye = () => {
    return (
        <div className='flex w-full max-w-[1440px] m-auto flex-col-reverse items-center self-center lg:flex-row lg:justify-between relative'>
        <div className='mt-8'>
          <div className='p-8'>
            <div className='text-2xl font-medium text-white'>
              {' '}
              SIGN UP & <span className='text-green-500'>GET</span> REWARD
            </div>
            <div className='text-7xl font-bold text-white'>UP TO <span className='bg-gradient-to-r from-[#B5E916] to-[#43C111] inline-block text-transparent bg-clip-text'>KR 200,000</span></div>
            <button className='mt-4 rounded-sm text-white btn-gradient-m w-[112px] h-[44px]'>
              Sign Up Now
            </button>
          </div>
        </div>
        <div className=''>
          <div className='flex flex-auto'>
            <img
              src='/images/messi.png'
              className='w-[650px] brightness-500 lg:w-[800px] lg:absolute lg:top-0 lg:right-0'
            />
          </div>
        </div>
      </div>
    )
}

export default HomeSkye
