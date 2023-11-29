import {FC} from 'react'
import { useAuth } from '../hooks/userAuth'
import protected_icon from '../assets/protected_icon.png'

interface Props {
    children: JSX.Element
}

export const ProtectedRoute: FC<Props> = ({children}) => {
    const isAuth = useAuth()
    return (
        <>
        {isAuth ? children : 
        (<div className='mt-20 flex flex-col items-center justify-center gap-10'>
            <h1 className='text-2xl'>Чтобы просматривать данную страницы вам необходимо войти в аккаунт</h1>
            <img className='w-1/3' src={protected_icon} alt='protected_icon'/>
        </div>)
        }
        </>
  )
}
