import React from 'react'
import {Planet , Univ ,Planet2 } from './Riveitem'



const style={
    wrapper:`flex-col h-screen `,
    plan2:`absolute  w-1/4 left-[-40px] top-[-60px]`,
    plan:`absolute  w-1/4 left-[-40px] bottom-[-200px] xs:left-[-90px]`,
    uni:`absolute right-[0px] bottom-[45px] xl:bottom-[-45px]`,
    text_box:` p-3 relative w-full h-full flex flex-col justify-center items-center`,
    text:`p-5   font-bold font-poppins text-6xl xs:text-[36px] w-1/2 xs:w-full sm:text-[46px] sm:w-full translate-y-[-30px]`,
    btn:`border rounded-full w-[40%] p-2 mx-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-transparent active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300`,
    btncontainer :`xs:w-full w-1/2`
}

const Banner = () => {
  return (
    <div className={style.wrapper}>
       <div>
          <div className={style.plan2}>
            <Planet2 />
          </div>
          <div className={style.plan}>
            <Planet />
          </div>
          <div className={style.uni}>
            <Univ/>
          </div>
      </div>
      <div className={style.text_box}>
        <h3 className={style.text}>Creative UI Designer Sourasith Phomhome Based in Monteal</h3>
        <div className={style.btncontainer}>
            <button className={style.btn}>Hire me</button>
            <button className={style.btn}>Download</button>
        </div>
      </div>

    </div>
  )
}

export default Banner