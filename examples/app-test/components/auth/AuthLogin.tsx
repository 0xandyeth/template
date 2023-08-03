import React, { useCallback } from 'react';

type AuthLoginProps = {};
const AuthLogin: React.FC<AuthLoginProps> = () => {
  const handleSubmit = useCallback(async() => {
    try{
        const respons = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        const data = await respons.json();
        const recipe =data.meals[0];
        console.log(recipe);
    }catch(error){
        console.error('Error fetching recipe',error);
    }

  },[]);
  console.log(handleSubmit);
  return (
    <div>
      <figure className='md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800'>
        <img
          className='w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto'
          src='/images/s.png'
          width={384}
          height={512}
        />
        <div className='pt-6 md:p-8 text-center md:text-left space-y-4'>
          <blockquote>
            <div >
            <p className='truncat text-lg font-medium underline decoration-green-400 decoration-wavy decoration-1 underline-offset-8'>
              "Tailwind Css is the only framework that I have seen scale on
              large teams. It's easy to customize,adpats to any design ,and the
              build size is tiny.Tailwind Css is the only framework that I have seen scale on
              large teams. It's easy to customize,adpats to any design ,and the
              build size is tiny."
            </p>
            </div>
          
          </blockquote>
          <figcaption className='font-medium'>
            <div className='text-sky-500 dark:text-sky-400'>Sarah Dayan</div>
            <div className='text-slate-700 dark:text-slate-500'>
              Staff Engineer, Algolia
            </div>
            <button
              className='btn-blue'
              onClick={handleSubmit}
            >
              Login
            </button>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default AuthLogin;
