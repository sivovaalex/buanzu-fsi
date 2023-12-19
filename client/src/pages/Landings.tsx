import { FC, useState } from 'react'
import {AiFillEdit, AiFillCloseCircle} from 'react-icons/ai'
import { FaPlus } from 'react-icons/fa'
import { HiSave } from "react-icons/hi"
import { BiShowAlt } from "react-icons/bi"
import { GrDomain } from "react-icons/gr"
import { Form, useLoaderData } from 'react-router-dom'
import LandingModal from '../components/LandingModal'
import { instance } from '../api/axios.api'
import { ILanding } from '../types/types'
import { useNavigate } from 'react-router-dom'
import DeleteLandingModal from '../components/DeleteLandingModal'

export const landingsAction = async({request}: any) => {
  switch(request.method) {
    case 'POST': {
      const formData = await request.formData()
      const landing = {
        site_name: formData.get('site_name'),
        title: formData.get('title'),
        icon_path: formData.get('icon_path'),
        body_background: formData.get('body_background'),
        lead_name: formData.get('lead_name'),
        lead_name_color: formData.get('lead_name_color'),
        lead_subtitle: formData.get('lead_subtitle'),
        lead_subtitle_color: formData.get('lead_subtitle_color'),
        lead_photo_path: formData.get('lead_photo_path'),
        name_color: formData.get('name_color'),
        text_color: formData.get('text_color'),
        about_name: formData.get('about_name'),
        about_text: formData.get('about_text'),
        about_photo_path: formData.get('about_photo_path'),
        client_name: formData.get('client_name'),
        client_list: formData.get('client_list'),
        photo_name: formData.get('photo_name'),
        gallery_list_path: formData.get('gallery_list_path'),
        plus_name: formData.get('plus_name'),
        plus_list: formData.get('plus_list'),
        plan_name: formData.get('plan_name'),
        plan_list: formData.get('plan_list'),
        button_name: formData.get('button_name'),
        button_list: formData.get('button_list'),
        contact_name: formData.get('contact_name'),
        contact_text: formData.get('contact_text'),
        phone_number: formData.get('phone_number'),
        vk: formData.get('vk'),
        tg: formData.get('tg'),
        mail: formData.get('mail'),
        address_name: formData.get('address_name'),
        address: formData.get('address'),
        map_link: formData.get('map_link'),
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
        icon_path: formData.get('icon_path'),
        body_background: formData.get('body_background'),
        lead_name: formData.get('lead_name'),
        lead_name_color: formData.get('lead_name_color'),
        lead_subtitle: formData.get('lead_subtitle'),
        lead_subtitle_color: formData.get('lead_subtitle_color'),
        lead_photo_path: formData.get('lead_photo_path'),
        name_color: formData.get('name_color'),
        text_color: formData.get('text_color'),
        about_name: formData.get('about_name'),
        about_text: formData.get('about_text'),
        about_photo_path: formData.get('about_photo_path'),
        client_name: formData.get('client_name'),
        client_list: formData.get('client_list'),
        photo_name: formData.get('photo_name'),
        gallery_list_path: formData.get('gallery_list_path'),
        plus_name: formData.get('plus_name'),
        plus_list: formData.get('plus_list'),
        plan_name: formData.get('plan_name'),
        plan_list: formData.get('plan_list'),
        button_name: formData.get('button_name'),
        button_list: formData.get('button_list'),
        contact_name: formData.get('contact_name'),
        contact_text: formData.get('contact_text'),
        phone_number: formData.get('phone_number'),
        vk: formData.get('vk'),
        tg: formData.get('tg'),
        mail: formData.get('mail'),
        address_name: formData.get('address_name'),
        address: formData.get('address'),
        map_link: formData.get('map_link'),
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
  const [visibleDeleteLandingModal, setVisibleDeleteLandingModal] = useState<boolean>(false)
  const navigate = useNavigate();
  return (
    <>
    <div className='max-w-[1000px] block m-auto'>
      <div className='mt-10 p-4 rounded-md bg-stone-200'>
        <h1 className='text-3xl'>Ваши сайты</h1>
        {/* add landings */}
        <button 
        onClick={() => {
          setVisibleModal(true);
          setIsEdit(false)
        }}
          className='my-5 flex max-w-fit items-center gap-2 text-neutral-800/70 hover:text-neutral-800'>
          <FaPlus />
          <span>Создать новый сайт</span>
        </button>
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
                  title='Опубликовать сайт на buanzu.ru'
                  className='flex mr-5' 
                  onClick={() => {}}>
                  <GrDomain />
                </button>
                <button
                  title='Посмотреть сайт'
                  className='flex mr-5' 
                  onClick={() => {
                    navigate(`show`, {state: {id_landing: landing.id_landing}})
                    }}>
                  <BiShowAlt />
                </button>
                <button 
                  title='Скачать архив с сайтом'
                  className='flex mr-5' 
                  onClick={() => {}}>
                  <HiSave />
                </button>
                <button 
                  title='Редактировать'
                  className='flex mr-5' 
                  onClick={() => {
                    setLandingId(landing.id_landing)
                    setVisibleModal(true)
                    setIsEdit(true)
                  }}
                >
                  <AiFillEdit/>
                </button>
                <button
                  title='Удалить'
                  className='flex mr-5' 
                  onClick={() => {
                    setLandingId(landing.id_landing)
                    setVisibleDeleteLandingModal(true)
                  }}
                >
                  <AiFillCloseCircle/>
                </button>
                {/* <Form className='flex mr-5' method='delete' action='/landings'>
                  <input type='hidden' name='id_landing' value={landing.id_landing} />
                  <button title='Удалить' type='submit'><AiFillCloseCircle/></button>
                </Form> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* add landing modal */}
      {visibleModal && (
        <LandingModal type='post' setVisibleModal={setVisibleModal}/>
      )}
      
      {/* edit landing modal */}
      {visibleModal && isEdit && (
        <LandingModal type='patch' id={landingId} setVisibleModal={setVisibleModal}/>
      )}
      {/* delete landing modal */}
      {visibleDeleteLandingModal && (
      <DeleteLandingModal id={landingId} setVisibleDeleteLandingModal={setVisibleDeleteLandingModal}/>
      )}
      
    </div></>
  )
}

export default Landings
