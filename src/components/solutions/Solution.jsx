import Link from 'next/link'
import React from 'react'
import { LeftArrow } from '../../app/components/common/icon'

const Solution = () => {
  return (
      <div className='bg-vampire-black'>
          <div className='max-w-[1624px] mx-auto px-3'>
              <Link href="/" className='flex gap-3 items-center'>
                  <span><LeftArrow/></span> Back
              </Link>
          </div>
    </div>
  )
}

export default Solution