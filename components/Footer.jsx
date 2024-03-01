import React from 'react'
import { PiCopyrightBold } from "react-icons/pi";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <div className='px-10 flex items-center gap-2'>
      <PiCopyrightBold size={20} />
      <span className='font-mono font-light'>Min Han Kyaw {currentYear}.</span>
    </div>
  )
}

export default Footer