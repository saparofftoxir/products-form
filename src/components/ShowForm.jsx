import React from 'react'
import { GrAdd } from "react-icons/gr";
function ShowForm({showFormFnc}) {
    return (
        <div className='w-full mt-5 flex items-center justify-between text-white px-10 h-14 bg-blue-950 rounded-2xl'>
            <h1 className='font-bold'>Add Books</h1>
            <button onClick={showFormFnc}   className='w-32 h-8 flex cursor-pointer hover:bg-slate-100 bg-white text-black justify-center font-semibold items-center gap-3 rounded-xl'>
                <p>Add</p>
                <GrAdd />
            </button>
        </div>
    )
}

export default ShowForm;
