import React from 'react'
import { GirlsComputer ,Coffee } from './Riveitem'
import {FiHome} from "react-icons/fi"
import { BsPersonFill } from "react-icons/bs"
import { MdWork , MdOutlineCall } from "react-icons/md"
import { FaFacebookF , FaGithub , FaLinkedin , FaTwitter } from "react-icons/fa"


const style ={
  wrapper :`relative text-gray-100 px-8 py-12`,
  form_container:`relative border border-blue-500 backdrop-opacity-4  mt-24 px-8 grid gap-8 sm:grid-cols-1 xs:grid-cols-1 grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-[#2F2F8A] text-white rounded-lg w-[80%] shadow-lg`,
  glass: `flex  h-[80%] glass content-center justify-between w-1/2 p-6  `,
  left_text:`flex flex-col justify-between`,
  h2:`text-4xl lg:text-5xl font-bold leading-tight`,
  head_sec:`mt-8 xs:hidden`,
  form_span:`uppercase text-sm text-white font-bold`,
  form_input:`w-full bg-white-300 text-gray-900 mt-1 p-2 rounded-lg focus:outline-none focus:shadow-outline`,
  form_btn:`uppercase text-sm font-bold tracking-wide bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-100 p-3 rounded-lg w-1/2 focus:outline-none focus:shadow-outline`,
  girl:`absolute top-[-15%] xs:left-[-10%] xs:top-[-10%] sm:top-[-10%] sm:left-[-10px]`,
  li:`flex px-5 xs:px-1 xs:m-1 py-2 m-2 hover:border hover:bg-black-300 rounded cursor-pointer`,
  cf:`absolute h-3 bottom-[200px]`,
  footer_box:`border-t border-blue-500 bg-[#2F2F8A] h-60`,
  footer_textbox:`flex flex-col h-full justify-center`,
  ul:`flex self-center`,
  span:`pt-1 mr-4 xs:mr-2 hover:text-black`,
  icon:`mr-5 border rounded-full p-2`
}


const Footer = () => {
  return (
    <>
    <div class={style.wrapper}>
      
      <div class={style.form_container}>
        <div class={style.left_text}>
          <div>
            <h2 class={style.h2}>Lets talk about everything!</h2>
            <div class={style.head_sec}>
              Hate forms? Send us an <span class="underline">email</span> instead.
            </div>
          </div>
          <div class="mt-8 text-center">
            
          </div>
        </div>
        <div class="">
          <div>
            <span class={style.form_span}>Full Name</span>
            <input class={style.form_input}
              type="text" placeholder="" />
          </div>
          <div class="mt-8">
            <span class={style.form_span}>Email</span>
            <input class={style.form_input}
              type="text" />
          </div>
          <div class="mt-8">
            <span class={style.form_span}>Message</span>
            <textarea
              class={style.form_input}></textarea>
          </div>
          <div class="mt-8">
            <button
              class={style.form_btn}>
              Send Message
            </button>
          </div>
        </div>
      </div>
      <div className={style.girl}>
        <GirlsComputer />
      </div>
      <div className={style.cf}>
        <Coffee />
      </div>
    </div>
    
     <div className={style.footer_box}>
        <div className={style.footer_textbox}>
          <ul className={style.ul}>
            <li className={style.li}><span className={style.span}><FiHome/></span>Home</li>
            <li className={style.li}><span className={style.span}><BsPersonFill/></span>About me</li>
            <li className={style.li}><span className={style.span}><MdWork/></span>Work</li>
            <li className={style.li}><span className={style.span}><MdOutlineCall/></span>Contact</li>
            
          </ul>
          <div className='flex self-center mt-7'>
            <ul className={style.ul}>
              <li className={style.icon}>
                <FaTwitter />
              </li>
              <li className={style.icon}>
                <FaLinkedin />
              </li>
              <li className={style.icon}>
                <FaGithub />
              </li>
              <li className={style.icon}>
                <FaFacebookF />
              </li>
            </ul>
          </div>
        </div>
    </div>
   </>
    
  )
}

export default Footer