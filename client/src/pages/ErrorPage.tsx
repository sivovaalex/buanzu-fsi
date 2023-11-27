import { FC } from 'react'
import img_not_found from '../assets/page_not_found.png'
import { Link } from 'react-router-dom'

const ErrorPage: FC = () => {
  return (
    <div className='min-h-screen bg-stone-100 font-exo2 text-orange-700 flex justify-center items-center flex-col gap-10'>
      <img src={img_not_found} alt='img_not_found' className='w-50' />
      <Link to='/' className='rounded-md border-2 border-stone-800 px-6 py-2 hover:bg-stone-800'>
        Обратно
      </Link>
    </div>
  )
}

export default ErrorPage