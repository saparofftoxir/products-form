import React, { useContext, useState } from 'react'
import { GrAdd } from "react-icons/gr";
import { FiMinimize2 } from "react-icons/fi";
import { nanoid } from 'nanoid';
import { StateContext } from '../context/Context';
function FormBooks({ exitForm }) {
    const { state, dispatch } = useContext(StateContext)
    const [name, setName] = useState('')
    const [owner, setOwner] = useState('')
    const [image, setImage] = useState('')
    const addUserHandler = (e) => {
        e.preventDefault();
        const newUser = {
            name: name,
            owner: owner,
            image: image,
            id: nanoid(),
            like:0
        }
        dispatch({ type: "ADD_BOOK", payload: newUser })
        e.target.reset(); 
    }
    console.log(state)
    return (
        <div className='w-[500px] flex flex-col items-center m-auto mt-14 h-80 shadow-2xl rounded'>
            <div className='w-full h-7 flex justify-between px-10 pt-3'>
                <h1 className=' font-bold'>Add Books</h1>
                <button onClick={exitForm} >
                    <FiMinimize2 className='h-5 w-5' />
                </button>
            </div>
            <form onSubmit={addUserHandler} className='w-full pt-5 gap-3 flex flex-col px-10' action="">
                <div>
                    <label htmlFor="">Book name:</label>
                    < input onChange={(e) => setName(e.target.value)} required className='w-full p-1 outline-none border-2 rounded' type="text" placeholder='Enter book name' />
                </div>
                <div>
                    <label htmlFor="">The writer:</label>
                    < input onChange={(e) => setOwner(e.target.value)} required className='w-full p-1 outline-none border-2 rounded' type="text" placeholder='Enter the writer' />
                </div>
                <div>
                    <label htmlFor="">Image:</label>
                    < input onChange={(e) => setImage(e.target.value)} required className='w-full p-1 outline-none border-2 rounded' type="text" placeholder='Enter the image' />
                </div>
                <div className='flex w-32 m-auto cursor-pointer p-1 bg-blue-600 rounded text-white justify-center gap-3 items-center'>
                    <button >Add Book</button>
                    <GrAdd />
                </div>
            </form>
        </div>
    )
}

export default FormBooks
