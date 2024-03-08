import React, { useContext, useState } from 'react'
import FormBooks from '../../components/FormBooks'
import ShowForm from '../../components/ShowForm'
import { StateContext } from '../../context/Context'

function Books() {
    const { state, dispatch } = useContext(StateContext)
    const [showForm, setShowForm] = useState(false)
    const showFormFnc = () => {
        setShowForm(true)
    }
    const exitForm = () => {
        setShowForm(false)
    }
    return (
        <div className='w-full m-auto h-screen  px-10'>
            <ShowForm showFormFnc={showFormFnc} />
            {showForm && <FormBooks exitForm={exitForm} />}

        </div>
    )
}

export default Books;