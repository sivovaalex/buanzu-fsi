import {FC} from 'react'
import { Form } from 'react-router-dom'
import { AiFillCloseCircle } from 'react-icons/ai'
import { toast } from 'react-toastify'

interface IDeleteLandingModal {
    id?: number
    setVisibleDeleteLandingModal: (visible: boolean) => void
}

const DeleteLandingModal: FC<IDeleteLandingModal> = ({id, setVisibleDeleteLandingModal}) => {
    return (
    <div className='fixed bottom-0 left-0 right-0 top-0 flex h-full w-full justify-center bg-black/70'>
        <div className='w-2/3 h-1/3 gap-2 m-auto text-center rounded-md bg-stone-100 p-5'>
            <p className='text-xl text-neutral-800'>Вы действительно хотите удалить сайт без возможности восстановления?</p>
            <div className='flex justify-center m-20'>
                <Form className='flex mr-16' method='delete' action='/landings' 
                onSubmit={() => {
                    setVisibleDeleteLandingModal(false);
                    toast.success('Сайт успешно удалён');
                  }}>
                    <input type='hidden' name='id_landing' value={id} />
                    <button 
                        title='Удалить' 
                        type='submit'
                        className='btn btn-red text-lg'>
                            Удалить<AiFillCloseCircle/>
                    </button>
                </Form>
                <button
                    onClick={() => setVisibleDeleteLandingModal(false)}
                    className='btn bg-neutral-600 hover:bg-neutral-500 text-stone-100 text-lg'>
                    Отмена
                </button>
            </div>
            
        </div>
    </div>
    )
}

export default DeleteLandingModal