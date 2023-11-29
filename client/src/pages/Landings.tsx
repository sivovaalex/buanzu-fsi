import { FC, useState } from 'react'
import {AiFillEdit, AiFillCloseCircle} from 'react-icons/ai'
import { FaPlus } from 'react-icons/fa'
import { Form, useLoaderData } from 'react-router-dom'
import LandingModal from '../components/LandingModal'
import { instance } from '../api/axios.api'
import { ILanding } from '../types/types'

export const landingsAction = async({request}: any) => {
  switch(request.method) {
    case 'POST': {
      const formData = await request.formData()
      const landing = {
        site_name: formData.get('site_name'),
        title: formData.get('title'),
        body_background: formData.get('body_background')
      }
      await instance.post('/landings', landing)
      return null
    }
    case 'PATCH': {
      const formData = await request.formData()
      const landing = {
        id_landing: formData.get('id_landing'),
        site_name: formData.get('site_name'),
        title: formData.get('title'),
        body_background: formData.get('body_background')
      }
      await instance.patch(`/landings/landing/${landing.id_landing}`, landing)
      return null
    }
    case 'DELETE': {
      const formData = await request.formData()
      const landingId = formData.get('id_landing')
      await instance.delete(`/landings/landing/${landingId}`)
      return null
    }
  }
}

export const landingLoader = async () => {
  const {data} = await instance.get<ILanding[]>('/landings')
  return data
}

const Landings: FC = () => {
  const landings = useLoaderData() as ILanding[]
  const [landingId, setLandingId] = useState<number>(0)
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [visibleModal, setVisibleModal] = useState<boolean>(false)
  return (
    <>
      <div className='mt-10 p-4 rounded-md bg-stone-200'>
        <h1 className='text-3xl'>Ваши сайты</h1>
        {/* landings list */}
        <div className='mt-2 flex flex-col gap-2'>
          {landings.map((landing, idx) => (
            <div 
              key={idx} 
              className='group relative flex items-center gap-2 rounded-lg bg-orange-700 py-2 px-4 
              text-stone-200 w-1/2 h-20 text-lg'
            >
              {landing.site_name}
              <div className='absolute bottom-0 left-0 right-0 top-0 hidden items-center justify-end
              rounded-lg bg-orange-900/90 px-3 group-hover:flex text-2xl  text-right' >
                <button 
                  onClick={() => {
                    setLandingId(landing.id_landing)
                    setVisibleModal(true)
                    setIsEdit(true)
                  }}
                >
                  <AiFillEdit/>
                </button>
                <Form className='flex mx-5' method='delete' action='/landings'>
                  <input type='hidden' name='id_landing' value={landing.id_landing} />
                  <button type='submit'><AiFillCloseCircle/></button>
                </Form>
              </div>
            </div>
          ))}
        </div>
        {/* add landings */}
        <button onClick={() => setVisibleModal(true)}
          className='mt-5 flex max-w-fit items-center gap-2 text-neutral-800/70 hover:text-neutral-800'>
          <FaPlus />
          <span>Создать новый сайт</span>
        </button>
      </div>
      {/* add landing modal */}
      {visibleModal && (
        <LandingModal type='post' setVisibleModal={setVisibleModal}/>
      )}
      
      {/* edit landing modal */}
      {visibleModal && isEdit && (
        <LandingModal type='patch' id={landingId} setVisibleModal={setVisibleModal}/>
      )}
    </>
  )
}

export default Landings
