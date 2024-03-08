import React, { useState } from 'react'
import ShowFormUsers from '../../components/ShowFormUsers'
import FormUsers from '../../components/FormUsers'

function Users() {
  const [showForm, setShowForm] = useState(false)
  const showFormFnc = () => {
    setShowForm(true)
  }
  const exitForm = () => {
    setShowForm(false)
  }
  return (
    <div className='w-full h-screen px-10'>
      <ShowFormUsers showFormFnc={showFormFnc} />
      {showForm && <FormUsers exitForm={exitForm} />}
    </div>
  )
}

export default Users
