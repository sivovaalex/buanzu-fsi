import { FC, useState } from "react"
import { AuthService } from "../services/auth.service"
import { toast } from "react-toastify"
import { setTokenToLocalStorage } from "../helpers/localstorage.helper"
import { useAppDispatch } from "../store/hooks"
import {login} from '../store/user/userSlice'
import { useNavigate } from "react-router-dom"
import { GiNewBorn } from "react-icons/gi"
import { MdEmojiPeople } from "react-icons/md"

export const Auth: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      const data = await AuthService.login({email, password})
      if (data) {
        setTokenToLocalStorage('token', data.token)
        dispatch(login(data))
        toast.success('Вы успешно вошли')
        navigate('/')
      }
    } catch (err: any) {
      const error = err.response?.data.message
      toast.error(error.toString())
    }
  }

  const registrationHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      const data = await AuthService.registartion({email, password})
      if (data) {
        toast.success('Аккаунт создан')
        setIsLogin(!isLogin)
      }
    } catch (err: any) {
      const error = err.response?.data.message
      toast.error(error.toString())
    }
  }

  return (
    // flex flex-col items-center justify-center
    <div className="mt-40 block m-auto bg-stone-100 text-neutral-900 max-w-[1000px]">
      <div className="flex justify-center mb-5 text-8xl text-orange-700">
        {isLogin ? <MdEmojiPeople /> : <GiNewBorn />}
      </div>
      <h1 className="mb-10 text-center text-xl">
        {isLogin ? 'Вход' : 'Регистрация'}
      </h1>

      <form 
      onSubmit={isLogin ? loginHandler : registrationHandler}
      className="flex w-1/3 flex-col mx-auto gap-5">
        <input 
          type='text' 
          className="input" 
          placeholder="Email" 
          onChange={(e) => setEmail(e.target.value)}/>
        <input 
          type='password' 
          className="input" 
          placeholder="Пароль"
          onChange={(e) => setPassword(e.target.value)}/>

        <button className="btn btn-green mx-auto">{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
      </form>

      <div className="flex justify-center mt-5">
        { isLogin ? 
        (<button onClick={() => setIsLogin(!isLogin)}
          className="text-neutral-600 hover:text-neutral-900">У вас отсутствует аккаунт?</button>) : 
        (<button onClick={() => setIsLogin(!isLogin)}
          className="text-neutral-600 hover:text-neutral-900">Уже есть аккаунт?</button>)}
      </div>
    </div>
  )
}

export default Auth
