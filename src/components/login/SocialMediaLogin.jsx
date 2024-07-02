import React from 'react'

const SocialMediaLogin = (SocialMediaLinks) => {
  return (
    <a href={SocialMediaLinks.socialiconlinks} target='_blank' className='max-w-[120px] max-h-[48px] w-full py-3 border border-solid border-gray rounded-[36px] flex justify-center'>
        {SocialMediaLinks.icons}
    </a>
  )
}

export default SocialMediaLogin