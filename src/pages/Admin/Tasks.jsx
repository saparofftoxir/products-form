import React, { useState } from 'react'
import ShowFormTasks from '../../components/ShowFormTasks'
import FormProducts from '../../components/FormProducts'

function Tasks() {
    const [showForm,setShowForm]=useState(false)
    const showFormFnc=()=>{
        setShowForm(true)
    }
    const exitForm=()=>{
        setShowForm(false)
    }
  return (
    <div className='w-full h-screen px-10'>
      <ShowFormTasks showFormFnc={showFormFnc} />
            {showForm && <FormProducts exitForm={exitForm} />}
      
    </div>
  )
}

export default Tasks
