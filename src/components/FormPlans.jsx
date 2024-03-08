import React from 'react'
import { FiMinimize2 } from 'react-icons/fi'
import { GrAdd } from 'react-icons/gr'

function FormPlans({exitForm}) {
  return (
    <div className='w-[500px] flex flex-col items-center m-auto mt-14 h-80 shadow-2xl rounded'>
    <div className='w-full h-7 flex justify-between px-10 pt-3'>
        <h1 className=' font-bold'>Add Plans</h1>
        <button onClick={exitForm} >
            <FiMinimize2 className='h-5 w-5' />
        </button>
    </div>
    <form className='w-full gap-3 pt-5 flex flex-col px-10' action="">
        <div>
            <label htmlFor="">Plan name:</label>
            <input className='w-full p-1 outline-none border-2 rounded' type="text" placeholder='Enter plan name' />
        </div>
        <div>
            <label htmlFor="">Time:</label>
            <input className='w-full p-1 outline-none border-2 rounded' type="text" placeholder='Enter time' />
        </div>
        <div>
            <label htmlFor="">Image:</label>
            <input className='w-full p-1 outline-none border-2 rounded' type="text" placeholder='Enter the image' />
        </div>
        <div className='flex w-32 m-auto cursor-pointer p-1 bg-blue-600 rounded text-white justify-center gap-3 items-center'>
            <button >Add Plan</button>
            <GrAdd />
        </div>
    </form>
</div>
  )
}

export default FormPlans
