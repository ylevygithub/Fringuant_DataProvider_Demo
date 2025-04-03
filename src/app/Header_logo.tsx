import React from 'react'
import Image from 'next/image';

function Header_logo() {
  return (
    <div>
      <Image
        src="/fringuant_logo.png" // Path to the image from the "public" folder
        alt="My Image"
        width={100} // Specify the width
        height={200} // Specify the height
        className='logo'
      />
    </div>
  )
}

export default Header_logo