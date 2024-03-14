import React from 'react'
import { Button } from "@/components/ui/button"

export function Loadmore() {
  return true
}

const page = () => {
  return (
    <div className='flex justify-center gap-5 flex-row px-36 my-5 h-full w-full'>
    <div className='bg-purple-400 h-[100svh] w-[25svh] rounded-tl-lg text-center '>Filters</div>
    <div className='bg-purple-400 h-full w-[65svh] text-center flex flex-col gap-5 items-center'><span>property listing</span>
      <div className='max-w-[90%] h-[30svh] bg-purple-500 rounded-lg flex items-center gap-2 p-4'>
        <img src="/house.svg" alt="" className='h-full w-[20svw] ' /> 
          <div className='flex flex-col gap-8 h-full w-full'>
          <div className='flex flex-col'>
          <span className='text-2xl'>$22L-44L</span>
          <span className='text-xs'>view EMI options</span>
          </div>
          <div className='flex flex-col items-end'>
          <span className='text-xl'>1080sq.ft</span>
          <span>3 BHK</span>
          <span>3.0k per sq.ft</span>
          </div>
          </div>
      </div>
      <div className='max-w-[90%] h-[30svh] bg-purple-500 rounded-lg flex items-center gap-2 p-4'>
        <img src="/house.svg" alt="" className='h-full w-[20svw] ' /> 
          <div className='flex flex-col gap-8 h-full w-full'>
          <div className='flex flex-col'>
          <span className='text-2xl'>$22L-44L</span>
          <span className='text-xs'>view EMI options</span>
          </div>
          <div className='flex flex-col items-end'>
          <span className='text-xl'>1080sq.ft</span>
          <span>3 BHK</span>
          <span>3.0k per sq.ft</span>
          </div>
          </div>
      </div>
      <div className='max-w-[90%] h-[30svh] bg-purple-500 rounded-lg flex items-center gap-2 p-4'>
        <img src="/house.svg" alt="" className='h-full w-[20svw] ' /> 
          <div className='flex flex-col gap-8 h-full w-full'>
          <div className='flex flex-col'>
          <span className='text-2xl'>$22L-44L</span>
          <span className='text-xs'>view EMI options</span>
          </div>
          <div className='flex flex-col items-end'>
          <span className='text-xl'>1080sq.ft</span>
          <span>3 BHK</span>
          <span>3.0k per sq.ft</span>
          </div>
          </div>
      </div>
      
      <div className='max-w-[90%] h-[30svh] bg-purple-500 rounded-lg flex items-center gap-2 p-4'>
        <img src="/house.svg" alt="" className='h-full w-[20svw] ' /> 
          <div className='flex flex-col gap-8 h-full w-full'>
          <div className='flex flex-col'>
          <span className='text-2xl'>$22L-44L</span>
          <span className='text-xs'>view EMI options</span>
          </div>
          <div className='flex flex-col items-end'>
          <span className='text-xl'>1080sq.ft</span>
          <span>3 BHK</span>
          <span>3.0k per sq.ft</span>
          </div>
          </div>
      </div>
      <Button>Load More</Button>
    </div>
    <div className='bg-purple-400 h-[40svh] w-[25svh] rounded-tr-lg text-center'>More Info</div>
    </div>
  )

}

export default page