import React from 'react'
type HomeProps ={}
const Home:React.FC<HomeProps> = () => {
    return (
        <div className='flex w-full max-w-[1440px] flex-col items-center self-center bg-[#0A0B0D] px-8 p-y-12  lg:flex-row lg:justify-between'>
            <div className='mb-8 flex flex-col space-y-8'>
                <h1>Bridge your assets securly with Base</h1>
                <h4>Bridge UI is live for testnet only</h4>
            </div>
          
            <div className='inline-block p-4 text-black bg-white animate-pulse  cursor-pointer border rounded-lg shadow-md shadow-cyan-500  hover:brightness-125'>
                <img src='/images/s.png' alt='' className='transition origin-bottom-right hover:rotate-45'/>
                <h1 className='text-2xl'>Hello</h1>
                <p className='mb-4'>This is NFT</p>
                <button className='rounded p-2 text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Buy Now</button>
            </div>
        </div>
    )
}

export default Home
