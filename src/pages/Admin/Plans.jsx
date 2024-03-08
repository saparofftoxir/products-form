import React, { useState } from 'react'
import ShowFormPlans from '../../components/ShowFormPlans'
import FormPlans from '../../components/FormPlans'

function Plans() {
  const [showForm, setShowForm] = useState(false)
  const showFormFnc = () => {
    setShowForm(true)
  }
  const exitForm = () => {
    setShowForm(false)
  }
  return (
    <div className='w-full h-screen px-10'>
      <ShowFormPlans showFormFnc={showFormFnc} />
      {showForm && <FormPlans exitForm={exitForm} />}
    </div>
  )
}

export default Plans;
