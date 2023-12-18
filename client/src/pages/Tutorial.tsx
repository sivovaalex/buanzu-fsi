import {FC} from 'react'

const Tutorial: FC = () => {
  const steps = ['Пройти опрос о вашем проекте',
                'Получить долгожданный сайт',
                'Скачать архив с сайтов и опубликовать самостоятельно или нажав "Опубликовать"']
  return (
    <>
        <div className='max-w-[1000px] block m-auto bg-stone-200 mt-10 p-4 rounded-md'>
            <h1 className='text-3xl'>Инструкция</h1>
            <div className='text-lg text-neutral-800 my-5'>
              {steps.map((step, index) => (<li key={index} className='py-2'>{step}</li>))}
            </div>
        </div>
    </>
  )
}

export default Tutorial