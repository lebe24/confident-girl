import React from 'react'
import { Girls  } from './Riveitem'
import cl from '../assets/circle.svg'
import lamp from '../assets/lamp.svg'


const style = {
  wrapper:` h-screen flex xs:flex-col justify-center items-center`,
  box:`relative p-3 `,
  text_box:`absolute top-[35%] font-poppins p-2 right-[5%] w-1/2 text-xs`,
  text:`font-bold py-2 font-poppins text-md`
}

const Main = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.box}>           
                <Girls />          
              <div className={style.text_box}>
                <h1 className={style.text}>About</h1>
                  My name is Sourasith Phomhome. 
                  I’m a UI Designer and a instrutor based in Montreal. 
                  I’m curently working with Design+Code. I’m passionate about creating digital experiences and teaching design. My goal is to help beginners to grow their skills...read more
              </div>
          </div>
          <img src={lamp} className='w-[200px]' alt=""  />
    </div>
  )
}

export default Main