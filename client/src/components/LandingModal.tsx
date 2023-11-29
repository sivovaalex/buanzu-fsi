import {FC} from 'react'
import {Form} from 'react-router-dom'

interface ILandingModal {
    type: 'post' | 'patch'
    id?: number
    setVisibleModal: (visible: boolean) => void
}

const LandingModal: FC<ILandingModal> = ({type, id, setVisibleModal}) => {
  return (
    <div className='fixed bottom-0 left-0 right-0 top-0 flex h-full w-full items-center justify-center bg-black/70'>
        <Form 
            action='/landings' 
            method={type}
            onSubmit={() => setVisibleModal(false)}
            className='grid w-2/3 gap-2 rounded-md bg-stone-100 p-5'
        >
            <label htmlFor='site_name' className='label'>
                Название сайта
                <input className='input w-2/3' type='text' required name='site_name' placeholder='Название сайта...'/>
                <input type='hidden' name='id_landing' value={id}/>
            </label>
            <label htmlFor='title' className='label'>
                Название вкладки
                <input className='input w-2/3' type='text' required name='title' placeholder='Название вкладки...'/>
                <input type='hidden' name='id_landing' value={id}/>
            </label>
            <label htmlFor='body_background' className='label'>
                Цвет фона
                <input className='input w-1/3' type='color' name='body_background'/>
                <input type='hidden' name='id_landing' value={id}/>
            </label>
            <div className='flex items-center gap-2'>
                <button className='btn btn-green' type='submit'>
                    {type==='patch' ? 'Сохранить' : 'Создать сайт'}
                </button>
                <button onClick={() => setVisibleModal(false)} className='btn btn-red'>Закрыть</button>
            </div>
        </Form>
    </div>
  )
}

export default LandingModal
