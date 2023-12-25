import { FC, useState, useEffect } from 'react'
import { Form } from 'react-router-dom'
import { IoMdClose, IoMdCheckmark } from "react-icons/io";
import {landingById} from '../services/landing.service'
import photo_sitename from '../assets/landingModal/photo_sitename.png'
import photo_title from '../assets/landingModal/photo_title.png'
import { IoIosArrowDown } from "react-icons/io";

interface ILandingModal {
    type: 'post' | 'patch'
    id?: number
    setVisibleModal: (visible: boolean) => void
}

// export const landingById = async (id: number) => {
//     const {data} = await instance.get<ILandingId>(`/landings/landing/${id}`)
//     return data
// }


const LandingModal: FC<ILandingModal> = ({type, id, setVisibleModal}) => {

    const [landing, setLanding] = useState<{
        site_name:  string,
        title:  string,
        icon_path: File | null,
        body_background:  string,
        lead_name:  string,
        lead_name_color:  string,
        lead_subtitle:  string,
        lead_subtitle_color:  string,
        lead_photo_path:  File | null,
        name_color:  string,
        text_color:  string,
        about_name:  string,
        about_text:  string,
        about_photo_path:  File | null,
        client_name:  string,
        client_list:  string,
        photo_name:  string,
        gallery_list_path:  string,
        plus_name:  string,
        plus_list:  string,
        plan_name:  string,
        plan_list:  string,
        button_name:  string,
        button_list:  string,
        contact_name:  string,
        contact_text:  string,
        phone_number:  string,
        vk:  string,
        tg:  string,
        mail:  string,
        address_name:  string,
        address:  string,
        map_link:  string
    }>({
        site_name: '',
        title : '',
        icon_path : null,
        body_background : '#f5f5f4',
        lead_name : '',
        lead_name_color : '#c95433',
        lead_subtitle : '',
        lead_subtitle_color : '#222126',
        lead_photo_path : null,
        name_color : '#c95433',
        text_color : '#222126',
        about_name : '',
        about_text : '',
        about_photo_path : null,
        client_name : '',
        client_list : '',
        photo_name : '',
        gallery_list_path : '',
        plus_name : '',
        plus_list : '',
        plan_name : '',
        plan_list : '',
        button_name : '',
        button_list : '',
        contact_name : '',
        contact_text : '',
        phone_number : '',
        vk : '',
        tg : '',
        mail : '',
        address_name : '',
        address : '',
        map_link : ''
    })
    const [open, setOpen] = useState<boolean>(false)

    console.log(type)
    if (type==='patch' && id && open===false) {
        const landingbyid = landingById(id)
        const el = landingbyid.then(function(result) {
            setLanding({
                ...landing,
                site_name: result.site_name || '',
                title: result.title || '',
                //icon_path: result.icon_path || '',
                body_background: result.body_background || '',
                lead_name: result.lead_name || '',
                lead_name_color: result.lead_name_color || '',
                lead_subtitle: result.lead_subtitle || '',
                lead_subtitle_color: result.lead_subtitle_color || '',
                //lead_photo_path: result.lead_photo_path || '',
                name_color: result.name_color || '',
                text_color: result.text_color || '',
                about_name: result.about_name || '',
                about_text: result.about_text || '',
                //about_photo_path: result.about_photo_path || '',
                client_name: result.client_name || '',
                client_list: result.client_list || '',
                photo_name: result.photo_name || '',
                //gallery_list_path: result.gallery_list_path || '',
                plus_name: result.plus_name || '',
                plus_list: result.plus_list || '',
                plan_name: result.plan_name || '',
                plan_list: result.plan_list || '',
                button_name: result.button_name || '',
                button_list: result.button_list || '',
                contact_name: result.contact_name || '',
                contact_text: result.contact_text || '',
                phone_number: result.phone_number || '',
                vk: result.vk || '',
                tg: result.tg || '',
                mail: result.mail || '',
                address_name: result.address_name || '',
                address: result.address || '',
                map_link: result.map_link || '',
              });
            console.log(result, result.site_name, landing.site_name, landing.title, landing.body_background)
            setOpen(true)
          }, function(err) {
            console.log(err);
          });
        //console.log(bodyBackground)
    } 
    const [showLead, setShowLead] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [showClient, setShowClient] = useState(false);
    const [showGallery, setShowGallery] = useState(false);
    const [showPlus, setShowPlus] = useState(false);
    const [showPlan, setShowPlan] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [showContact, setShowContact] = useState(false);
    const [showAddress, setShowAddress] = useState(false);
    useEffect(() => {
        setShowLead(!!(landing.lead_name || landing.lead_subtitle));
        setShowAbout(!!(landing.about_name || landing.about_text));
        setShowClient(!!(landing.client_name || landing.client_list));
        setShowGallery(!!(landing.photo_name));
        setShowPlus(!!(landing.plan_name || landing.plus_list));
        setShowPlan(!!(landing.plan_name || landing.plan_list));
        setShowButton(!!(landing.button_name || landing.button_list));
        setShowContact(!!(landing.contact_name || landing.phone_number || landing.vk || landing.tg || landing.mail));
        setShowAddress(!!(landing.address_name || landing.address || landing.map_link));
    }, [landing.lead_name, landing.lead_subtitle, landing.about_name, landing.about_text, 
        landing.client_name, landing.client_list, landing.photo_name, landing.plan_name, 
        landing.plus_list, landing.button_name, landing.button_list, 
        landing.contact_name, landing.phone_number, landing.vk, landing.tg, landing.mail, 
        landing.address_name, landing.address, landing.map_link]);
    console.log(showLead)

    // const handleSiteNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   const inputValue = e.target.value;
    //   const englishLettersRegExp = /^[a-zA-Z_]+$/i;
    //   if (englishLettersRegExp.test(inputValue)) {
    //     set_site_name(inputValue);}};
    
    return (
    <div className='fixed bottom-0 left-0 right-0 top-0 flex h-full w-full justify-center bg-black/70'>
        <Form 
            action='/landings' 
            encType="multipart/form-data"
            method={type}
            onSubmit={() => setVisibleModal(false)}
            className='grid w-2/3 gap-2 rounded-md bg-stone-100 p-5 overflow-scroll'
        >
            <div className='absolute top-10 right-2 bg-transparent border-none flex justify-between'>
                <button className='btn text-stone-100 text-2xl hover:bg-green-700 mr-5' type='submit'>
                    <IoMdCheckmark />
                </button>
                <button onClick={() => setVisibleModal(false)} className='btn hover:bg-red-600 text-stone-100 text-2xl'>
                    <IoMdClose />
                </button>
            </div>
            <div className='w-full'>
                <h1 className='text-xl text-center'>Параметры сайта</h1>
                <label htmlFor='site_name' className='label'>
                    Название сайта (на английском языке)*
                    <img src={photo_sitename} alt='photo site name' className='max-w-xs my-1'/>
                    <input className='input w-2/3' type='text' required={true} name='site_name' 
                    placeholder={'Название сайта...'}
                    value={landing.site_name}
                    onChange={(e) => setLanding({...landing, site_name: e.target.value})}
                    minLength={2} maxLength={30}/>
                    <input type='hidden' name='id_landing' value={id}/>
                </label>
                <label htmlFor='title' className='label'>
                    Название вкладки*
                    <img src={photo_title} alt='photo title' className='max-w-xs my-1'/>
                    <input className='input w-2/3' type='text' required={true} name='title' 
                    placeholder={landing.title ? landing.title : 'Название вкладки...'}
                    value={landing.title}
                    onChange={(e) => setLanding({...landing, title: e.target.value})}
                    minLength={2} maxLength={30}/>
                    <input type='hidden' name='id_landing' value={id}/>
                </label>
                {/* https://codefrontend.com/file-upload-reactjs/ */}
                <label htmlFor='icon' className='label'>
                    Фавикон и логотип
                    <input className='input w-2/3' type='file' name='icon' 
                    id='icon_path'
                    placeholder={'Фавикон и логотип'} 
                    onChange={(e) => 
                            {if (e.target.files) {
                                setLanding({...landing, icon_path: e.target.files[0]})
                                console.log(e.target.files[0].name)
                            }}}
                    //value={landing.icon_path} 
                    // onChange={(e) => 
                    //     {if (e.target.files) {
                    //         setLanding({...landing, icon_path: e.target.files[0].name})
                    //         console.log(e.target.files[0].name)
                    //     }}
                    // }
                    accept="image/png, image/jpeg, image/jpg"/>
                    <input type='hidden' name='id_landing' value={id}/>
                </label>
                <label htmlFor='body_background' className='label'>
                    Цвет фона
                    <input className='input w-1/5 h-10 mt-1' type='color' name='body_background'
                    value={landing.body_background}
                    onChange={(e) => setLanding({...landing, body_background: e.target.value})}
                    />
                    <input type='hidden' name='id_landing' value={id}/>
                </label>

                <button type="button" onClick={() => setShowLead(!showLead)} 
                className={showLead ? 'btn-down text-neutral-400' : 'btn-down text-orange-700 font-bold'}>
                Главный экран<IoIosArrowDown size={20}/>
                </button>
                {(showLead) && (
                    <div className='show'>
                        <label htmlFor='lead_name' className='label'>
                            Заголовок первого экрана
                            <input className='input w-2/3' type='text' name='lead_name' 
                            placeholder={landing.lead_name ? landing.lead_name : 'Заголовок первого экрана'} 
                            value={landing.lead_name} 
                            onChange={(e) => setLanding({...landing, lead_name: e.target.value})} 
                            maxLength={100}/>
                            <input type='hidden' name='id_landing' value={id}/>
                        </label>
                        <label htmlFor='lead_name_color' className='label'>
                            Цвет заголовка первого экрана
                            <input className='input w-1/5 h-10 mt-1' type='color' name='lead_name_color' 
                            placeholder={'Цвет заголовка первого экрана'} 
                            value={landing.lead_name_color}
                            onChange={(e) => setLanding({...landing, lead_name_color: e.target.value})}/>
                            <input type='hidden' name='id_landing' value={id}/>
                        </label>
                        <label htmlFor='lead_subtitle' className='label'>
                            Подзаголовок первого экрана
                            <input className='input w-2/3' type='text' name='lead_subtitle' 
                            placeholder={'Подзаголовок первого экрана'} 
                            value={landing.lead_subtitle} 
                            onChange={(e) => setLanding({...landing, lead_subtitle: e.target.value})} 
                            maxLength={100}/>
                            <input type='hidden' name='id_landing' value={id}/>
                        </label>
                        <label htmlFor='lead_subtitle_color' className='label'>
                            Цвет подзаголовка первого экрана
                            <input className='input w-1/5 h-10 mt-1' type='color' name='lead_subtitle_color' 
                            placeholder={'Цвет подзаголовка первого экрана'} 
                            value={landing.lead_subtitle_color} 
                            onChange={(e) => setLanding({...landing, lead_subtitle_color: e.target.value})}/>
                            <input type='hidden' name='id_landing' value={id}/>
                        </label>
                        <label htmlFor='lead' className='label'>
                            Фотография-фон первого экрана
                            <input className='input w-2/3' type='file' name='lead' 
                            placeholder={'Фотография-фон первого экрана'} 
                            //value={lead_photo_path} 
                            onChange={(e) => 
                                    {if (e.target.files) {
                                        setLanding({...landing, lead_photo_path: e.target.files[0]})
                                        console.log(e.target.files[0].name)
                                    }}} 
                            accept="image/png, image/jpeg, image/jpg"/>
                            <input type='hidden' name='id_landing' value={id}/>
                        </label>
                    </div>
                )}
                
                <label htmlFor='name_color' className='label'>
                    Цвет заголовков сайта
                    <input className='input w-1/5 h-10 mt-1' type='color' name='name_color' 
                    placeholder={'Цвет заголовков сайта'} 
                    value={landing.name_color} 
                    onChange={(e) => setLanding({...landing, name_color: e.target.value})}/>
                    <input type='hidden' name='id_landing' value={id}/>
                </label>
                <label htmlFor='text_color' className='label'>
                    Цвет текстов на сайте
                    <input className='input w-1/5 h-10 mt-1' type='color' name='text_color' 
                    placeholder={'Цвет текстов на сайте'} 
                    value={landing.text_color} 
                    onChange={(e) => setLanding({...landing, text_color: e.target.value})}/>
                    <input type='hidden' name='id_landing' value={id}/>
                </label>
                
                <button type="button" onClick={() => setShowAbout(!showAbout)} 
                className={showAbout ? 'btn-down text-neutral-400' : 'btn-down text-orange-700 font-bold'}>
                О проекте <IoIosArrowDown size={20}/>
                </button>
                {(showAbout) && (
                    <div className='show'>
                        <label htmlFor='about_name' className='label'>
                            Название раздела О проекте
                            <input className='input w-2/3' type='text' name='about_name' 
                            placeholder={'Название раздела О проекте'} 
                            value={landing.about_name} 
                            onChange={(e) => setLanding({...landing, about_name: e.target.value})} 
                            maxLength={100}/>
                            <input type='hidden' name='id_landing' value={id}/>
                        </label>
                        <label htmlFor='about_text' className='label'>
                            Описание проекта
                            <textarea className='input w-2/3 resize-y max-h-52' name='about_text' 
                            placeholder={'Описание проекта'} 
                            value={landing.about_text} 
                            onChange={(e) => setLanding({...landing, about_text: e.target.value})} 
                            maxLength={500}/>
                            <input type='hidden' name='id_landing' value={id}/>
                        </label>
                        <label htmlFor='about' className='label'>
                            Фотография для раздела О вашем проекте
                            <input className='input w-2/3' type='file' name='about' 
                            placeholder={'Фотография для раздела О вашем проекте'} 
                            //value={about_photo_path} 
                            onChange={(e) => 
                                    {if (e.target.files) {
                                        setLanding({...landing, about_photo_path: e.target.files[0]})
                                        console.log(e.target.files[0].name)
                                    }}} 
                            accept="image/png, image/jpeg, image/jpg"/>
                            <input type='hidden' name='id_landing' value={id}/>
                        </label>
                    </div>)}
                
                <button type="button" onClick={() => setShowClient(!showClient)} 
                className={showClient ? 'btn-down text-neutral-400' : 'btn-down text-orange-700 font-bold'}>
                Клиенты <IoIosArrowDown size={20}/>
                </button>
                {(showClient) && (
                    <div className='show'>
                        <label htmlFor='client_name' className='label'>
                            Название раздела Клиенты
                            <input className='input w-2/3' type='text' name='client_name' 
                            placeholder={'Название раздела Клиенты'} 
                            value={landing.client_name} 
                            onChange={(e) => setLanding({...landing, client_name: e.target.value})} 
                            maxLength={100}/>
                            <input type='hidden' name='id_landing' value={id}/>
                        </label>
                        <label htmlFor='client_list' className='label'>
                            Перечисление клиентов
                            <input className='input w-2/3' type='text' name='client_list' 
                            placeholder={'Перечисление клиентов'} 
                            value={landing.client_list} 
                            onChange={(e) => setLanding({...landing, client_list: e.target.value})} 
                            maxLength={500}/>
                            <input type='hidden' name='id_landing' value={id}/>
                        </label>
                    </div>)}
                
                <button type="button" onClick={() => setShowGallery(!showGallery)} 
                className={showGallery ? 'btn-down text-neutral-400' : 'btn-down text-orange-700 font-bold'}>
                Фото <IoIosArrowDown size={20}/>
                </button>
                {(showGallery) && (
                    <div className='show'>
                        <label htmlFor='photo_name' className='label'>
                            Название раздела Фото
                            <input className='input w-2/3' type='text' name='photo_name' 
                            placeholder={'Название раздела Фото'} 
                            value={landing.photo_name} 
                            onChange={(e) => setLanding({...landing, photo_name: e.target.value})} 
                            maxLength={100}/>
                            <input type='hidden' name='id_landing' value={id}/>
                        </label>
                        <label htmlFor='gallery' className='label'>
                            Фото
                            <input className='input w-2/3' type='file' name='gallery' 
                            placeholder={'Фото'}
                            onChange={
                                (e) => 
                                {if (e.target.files) {
                                    const fileNames = Array.from(e.target.files).map((file) => file.name);
                                    const jsonFileNames = JSON.stringify(fileNames);
                                    console.log(fileNames, jsonFileNames)
                                    setLanding({ ...landing, gallery_list_path: jsonFileNames });
                                }}
                            } 
                            accept="image/png, image/jpeg, image/jpg"
                            multiple={true}/>
                            <input type='hidden' name='id_landing' value={id}/>
                        </label>
                    </div>)}
                
                <button type="button" onClick={() => setShowPlus(!showPlus)} 
                className={showPlus ? 'btn-down text-neutral-400' : 'btn-down text-orange-700 font-bold'}>
                Преимущества <IoIosArrowDown size={20}/>
                </button>
                {(showPlus) && (
                        <div className='show'>
                        <label htmlFor='plus_name' className='label'>
                            Название раздела Преимущества
                            <input className='input w-2/3' type='text' name='plus_name' 
                            placeholder={'Название раздела Преимущества'} 
                            value={landing.plus_name} 
                            onChange={(e) => setLanding({...landing, plus_name: e.target.value})} 
                            maxLength={100}/>
                            <input type='hidden' name='id_landing' value={id}/>
                        </label>
                        <label htmlFor='plus_list' className='label'>
                            Перечисление преимуществ
                            <input className='input w-2/3' type='text' name='plus_list' 
                            placeholder={'Перечисление преимуществ'} 
                            value={landing.plus_list} 
                            onChange={(e) => setLanding({...landing, plus_list: e.target.value})} 
                            maxLength={500}/>
                            <input type='hidden' name='id_landing' value={id}/>
                        </label>
                    </div>)}
                
                <button type="button" onClick={() => setShowPlan(!showPlan)} 
                className={showPlan ? 'btn-down text-neutral-400' : 'btn-down text-orange-700 font-bold'}>
                Преимущества <IoIosArrowDown size={20}/>
                </button>
                {(showPlan) && (
                        <div className='show'>
                            <label htmlFor='plan_name' className='label'>
                                Название раздела Этапы работы
                                <input className='input w-2/3' type='text' name='plan_name' 
                                placeholder={'Название раздела Этапы работы'} 
                                value={landing.plan_name} 
                                onChange={(e) => setLanding({...landing, plan_name: e.target.value})} 
                                maxLength={100}/>
                                <input type='hidden' name='id_landing' value={id}/>
                            </label>
                            <label htmlFor='plan_list' className='label'>
                                Перечисление этапов работы
                                <input className='input w-2/3' type='text' name='plan_list' 
                                placeholder={'Перечисление этапов работы'} 
                                value={landing.plan_list} 
                                onChange={(e) => setLanding({...landing, plan_list: e.target.value})} 
                                maxLength={500}/>
                                <input type='hidden' name='id_landing' value={id}/>
                            </label>
                        </div>)}
                
                <button type="button" onClick={() => setShowPlan(!showPlan)} 
                className={showPlan ? 'btn-down text-neutral-400' : 'btn-down text-orange-700 font-bold'}>
                Этапы работы <IoIosArrowDown size={20}/>
                </button>
                {(showPlan) && (
                        <div className='show'>    
                            <label htmlFor='button_name' className='label'>
                                Название раздела Призыв
                                <input className='input w-2/3' type='text' name='button_name' 
                                placeholder={'Название раздела Призыв'} 
                                value={landing.button_name} 
                                onChange={(e) => setLanding({...landing, button_name: e.target.value})} 
                                maxLength={100}/>
                                <input type='hidden' name='id_landing' value={id}/>
                            </label>
                            <label htmlFor='button_list' className='label'>
                                Перечисление призывов
                                <input className='input w-2/3' type='text' name='button_list' 
                                placeholder={'Перечисление призывов'} 
                                value={landing.button_list} 
                                onChange={(e) => setLanding({...landing, button_list: e.target.value})} 
                                maxLength={500}/>
                                <input type='hidden' name='id_landing' value={id}/>
                            </label>
                        </div>)}

                <button type="button" onClick={() => setShowContact(!showContact)} 
                className={showContact ? 'btn-down text-neutral-400' : 'btn-down text-orange-700 font-bold'}>
                Контакты <IoIosArrowDown size={20}/>
                </button>
                {(showContact) && (
                <div className='show'>     
                    <label htmlFor='contact_name' className='label'>
                        Название раздела Контакты<input className='input w-2/3' type='text' name='contact_name' 
                        placeholder={'Название раздела Контакты'} 
                        value={landing.contact_name} 
                        onChange={(e) => setLanding({...landing, contact_name: e.target.value})} 
                        maxLength={100}/>
                        <input type='hidden' name='id_landing' value={id}/>
                    </label>
                    <label htmlFor='contact_text' className='label'>
                        Текст раздела Контакты
                        <input className='input w-2/3' type='text' name='contact_text' 
                        placeholder={'Текст раздела Контакты'} 
                        value={landing.contact_text} 
                        onChange={(e) => setLanding({...landing, contact_text: e.target.value})} 
                        maxLength={500}/>
                        <input type='hidden' name='id_landing' value={id}/>
                    </label>
                    <label htmlFor='phone_number' className='label'>
                        Телефон
                        <input className='input w-2/3' type='text' name='phone_number' 
                        placeholder={'Телефон'} 
                        value={landing.phone_number} 
                        onChange={(e) => setLanding({...landing, phone_number: e.target.value})} 
                        maxLength={20}/>
                        <input type='hidden' name='id_landing' value={id}/>
                    </label>
                    <label htmlFor='vk' className='label'>
                        ВК
                        <input className='input w-2/3' type='text' name='vk' 
                        placeholder={'ВК'} 
                        value={landing.vk} 
                        onChange={(e) => setLanding({...landing, vk: e.target.value})} 
                        maxLength={100}/>
                        <input type='hidden' name='id_landing' value={id}/>
                    </label>
                    <label htmlFor='tg' className='label'>
                        ТГ
                        <input className='input w-2/3' type='text' name='tg' 
                        placeholder={'ТГ'} 
                        value={landing.tg} 
                        onChange={(e) => setLanding({...landing, tg: e.target.value})} 
                        maxLength={100}/>
                        <input type='hidden' name='id_landing' value={id}/>
                    </label>
                    <label htmlFor='mail' className='label'>
                        Электронная почта
                        <input className='input w-2/3' type='text' name='mail' 
                        placeholder={'Электронная почта'} 
                        value={landing.mail} 
                        onChange={(e) => setLanding({...landing, mail: e.target.value})} 
                        maxLength={100}/>
                        <input type='hidden' name='id_landing' value={id}/>
                    </label>
                </div>)}    

                <button type="button" onClick={() => setShowAddress(!showAddress)} 
                className={showAddress ? 'btn-down text-neutral-400' : 'btn-down text-orange-700 font-bold'}>
                Адрес <IoIosArrowDown size={20}/>
                </button>
                {(showAddress) && (
                <div className='show'>
                    <label htmlFor='address_name' className='label'>
                        Название раздела Адрес
                        <input className='input w-2/3' type='text' name='address_name' 
                        placeholder={'Название раздела Адрес'} 
                        value={landing.address_name} 
                        onChange={(e) => setLanding({...landing, address_name: e.target.value})} 
                        maxLength={100}/>
                        <input type='hidden' name='id_landing' value={id}/>
                    </label>
                    <label htmlFor='address' className='label'>
                        Физический адрес
                        <input className='input w-2/3' type='text' name='address' 
                        placeholder={'Физический адрес'} 
                        value={landing.address} 
                        onChange={(e) => setLanding({...landing, address: e.target.value})} 
                        maxLength={100}/>
                        <input type='hidden' name='id_landing' value={id}/>
                    </label>
                    <label htmlFor='map_link' className='label'>
                        Ссылка на адрес
                        <input className='input w-2/3' type='text' name='map_link' 
                        placeholder={'Ссылка на адрес'} 
                        value={landing.map_link} 
                        onChange={(e) => setLanding({...landing, map_link: e.target.value})} 
                        maxLength={100}/>
                        <input type='hidden' name='id_landing' value={id}/>
                    </label>
                </div>)}
            </div>
        </Form>
    </div>
  )
}

export default LandingModal
