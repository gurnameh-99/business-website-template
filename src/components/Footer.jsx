import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
        <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
          2024 Vinssiarh Pvt Ltd. All Rights Reserved.
        </p>  
        <div className='flex flex-row md:mt-0 mt-6'>
          <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white mr-6'>
            Contact Us at vishu@vinssiarh.com
          </p>
        </div>    
      </div>
    </section>
  )
}

export default Footer
