import { PROJECTS } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  return (
    <div className='p-10'>
      <h1 className='text-[1.5rem] font-medium mb-4'>Projects</h1>

      <div className='flex flex-col gap-2'>
        {PROJECTS?.length && PROJECTS.map((i, index) => (
          <div key={index} className='flex flex-col gap-2 text-start'>
            <Link href={i?.link} className='text-[1.2rem] underline underline-offset-2 font-mono'>{i?.name}</Link>
            <p className='tracking-wider leading-relaxed'>{i?.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects