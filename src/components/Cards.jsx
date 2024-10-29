import React from 'react'

function Cards() {
    <React/>
  return (
    <div className='w-full flex px-10 gap-8 h-screen'>
        <div className="cardContainer h-[90vh] pt-32 w-1/2 ">
            <div className="card w-full flex justify-center items-center h-96 rounded-xl bg-[#1e754f]">
              <img className='w-32 ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            </div>
        </div>
        <div className="cardContainer flex gap-8 h-[90vh] w-1/2 pt-32">
            <div className="card w-1/2 h-96 flex justify-center items-center rounded-xl bg-[#484e14]">
              <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            </div>
            <div className="card w-1/2 h-96 flex justify-center items-center rounded-xl bg-[#330fff]">
              <img className='w-28 rounded-full' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Cards
