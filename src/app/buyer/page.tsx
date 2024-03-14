import React from 'react'


const page = () => {
  return (
    <div className='flex justify-center gap-5 flex-row px-36 my-5 h-full w-full'>
    <div className='bg-purple-400 h-[100svh] w-[25svh] rounded-tl-lg text-center '>Filters</div>
    <div className='bg-purple-400 h-[100svh] w-[65svh] text-center flex flex-col gap-5 items-center'><span>property listing</span>
      <div className='w-[35svw] h-[35svh] bg-purple-500 rounded-lg flex items-center p-4'>
        <img src="/house.svg" alt="" className='h-full w-[25svw] ' /> 
          <div className='flex flex-col items-start h-full mx-2'>
          <span className='text-xl'>$22L-44L</span>
          <span className='text- '>view EMI options</span>
          <span>1080sq.ft</span>
          <span>3 BHK</span>
          <span>3.0k per sq.ft</span>
          <img src="/nextbutton.svg" alt="" className='h-[3svh] w-[3svw]'/>
          </div>
      </div>
    </div>
    <div className='bg-purple-400 h-[40svh] w-[25svh] rounded-tr-lg text-center'>More Info</div>
    </div>
  )
}

export default page