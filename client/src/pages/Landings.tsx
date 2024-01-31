import { FC, useEffect, useState } from 'react'
import {AiFillEdit, AiFillCloseCircle} from 'react-icons/ai'
import { FaPlus } from 'react-icons/fa'
import { HiSave } from "react-icons/hi"
import { BiShowAlt } from "react-icons/bi"
import { GrDomain } from "react-icons/gr"
import { useLoaderData, useParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate';
import LandingModal from '../components/LandingModal'
import { instance } from '../api/axios.api'
import { ILanding } from '../types/types'
import { useNavigate, createSearchParams } from 'react-router-dom'
import DeleteLandingModal from '../components/DeleteLandingModal'
import { toast } from "react-toastify"
import { getTokenFromLocalStorage } from '../helpers/localstorage.helper'

export const landingsAction = async({request}: any) => {
  switch(request.method) {
    case 'POST': {
      const formData = await request.formData()
      const clientList = [];
      for (const [key, value] of formData.entries()) {
        if (key.includes('client_list[')) {
          clientList.push(value);
        }
      }
      const plusList = [];
      for (const [key, value] of formData.entries()) {
        if (key.includes('plus_list[')) {
          plusList.push(value);
        }
      }
      const plusDescriptionList = [];
      for (const [key, value] of formData.entries()) {
        if (key.includes('plus_description_list[')) {
          plusDescriptionList.push(value);
        }
      }
      const planList = [];
      for (const [key, value] of formData.entries()) {
        if (key.includes('plan_list[')) {
          planList.push(value);
        }
      }
      const buttonList = [];
      for (const [key, value] of formData.entries()) {
        if (key.includes('button_list[')) {
          buttonList.push(value);
        }
      }
      const buttonLinkList = [];
      for (const [key, value] of formData.entries()) {
        if (key.includes('button_link_list[')) {
          buttonLinkList.push(value);
        }
      }
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
        client_list: clientList,
        photo_name: formData.get('photo_name'),
        gallery_list_path: formData.get('gallery_list_path'),
        plus_name: formData.get('plus_name'),
        plus_list: plusList,
        plus_description_list: plusDescriptionList,
        plan_name: formData.get('plan_name'),
        plan_list: planList,
        button_name: formData.get('button_name'),
        button_list: buttonList,
        button_link_list: buttonLinkList,
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
      console.log('patch', landing)
      await instance.post('/landings', landing)
      return null
    }
    case 'PATCH': {
      const formData = await request.formData()
      const clientList = [];
      for (const [key, value] of formData.entries()) {
        if (key.includes('client_list[')) {
          clientList.push(value);
        }
      }
      const plusList = [];
      for (const [key, value] of formData.entries()) {
        if (key.includes('plus_list[')) {
          plusList.push(value);
        }
      }
      const plusDescriptionList = [];
      for (const [key, value] of formData.entries()) {
        if (key.includes('plus_description_list[')) {
          plusDescriptionList.push(value);
        }
      }
      const planList = [];
      for (const [key, value] of formData.entries()) {
        if (key.includes('plan_list[')) {
          planList.push(value);
        }
      }
      const buttonList = [];
      for (const [key, value] of formData.entries()) {
        if (key.includes('button_list[')) {
          buttonList.push(value);
        }
      }
      const buttonLinkList = [];
      for (const [key, value] of formData.entries()) {
        if (key.includes('button_link_list[')) {
          buttonLinkList.push(value);
        }
      }
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
        client_list: clientList,
        photo_name: formData.get('photo_name'),
        gallery_list_path: formData.get('gallery_list_path'),
        plus_name: formData.get('plus_name'),
        plus_list: plusList,
        plus_description_list: plusDescriptionList,
        plan_name: formData.get('plan_name'),
        plan_list: planList,
        button_name: formData.get('button_name'),
        button_list: buttonList,
        button_link_list: buttonLinkList,
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
      console.log('patch', landing)
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

interface ILandingTable {
  limit: number
}

const Landings: FC<ILandingTable> = ({limit = 5}) => {
  const landings = useLoaderData() as ILanding[]
  const [data, setData] = useState<ILanding[]>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [totalPages, setTotalPages] = useState<number>(0)
  const [isExporting, setIsExporting] = useState<boolean>(false)
  const [currentHost, setCurrentHost] = useState('');

  const fetchLandings = async (page: number) => {
    const response = await instance.get(`/landings/pagination?page=${page}&limit=${limit}`)
    setData(response.data)
    setTotalPages(Math.ceil(landings.length / limit))
  }

  const handlePageChange = (selectedItem: {selected: number}) => {
    setCurrentPage(selectedItem.selected + 1)
  } 

  const handleDownloadArchive = async (id_landing: number) => {
    try {
      //const landingId = 123; // Замените на актуальный идентификатор лендинга
      // Выполнение запроса на загрузку архива
      //const response = await instance.get(`/landings/archive/${id_landing}`)
      console.log('test')
      const response = await fetch(`api/landings/archive/landing/${id_landing}`, {
        method: 'GET',
        headers: { "Content-Type": "application/zip"}
      });
      console.log('test2')
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'site_archive.zip';
      link.click();
      URL.revokeObjectURL(url);
    } catch (error: any) {
      console.error('Ошибка при загрузке архива:', error);
      toast.error(error.response?.data.message.toString())
    }
  };

//   const viewFile = async (url: string, prefix: string) => {
//     setIsExporting(true)
//     fetch(url, {
//         headers: {
//             'x-access-token': getTokenFromLocalStorage()
//         }
//     })
//         .then((response) => {
//             return response.blob();
//         })
//         .then((blob) => {
//             const _url = window.URL.createObjectURL(blob);
//             const link = document.createElement('a');
//             link.href = _url;
//             link.setAttribute('download', prefix + (new Date()).toISOString() + ".zip");
//             document.body.appendChild(link);
//             link.click();
//             setIsExporting(false);
//             //window.open(_url, "_self");
//         }).catch((err) => {
//         console.log(err);
//         setIsExporting(false);
//     });
// };
const viewFile = async (url: string, prefix: string) => {
  setIsExporting(true);
  fetch(url, {
    headers: {
      'x-access-token': getTokenFromLocalStorage(),
    },
  })
    .then((response) => {
      return response.arrayBuffer();
    })
    .then((arrayBuffer) => {
      const blob = new Blob([arrayBuffer], { type: 'application/zip' });
      const _url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = _url;
      link.setAttribute('download', prefix + (new Date()).toISOString() + ".zip");
      document.body.appendChild(link);
      link.click();
      setIsExporting(false);
    })
    .catch((err) => {
      console.log(err);
      setIsExporting(false);
    });
};

  // const handleDownloadArchive = async (id_landing: number) => {
  //   fetch(`api/landings/archive/landing/${id_landing}`, {
  //     method: 'GET',
  //     headers: { "Content-Type": "application/json",
  //     'Authorization': 'Bearer ' + getTokenFromLocalStorage(),}
  //   })
  //     .then(response => response.blob())
  //     .then(blob => {
  //       const url = window.URL.createObjectURL(new Blob([blob]));
  //       const link = document.createElement('a');
  //       link.href = url;
  //       link.download = 'site_archive.zip';
  //       document.body.appendChild(link);
  //       link.click();
  //       link.parentNode?.removeChild(link);
  //     });
  // };

  useEffect(() => {
    setCurrentHost(window.location.host);
    fetchLandings(currentPage)
  }, [currentPage, landings])
  
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
        <ReactPaginate 
          className='flex gap-3 justify-end mt-4 items-center'
          activeClassName='border-orange-700 border-2 rounded-md'
          pageLinkClassName='text-neutral-800 text-s py-1 px-2 rounded-sm'
          previousClassName='text-neutral-800 font-bold py-0.5 px-2 rounded-sm text-xs'
          previousLabel='←'
          nextClassName='text-neutral-800 font-bold py-0.5 px-2 rounded-sm text-xs'
          nextLabel='→'
          disabledClassName='text-white/50 cursor-not-allowed'
          disabledLinkClassName='text-neutral-400 cursor-not-allowed'
          pageCount={totalPages}
          pageRangeDisplayed={1}
          marginPagesDisplayed={2}
          onPageChange={handlePageChange}
        />
        <div className='mt-2 flex flex-col gap-2'>
          {/* {landings.map((landing, idx) => ( */}
          {data?.map((landing, idx) => (
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
                  onClick={() => {
                    const publishedUrl = `http://${landing.site_name}.${currentHost}`;
                    window.open(publishedUrl, '_blank');
                  }}>
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
                  onClick={() => {
                    let url = `api/landings/archive/landing/${landing.id_landing}`;
                    viewFile(url, "site_archive_");
                }}>
                {/* onClick={() => handleDownloadArchive(landing.id_landing)}>
                onClick={() => {navigate(`archive/landing`, {state: {id_landing: landing.id_landing}})}}> */}
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
