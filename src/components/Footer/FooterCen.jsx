import React from 'react'
import Logo_fot from '../../assets/Logo.svg'
import Location from '../../assets/Location.svg'
import Message from '../../assets/Message.svg'
import Calling from '../../assets/Calling.svg'

const FooterCen = () => {
  return (
    <>
    
        <div className='grid grid-cols-4 bg-[#ECF6EE] justify-items-between items-center pl-[23px] pr-[127px] py-[27px] border-y border-[#D7E9DA]  text-[#3D3D3D] text-[14px] font-light leading-[22px]'>
          <img src={Logo_fot} alt="Logo" />
          <div className='flex gap-3 items-center'>
            <img src={Location} alt="Location" />
            <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
          </div>
          <div className='flex gap-3 items-center'>
            <img src={Message} alt="Message" />
            <a href="mailto:contact@greenshop.com">contact@greenshop.com</a>
          </div>
          <div className='flex gap-3 items-center'>
            <img src={Calling} alt="Calling" />
            <a href="tel:+8801911717490">+88 01911 717 490</a>
          </div>
        </div>
     
    </>
  )
}

export default FooterCen
