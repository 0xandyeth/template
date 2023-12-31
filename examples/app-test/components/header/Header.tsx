import React from 'react';

function Header() {
  return (
    <div className='flex w-full flex-row justify-between self-center bg-dark-purple p-4 z-[1001] shadow-md fixed'>
      <a href='https://base.org'>
        {/* <img src='/vercel.svg' width={100} height={32} className='bg-white p-2 rounded' /> */}
      </a>
      <div className='h-full flex-row items-center space-x-16 lg:flex'>
        <div className='h-full flex-row items-center space-x-16'>
         
        </div>
        <div className='flex-row items-center space-x-8'>
          <a className='cursor-pointer'>
          <span className='text-gray-300'>Sign in</span>
          </a>
          <button className='rounded-sm text-white btn-gradient-h w-[112px] h-[44px]'>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
