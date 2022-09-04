import {useState} from 'react'
import logo from "../assets/logo.png";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";



const style ={
    wrapper:`w-full  flex text-white justify-center items-center `,
    ul:` xs:hidden sm:hidden flex m-4  p-3 justify-between items-center Capitalize`,
    list:`md:px-10 lg:px-20 sm:px-10 xl:px-20 font-poppins font-normal cursor-pointer`,
    img:`w-[34px] h-[32px]`,
    rs_nav:`flex justify-between w-screen p-3 mx-2 lg:hidden md:hidden xl:hidden`,
    rs_logo:`w-[28px] h-[28px] object-contain`,
    glass:`signup-form  rounded text-[#1A2421] backdrop-blur-lg [ p-2 md:p-10 lg:p-10 ] [ bg-gradient-to-b from-white/60 to-blue/30 ] [ border-[1px] border-solid border-white border-opacity-30 ] [ shadow-black/70 shadow-2xl ]`
}

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

  return (
    <nav className={style.wrapper} >

        <ul className={style.ul}>
           <li className={style.list}>Home</li> 
           <li className={style.list} >About me</li> 
           <li  lassName={style.list} ><img className={style.img} src={logo} alt="logo" /></li> 
           <li className={style.list}>Work</li> 
           <li className={style.list} >Contact</li> 
        </ul>
        <div className={style.rs_nav}>
            <img src={logo} alt="" className={style.rs_logo} />
            <div className={style.glass}>
            <img
                src={toggle ? close : menu}
                alt="menu"
                className="w-[18px] h-[18px] object-contain"
                onClick={() => setToggle(!toggle)}
                />
            </div>
        </div>
    </nav>
  )
}

export default Navbar