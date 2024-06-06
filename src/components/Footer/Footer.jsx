import React from 'react'
import img_1 from '../../assets/foot_img-1.svg'
import Group from '../../assets/Group.svg'
import Group_2 from '../../assets/Group_2.svg'
import FooterCen from './FooterCen'
import FooterBott from './FooterBott'

const Footer = () => {
  return (
    <>
      <div className='container mx-auto bg-[#FBFBFB] p-[25px] '>
        <div className='grid grid-cols-[1fr,1fr,1fr,2fr] gap-[27px] justify-items-center'>
          <div className='flex justify-between items-center w-[240px]'>
            <img src={img_1} alt="" className='100%' />
            <span className='block w-[1.5px] h-[187px] bg-[rgba(70,_163,_88,_0.10)]'></span>
          </div>

          <div className='flex justify-between items-center w-[240px]'>
            <div className=''>
              <img src={Group} alt="" className='h-[85px]' />
              <h1 className='text-[#3D3D3D] text-[17px] font-bold leading-[16px] mt-[14px]'>Garden Care</h1>
              <p className='text-[#727272] text-[14px] font-light leading-[22px] w-[204px] mt-[9px]'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
            </div>
            <span className='block w-[1.5px] h-[187px] bg-[rgba(70,_163,_88,_0.10)]'></span>
          </div>

          <div className='w-[201px]'>
            <img src={Group_2} alt="" />
            <h1 className='text-[#3D3D3D] text-[17px] font-bold leading-[16px] mt-[15px]'>Watering Graden</h1>
            <p className='text-[#727272] text-[14px] font-light leading-[22px] w-[204px] mt-[9px]'>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </div>
          <div className='w-[354px]'>
            <h1 className='text-[#3D3D3D] w-[100%] mb-[18px] text-[18px] font-bold leading-[16px]'>Would you like to join newsletters?</h1>
            <div>
              <div className='flex mb-[20px]'>
                <input type="text" placeholder='enter your email address...' className='p-3 rounded-l-md bg-[#FFF] [box-shadow:0px_0px_20px_0px_rgba(0,_0,_0,_0.06)] outline-none pl-[11px] pr-[86px] text-[#ACACAC] text-[14px] not-italic font-normal leading-[16px]' />
                <button className='px-[25px] py-[12px] bg-[#46A358] text-[#FFF] text-[18px] not-italic font-bold leading-[16px] rounded-r-md'>Join</button>
              </div>
              <p className='text-[#727272] text-[13px]  font-light leading-[22px] w-[354px]'>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours!</p>
            </div>
          </div>
        </div>
      </div>

      <FooterCen />
      <FooterBott/>
    </>
  )
}

export default Footer
