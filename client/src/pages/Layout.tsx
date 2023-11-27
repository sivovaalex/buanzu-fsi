import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Layout: FC = () => {
  return (
    <div className='min-h-screen bg-stone-100 pb-20 font-exo2 text-orange-700'>
      <Header />
      <div className='container'>
        <Outlet /> 
      </div>
    </div>
  )
}

export default Layout