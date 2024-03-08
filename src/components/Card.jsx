import React, { useContext, useState } from 'react'
import { FaBookmark } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { RxHeart } from "react-icons/rx";
import { MdDelete } from "react-icons/md";
import { StateContext } from '../context/Context';
function Card({ item }) {
    const { state, dispatch } = useContext(StateContext)

    const deleteItem = () => {
        dispatch({ type: "DELETE_ITEM", payload: item.id })
    }
    const likeHandler = () => {
        dispatch({ type: "LIKE_ITEM", payload: item.id })
    }
    console.log(state.books)
    return (
        <div className='w-[400px] mt-10  rounded-t-2xl h-[350px] shadow-2xl bg-gray-100 rounded '>
            <div className='w-full h-56 rounded-t-2xl  '>
                <img className='w-full bg-center rounded-t-lg rounded-b-2xl  bg-auto h-56' src={item.image} alt="" />
            </div>
            <div className='p-3 flex flex-col gap-1 '>
                <div className='flex items-center justify-between'>
                    <h2 className='font-bold'>
                        {item.name}
                    </h2>
                    <button className='flex gap-1 items-center' onClick={likeHandler} ><RxHeart className='w-5 h-5' />
                        {item.like ? item.like : ""}
                    </button>


                </div>
                <div className='flex items-center justify-between'>
                    <h2 className='font-semibold'>
                        Owner: {item.owner}
                    </h2>
                    <button><FaPen className='w-4 h-4' /></button>
                </div>
                <div className='flex items-center justify-between'>
                    <button className='bg-gray-200 items-center justify-center gap-3 flex rounded p-1 '>
                        Save
                        <FaBookmark />
                    </button>
                    <button onClick={deleteItem}>
                        <MdDelete className='w-6 h-6' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card;
