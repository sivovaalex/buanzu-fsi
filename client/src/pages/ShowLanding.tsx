import { FC, useState } from 'react'
import '../assets/home.css'
import buanzu_logo from '../assets/home/buanzu_logo.png'
import {landingById} from '../services/landing.service'
import { useLocation } from "react-router-dom";
import { PiTelegramLogoThin } from "react-icons/pi"
import { SlSocialVkontakte } from "react-icons/sl"
import { MdStart } from "react-icons/md"
import { PiPhoneThin } from "react-icons/pi";
import { CiMail } from "react-icons/ci";


interface IShowLanding {
    id: number
}



const ShowLanding: FC = () => {
    const [landing, setLanding] = useState({
        site_name: '',
        title : '',
        icon_path : '',
        body_background : '#f5f5f4',
        lead_name : '',
        lead_name_color : '#c95433',
        lead_subtitle : '',
        lead_subtitle_color : '#222126',
        lead_photo_path : '',
        name_color : '#c95433',
        text_color : '#222126',
        about_name : '',
        about_text : '',
        about_photo_path : '',
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
    });
    const location = useLocation();
    let landingId = location.state.id_landing;
    const landingbyid = landingById(landingId);
    const el = landingbyid.then(function(result) {
        setLanding({
            ...landing,
            site_name: result.site_name || '',
            title: result.title || '',
            icon_path: result.icon_path || '',
            body_background: result.body_background || '',
            lead_name: result.lead_name || '',
            lead_name_color: result.lead_name_color || '',
            lead_subtitle: result.lead_subtitle || '',
            lead_subtitle_color: result.lead_subtitle_color || '',
            lead_photo_path: result.lead_photo_path || '',
            name_color: result.name_color || '',
            text_color: result.text_color || '',
            about_name: result.about_name || '',
            about_text: result.about_text || '',
            about_photo_path: result.about_photo_path || '',
            client_name: result.client_name || '',
            client_list: result.client_list || '',
            photo_name: result.photo_name || '',
            gallery_list_path: result.gallery_list_path || '',
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
      }, function(err) {
        console.log(err);
      });
    return (
        <div className='my-5'>
            <div><h1 className='text-3xl text-center'>{landing.site_name} ({landing.title})</h1></div>
            <div className='border-neutral-800 border-solid border-2 my-5'>
                {landing.lead_name!=="" && 
                <section className='home'>
                <div className="home_text">
                    <div className="home_header" style={{ color: landing.lead_name_color }}>{landing.lead_name}</div>
                    {landing.lead_subtitle!=="" && <h1 className="text-3xl" style={{ color: landing.lead_subtitle_color }}>{landing.lead_subtitle}</h1>}
                    {/* <div className="home_photo"><img src={lead} alt="Фото лида"/></div> */}
                </div></section>}

                {landing.about_name!=="" &&
                      <section className="about" id="about">
                      <div className="inner">
                        <h1 className="name font-exo2" style={{ color: landing.name_color }}>{landing.about_name}</h1>
                        {landing.about_text!=="" && 
                            <div className="about_container">
                                <div className="about_text" style={{ color: landing.text_color }}>
                                {/* <img src={about} alt="Фото" className="about_photo" /> */}
                                {landing.about_text}
                                </div>
                            </div>}
                      </div>
                </section>}

                {landing.client_name!=="" &&
                <section className="client" id="client">
                <div className="inner">
                  <h1 className="name" style={{ color: landing.name_color }}>{landing.client_name}</h1>
                    {landing.client_list!=="" &&
                    <ul className="border" style={{ color: landing.text_color }}>
                        {landing.client_list.split(";").map(client => <li>{client}</li>)}
                    </ul>}
                </div>
              </section>}

        {landing.photo_name!=="" &&
        <section className="gallery" id="gallery">
        <div className="inner">
          <h1 className="name" style={{ color: landing.name_color }}>{landing.photo_name}</h1>
            {/* <div className="gallery">
            <div className="gallery_photo">
              <img src={img2} alt="photo" />
            </div>
            <div className="gallery_photo">
              <img src={img0} alt="photo" />
            </div>
            <div className="gallery_photo">
              <img src={img1} alt="photo" />
            </div>
          </div> */}
        </div></section>}
      {landing.plus_name!=="" &&
      <section className="plus" id="plus">
      <div className="inner">
        <h1 className="name" style={{ color: landing.name_color }}>{landing.plus_name}</h1>
        {landing.plus_list!=="" &&
        <div className="card-container" style={{ color: "#8A4E36" }}>
            {landing.plus_list.split(";").map(plus => 
            <div className="card">
                {(plus.includes("(") && plus.includes(")")) ? 
                <div className="card">
                    <h2 style={{ color: landing.name_color }}>{plus.match(/^(.*?)\((.*?)\)$/)?.[1] ?? ''}</h2>
                    <p style={{ color: landing.text_color }}>{plus.match(/^(.*?)\((.*?)\)$/)?.[2] ?? ''}</p>
                </div>
                : <div className="card"><h2 style={{ color: landing.name_color }}>{plus}</h2></div>}
            </div>
            )}
        </div>
        }
        </div></section>}

        {landing.plan_name!=="" &&
        <section className="plan" id="plan">
        <div className="inner">
          <h1 className="name" style={{ color: landing.name_color }}>{landing.plan_name}</h1>
          {landing.plan_list!=="" &&
          <ol className="bullet" style={{ color: landing.text_color }}>
            {landing.plan_list.split(";").map(plan => <li>{plan}</li>)}
          </ol>}
        </div></section>}

      {landing.button_name!=="" &&
      <section className="inner" id="button_start">
        <div className="inner">
          <h1 className="name" style={{ color: landing.name_color }}>{landing.button_name}</h1>
          {landing.button_list!=="" &&
          landing.button_list.split(";").map(but => 
            (but.includes("(") && but.includes(")")) &&
            <a
            href={but.match(/^(.*?)\((.*?)\)$/)?.[2] ?? ''}
            className="button_start"
            style={{
              border: "2px solid #C95434",
              boxShadow: "7px 7px 7px #C95434",
              color: "#C95434"
            }}
          >{but.match(/^(.*?)\((.*?)\)$/)?.[1] ?? ''}</a>
          )
          }
        </div>
      </section>}

    {landing.contact_name!=="" &&
      <section className="contact" id="contact">
        <h1 className="name" style={{ color: landing.name_color }}>{landing.contact_name}</h1>
        <div>
          {landing.contact_text!=="" &&
          <div className="about_text" style={{ textAlign: "center", color: landing.text_color }}>
            {landing.contact_text}
          </div>}
          {(landing.phone_number!=="" || landing.vk!=="" || landing.tg!=="" || landing.mail!=="") &&
          <ul className="social-icons" style={{ color: "#c95434" }}>
            {landing.phone_number!=="" && 
            <li>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a href={"tel:+7"+landing.phone_number} target="_blank">
                      <PiPhoneThin className='text-5xl' style={{ color: landing.name_color}}/>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="lowercase" style={{ color: landing.text_color }}>+7{landing.phone_number}</td>
                </tr>
              </tbody>
            </table>
          </li>}
            {landing.vk!=="" &&
                <li>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <a href={"https://vk.com/"+landing.vk} target="_blank">
                        <SlSocialVkontakte className='text-5xl' style={{ color: landing.name_color}}/>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="lowercase" style={{ color: landing.text_color }}>@{landing.vk}</td>
                  </tr>
                </tbody>
              </table>
            </li>}
            {landing.tg!=="" &&
            <li>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <a href={"https://t.me/"+landing.tg} target="_blank">
                        <PiTelegramLogoThin className='text-5xl' style={{ color: landing.name_color}}/>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="lowercase" style={{ color: landing.text_color }}>@{landing.tg}</td>
                  </tr>
                </tbody>
              </table>
            </li>}
            {landing.mail!=="" &&
            <li>
            <table>
              <tbody>
                <tr>
                  <td>
                    <a href={"mailto:"+landing.mail} target="_blank">
                      <CiMail className='text-5xl' style={{ color: landing.name_color}}/>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="lowercase" style={{ color: landing.text_color }}>{landing.mail}</td>
                </tr>
              </tbody>
            </table>
          </li>}
          </ul>}
        </div>
      </section>}
    {landing.address_name!=="" &&
      <section className="address" id="address">
        <div className="inner">
          <div className="foottable">
              <h1 className="name" style={{ color: landing.name_color }}>{landing.address_name}</h1>
              <br />
              {landing.address!=="" &&
              <p className='text-center text-xl' style={{ color: landing.text_color }}>{landing.address}</p>
              }
            <br />
            {landing.map_link!=="" &&
            <iframe
            src={"https://yandex.ru/map-widget/v1/-/"+landing.map_link}
            frameBorder={1}
            allowFullScreen={true}
            className='cart'
          />}
          </div>
        </div>
      </section>}

      <footer>
        <div className="container_footer">
          <div className="icon-container">
            <a href="https://t.me/buanzu_landing" target="_blank" className='text-3xl mr-3 text-stone-100'>
              <PiTelegramLogoThin />
            </a>
            <a href="https://vk.com/buanzu_landing" target="_blank" className='text-3xl text-stone-100'>
              <SlSocialVkontakte />
            </a>
          </div>
          <div className="text-container">
            <p>
              Создано в платформе для создания лендингов без специальных навыков Буанзу
            </p>
          </div>
          <a href="https://buanzu.ru" target="_blank">
            <img src={buanzu_logo} alt="Фото" className="photo_logo" />
          </a>
        </div>
      </footer>
            </div>   
    </div>
    )
}


export default ShowLanding