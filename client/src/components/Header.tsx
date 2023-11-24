import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GiFox } from "react-icons/gi"
import { FaSignOutAlt } from "react-icons/fa"

const Header: FC = () => {
    const isAuth = true
    return (
        <header className='flex items-center justify-between bg-slate-800 padding-4 shadow-sm backdrop-blur-sm'>
            <Link to='/'>
                <GiFox size={50} />
            </Link>
            {/* Menu */}
            {
                isAuth && (
                    <nav className='ml-auto mr-40'>
                        <ul className='flex items-center gap-5'>
                            <li>
                                <NavLink to={'/'} className={({isActive}) => isActive ? 'font-bold border-b-2 border-slate-100' : ''}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/landings'} className={({isActive}) => isActive ? 'font-bold border-b-2 border-slate-100' : ''}>Landings</NavLink>
                            </li>
                        </ul>
                    </nav>
                )
            }
            {/* Actions */}
            {
                isAuth ? (
                    <button className='btn btn-red mr-10'>
                        <span>Выйти</span>
                        <FaSignOutAlt />
                    </button>
                ) : (
                <Link to={'auth'} className='py-2 mr-10 font-bold text-orange-700/80 hover:text-orange-700'>
                    Войти/зарегистрироваться
                </Link>
                )
            }
        </header>
    )
}

export default Header
