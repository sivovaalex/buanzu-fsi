import { FC } from 'react'
import lead from '../assets/home/lead.png'
import about from '../assets/home/about.png'
import img0 from '../assets/home/file_140.jpg'
import img1 from '../assets/home/file_141.jpg'
import img2 from '../assets/home/file_142.jpg'
import logoFsi from '../assets/home/logo_fasie.png'
import logoUn from '../assets/home/logo_un.png'
import buanzu_logo from '../assets/home/buanzu_logo.png'
import '../assets/home.css'
import { PiTelegramLogoThin } from "react-icons/pi"
import { SlSocialVkontakte } from "react-icons/sl"
import { MdStart } from "react-icons/md"

const Home: FC = () => {
  return (
    <div>
      <section className='home'>
        <div className="home_text">
          <div className="home_header text-orange-700">Буанзу</div>
          <h1 className="text-neutral-800 text-3xl">Легкий и быстрый способ создать лендинг (одностраничный сайт) для вашего проекта или бизнеса без привлечения разработчиков и траты огромных бюджетов</h1>
        </div>
        <div className="home_photo"><img src={lead} alt="Фото лида"/></div>
      </section>
      <section className="about" id="about">
        <div className="inner">
          <h1 className="name font-exo2">О Буанзу</h1>
          <div className="about_container">
            <div className="about_text">
              <img
                src={about}
                alt="Фото"
                className="about_photo"
              />
              Большинству российских проектов необходима эффективная и доступная
              платформа для создания веб-сайтов. Мы хотим помочь повысить свою
              конкурентоспособность и узнаваемость лидерам проектов, которым не
              хватает навыков и средств для создания сайтов. Поэтому представляем
              нашу уникальную интернет-платформу - Буанзу. Буанзу предоставляет
              удобный и быстрый способ создания лендингов (одностраничных сайтов) из
              опросника в Телеграмме.
              <br />
              Теперь вам понадобится всего лишь один час, чтобы создать свой
              собственный лендинг!
            </div>
          </div>
        </div>
      </section>
      <section className="client" id="client">
        <div className="inner">
          <h1 className="name">Наши клиенты</h1>
          <ul className="border" style={{ color: "#8A4E36" }}>
            <li>организаторы мероприятий и клубов</li>
            <li>руководители организаций</li>
            <li>соискатели</li>
            <li>кто мечтает оставить след в цифровом пространстве</li>
          </ul>
        </div>
      </section>
      <section className="gallery" id="gallery">
        <div className="inner">
          <h1 className="name">Фото</h1>
          <div className="gallery">
            <div className="gallery_photo">
              <img src={img2} alt="photo" />
            </div>
            <div className="gallery_photo">
              <img src={img0} alt="photo" />
            </div>
            <div className="gallery_photo">
              <img src={img1} alt="photo" />
            </div>
          </div>
        </div>
      </section>
      <section className="plus" id="plus">
        <div className="inner">
          <h1 className="name">Преимущества</h1>
          <div className="card-container" style={{ color: "#8A4E36" }}>
            <div className="card">
              <h2 style={{ color: "#222126" }}>Доступно</h2>
              <p style={{ color: "#c95434" }}>
                не требуются специальные навыки (программирования, конструкторов сайта)
              </p>
            </div>
            <div className="card">
              <h2 style={{ color: "#222126" }}>Бесплатно</h2>
              <p style={{ color: "#c95434" }}>
                цена 0 рублей с возможностью оставить пожертвование на развитие 🤗
              </p>
            </div>
            <div className="card">
              <h2 style={{ color: "#222126" }}>Быстро</h2>
              <p style={{ color: "#c95434" }}>
                вам понадобится всего лишь один час, чтобы создать собственный лендинг
              </p>
            </div>
            <div className="card">
              <h2 style={{ color: "#222126" }}>Эффективно</h2>
              <p style={{ color: "#c95434" }}>
                получите значительное конкурентное преимущество и увеличите приток целевой аудитории
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="plan" id="plan">
        <div className="inner">
          <h1 className="name">Этапы работы</h1>
          <ol className="bullet" style={{ color: "#8A4E36" }}>
            <li>Войти или зарегистрироваться на buanzu</li>
            <li>Ознакомиться с инструкцией</li>
            <li>Пройти опрос о вашем проекте</li>
            <li>Получить долгожданный сайт</li>
          </ol>
        </div>
      </section>
      <section className="inner" id="button_start">
        <div className="inner">
          <h1 className="name">
            Создать сайт без специальных навыков
          </h1>
          <a
            href="/auth"
            className="button_start"
            style={{
              border: "2px solid #C95434",
              boxShadow: "7px 7px 7px #C95434",
              color: "#C95434"
            }}
          >
            Начать <MdStart size={34} style={{ margin: "auto" }} />
          </a>
          <br />
        </div>
      </section>
      <section className="contact" id="contact">
        <h1 className="name">Контакты</h1>
        <div>
          <div
            className="about_text"
            style={{ textAlign: "center" }}
          >
            Присоединяйтесь к нам в социальных сетях и будьте в курсе всех наших
            новостей и предложений.
            <br />
            Мы с нетерпением ждем вас!
          </div>
          <ul className="social-icons" style={{ color: "#c95434" }}>
            <li>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <a href="https://vk.com/buanzu_landing" target="_blank">
                        <SlSocialVkontakte className='text-5xl text-blue-700'/>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-neutral-800'>@buanzu_landing</td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <a href="https://t.me/buanzu_landing" target="_blank">
                        <PiTelegramLogoThin className='text-5xl text-sky-500'/>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className='text-neutral-800'>@buanzu_landing</td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ul>
        </div>
      </section>
      <section className="partners" id="partners">
        <div className="inner">
          <h1 className="name">
            Проект реализовывается при поддержки
          </h1>
          <div className="partners_wrap">
            <a href="https://www.fasie.ru">
              <img className="image" src={logoFsi} />
            </a>
            <a href="https://univertechpred.ru/">
              <img className="image" src={logoUn} />
            </a>
          </div>
        </div>
      </section>
      <section className="address" id="address">
        <div className="inner">
          <div className="foottable">
            {/* <div className="td"> */}
              <h1 className="name">АДРЕС</h1>
              <br />
              <p className='text-neutral-800 text-center text-xl'>
                Создавайте лендинги из любой точки России
              </p>
            {/* </div> */}
            <br />
            <iframe
              src="https://yandex.ru/map-widget/v1/-/CDQ8IFON"
              frameBorder={1}
              allowFullScreen={true}
              className='cart'
            />
          </div>
        </div>
      </section>
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
  )
}

export default Home