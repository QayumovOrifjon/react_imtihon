import React from 'react'
import ColorSlider from './Slider'
import img from '../../assets/discount.svg'

const Categories = () => {
  return (
    <div>
        <div className='w-[310px] px-[18px] py-[14px] bg-[#FAFAFA]'>
            <h1 className='text-[#3D3D3D] text-[18px] not-italic font-bold leading-[16px]'>Categories</h1>
          <div className='px-[12px] py-[18px] flex flex-col gap-y-2'>
            <div className='flex justify-between text-[#3D3D3D] text-[15px] font-light leading-[40px] hover:text-[#46A358] hover:font-bold hover:leading-[40px] '>
                <p>House Plants</p><p>(33)</p> 
            </div>
            <div className='flex justify-between text-[#3D3D3D] text-[15px] font-light leading-[40px] hover:text-[#46A358] hover:font-bold hover:leading-[40px] '>
                <p>Potter Plants</p><p>(12)</p> 
            </div>
            <div className='flex justify-between text-[#3D3D3D] text-[15px] font-light leading-[40px] hover:text-[#46A358] hover:font-bold hover:leading-[40px] '>
                <p>Seeds</p><p>(65)</p> 
            </div>
            <div className='flex justify-between text-[#3D3D3D] text-[15px] font-light leading-[40px] hover:text-[#46A358] hover:font-bold hover:leading-[40px] '>
                <p>Small Plants</p><p>(39)</p> 
            </div>
            <div className='flex justify-between text-[#3D3D3D] text-[15px] font-light leading-[40px] hover:text-[#46A358] hover:font-bold hover:leading-[40px] '>
                <p>Big Plants</p><p>(27)</p> 
            </div>
            <div className='flex justify-between text-[#3D3D3D] text-[15px] font-light leading-[40px] hover:text-[#46A358] hover:font-bold hover:leading-[40px] '>
                <p>Succulents</p><p>(17)</p> 
            </div>
            <div className='flex justify-between text-[#3D3D3D] text-[15px] font-light leading-[40px] hover:text-[#46A358] hover:font-bold hover:leading-[40px] '>
                <p>Terrariums</p><p>(19)</p> 
            </div>
            <div className='flex justify-between text-[#3D3D3D] text-[15px] font-light leading-[40px] hover:text-[#46A358] hover:font-bold hover:leading-[40px] '>
                <p>Gardening</p><p>(13)</p> 
            </div>
            <div className='flex justify-between text-[#3D3D3D] text-[15px] font-light leading-[40px] hover:text-[#46A358] hover:font-bold hover:leading-[40px] '>
                <p>Accessories</p><p>(18)</p> 
            </div>
          </div>
          <div>
           <h1>Price Range</h1>
            <ColorSlider/>
            <p className="text-[18px]">Price:  <span className="text-green-500 " >$39 - $1230</span></p>

<p> <span className="bg-[--primary]  rounded-md text-white text-[18px] py-2 px-7 hover:opacity-70 " >FIlter</span></p>
<div >
                <p className=" text-[20px] font-bold mb-[20px] ">Categories</p>
                <ul className="pl-[12px] flex flex-col gap-[20px] tex-[--second] ">
                    <li
                        className={`flex cursor-pointer justify-between text-[18px] items-center`}
                    >
                        <span>Small</span>
                        <span>(33)</span>
                    </li>
                    <li
                        className={`flex cursor-pointer justify-between text-[18px] items-center`}
                    >
                        <span>Medium</span>
                        <span>(12)</span>
                    </li>
                    <li
                        className={`flex cursor-pointer justify-between text-[18px] items-center`}
                    >
                        <span>Large</span>
                        <span>(33)</span>
                    </li>
                </ul>
            </div>
            <div className="discount w-full  max-h-[470px] h-full" >
            <img src={img} alt="" />
        </div>
          </div>
        </div>
    </div>
  )
}

export default Categories
