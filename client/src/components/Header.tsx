import { FC } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { GiFox } from "react-icons/gi"
import { FaSignOutAlt } from "react-icons/fa"
import { useAuth } from '../hooks/userAuth'
import { useAppDispatch } from '../store/hooks'
import { logout } from '../store/user/userSlice'
import { removeTokenFromLocalStorage } from '../helpers/localstorage.helper'
import { toast } from 'react-toastify'

const Header: FC = () => {
    // const isAuth = false
    const isAuth = useAuth()

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const logoutHandler = () => {
        dispatch(logout())
        removeTokenFromLocalStorage('token')
        toast.success('До свидания')
        navigate('/')
    }

    return (
        <header className='flex items-center justify-between bg-orange-700 padding-4 shadow-sm backdrop-blur-sm'>
            <Link to='/' className='text-stone-100'>
                <GiFox size={50}/>
            </Link>
            {/* Menu */}
            {
                isAuth && (
                    <nav className='ml-auto mr-40'>
                        <ul className='flex items-center gap-5 text-stone-100'>
                            <li>
                                <NavLink to={'/'} className={({isActive}) => isActive ? 'font-bold border-b-2 border-stone-100' : ''}>Главная</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/landings'} className={({isActive}) => isActive ? 'font-bold border-b-2 border-stone-100' : ''}>Мои сайты</NavLink>
                            </li>
                        </ul>
                    </nav>
                )
            }
            {/* Actions */}
            {
                isAuth ? (
                    <button className='btn btn-red mr-10' onClick={logoutHandler}>
                        <span>Выйти</span>
                        <FaSignOutAlt />
                    </button>
                ) : (
                <Link to={'auth'} className='py-2 mr-10 font-bold text-stone-100/80 hover:text-stone-100'>
                    Войти/зарегистрироваться
                </Link>
                )
            }
        </header>
    )
}

export default Header
