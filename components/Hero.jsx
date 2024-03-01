import Image from 'next/image'
import React from 'react'
import { ABOUT, CONTACTLIST } from '@/constants'
import ContactCard from './ContactCard'

const Hero = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-gray-300 dark:divide-gray-500">
      <div className=' w-full lg:w-1/2'>
        <div className='flex flex-col items-center justify-center'>
          <Image 
            width={200}
            height={200}
            src={ABOUT.photo}
            alt="photo"
            className="w-32 h-32 object-cover rounded-full"
          />
          <h1 className='text-[#536163] dark:text-teal-500 text-[2.25rem] font-semibold'>{ABOUT.name}</h1>
          <p className='text-[1.5rem] font-medium'>{ABOUT.role}</p>
        </div>
        <p className='text-center my-4 mx-10 text-[1.2rem] tracking-wider leading-relaxed'>
          {ABOUT.description}
        </p>
      </div>

      <div className="w-full p-10 lg:w-1/2">
        <div className='space-y-3'>
          {CONTACTLIST?.length && CONTACTLIST.map((i, index) => (
            <ContactCard key={index} item={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero