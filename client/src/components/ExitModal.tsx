import {FC} from 'react'
import { toast } from 'react-toastify'
import { useAppDispatch } from '../store/hooks'
import { removeTokenFromLocalStorage } from '../helpers/localstorage.helper'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../store/user/userSlice'
import { Form } from 'react-router-dom'
import { FaSignOutAlt } from "react-icons/fa"

interface IExitModal {
    setVisibleModal: (visible: boolean) => void
}

const ExitModal: FC<IExitModal> = ({setVisibleModal}) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const logoutHandler = () => {
        dispatch(logout())
        removeTokenFromLocalStorage('token')
        toast.success('До свидания')
        navigate('/')
        setVisibleModal(false)
    }

    return (
        <div className='fixed bottom-0 left-0 right-0 top-0 flex h-full w-full justify-center bg-black/70'>
        <div className='w-2/3 h-1/3 gap-2 m-auto text-center rounded-md bg-stone-100 p-5'>
            <p className='text-xl text-neutral-800'>Вы действительно хотите выйти?</p>
            <div className='flex justify-center m-20'>
                <button className='btn btn-red mr-10  text-base tracking-wider' onClick={logoutHandler}>
                    <span>Выйти</span>
                    <FaSignOutAlt />
                </button>
                <button
                    onClick={() => setVisibleModal(false)}
                    className='btn bg-neutral-600 hover:bg-neutral-500 text-stone-100 text-lg'>
                    Отмена
                </button>
            </div>
            
        </div>
    </div>
    )
}

export default ExitModal