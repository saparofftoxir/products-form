import React, { useContext } from 'react'
import { StateContext } from '../../context/Context';
import Card from '../../components/Card';
import { useNavigate } from 'react-router-dom';

function Basket() {
  const { state, dispatch } = useContext(StateContext)
  const navigate = useNavigate()
  console.log(state)
  if (state.books.length === 0) {
    return <div>
      <div className=' m-auto h-96 flex flex-col items-center justify-center'>
        <img className='w-96' src="https://img.freepik.com/free-vector/shopping-cart-realistic_1284-6011.jpg?w=740&t=st=1709796152~exp=1709796752~hmac=4cee5fd16f91b86a8b682220f1f5d662b2e59765cde35a6f9dd3fcb550da745a" alt="" />
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-xl font-bold'>Savatda hozircha mahsulot yo'q !</h1>
          <p className='text-gray-400'>Books sahifadagi termalardan boshlang yoki kerakli mahsulotni qidiruv orqali toping.</p>
          <button onClick={() => navigate('/admin/books')} className='w-40 p-1 text-white bg-cyan-600 rounded'>Books</button>
        </div>
      </div>
    </div>
  }
  return (
    <div className='w-full grid grid-cols-2 px-32 min-h-96 mt-3'>

      {state.books?.map(item => <Card key={item.id} item={item} />)}
    </div>
  )

}

export default Basket;
