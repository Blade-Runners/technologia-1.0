import React from 'react';

const HeroPage = () => {
  return (
    <div className="relative h-screen w-full bg-black">
      <img
        src="/sea.png"
        alt="Sea background"
        className="absolute w-112.5 bottom-0 right-36"
      /> 

      <div className='text-white font-edosz flex justify-center mr-72 '>
        <h1 className='text-[200px] pr-44 pt-64'>Auditron</h1>
      </div>
      <div className='text-white w-full '>
        <h1 className='ml-90 text-5xl'>PREBOOT SECURITY SYSTEM</h1>
      </div>
    </div>
  );
};

export default HeroPage;