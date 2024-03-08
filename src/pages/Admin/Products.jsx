import React, { useState } from 'react'
import FormProducts from '../../components/FormProducts'
import ShowFormProducts from '../../components/ShowFormProducts'

function Products() {
  const [showForm, setShowForm] = useState(false)
  const showFormFnc = () => {
    setShowForm(true)
  }
  const exitForm = () => {
    setShowForm(false)
  }
  return (
    <div className='w-full h-screen px-10'>
      <ShowFormProducts showFormFnc={showFormFnc} />
      {showForm && <FormProducts exitForm={exitForm} />}
    </div>
  )
}

export default Products
