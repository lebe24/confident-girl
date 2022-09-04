import React from 'react'

const style ={
    glass: `relative glass w-[120px] h-[200px] p-6  `,
}

const Card = () => {
  return (
    <div className={style.glass}>
        <h1 className='absolute text-center bottom-0 py-3'>Ui design</h1>
    </div>
  )
}

export default Card