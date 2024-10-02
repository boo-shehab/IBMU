import React from 'react'
import { images } from '../assets/images/image-data'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div className='container px-4 py-16'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
        
        {/* Image Section */}
        <div className='lg:col-span-5'>
          <img src={images[0].url} alt="Business Image" className='rounded-lg shadow-lg w-full' />
        </div>

        {/* Text Section */}
        <div className='lg:col-span-7'>
          <h2 className='text-gray-700 text-xl font-semibold mb-4'>من نحن</h2>
          
          {/* Horizontal Line */}
          <div className='w-16 h-[2px] bg-yellow-600 mb-6'></div>

          <h1 className='text-3xl font-bold mb-6'>الاتحاد الدولي لرجال وسيدات الأعمال</h1>
          <p className='text-lg leading-7 text-gray-600 mb-8'>
            الاتحاد الدولي لرجال وسيدات الأعمال هو منظمة اقتصادية غير ربحية تأسست في الولايات المتحدة
            الأمريكية. يهدف الاتحاد إلى تقديم مجموعة واسعة من الخدمات الاقتصادية والإدارية
            والقانونية لأعضائه، بهدف تسهيل عملهم وتأمين متطلباتهم.
            <br /><br />
            نعمل على خدمة الأعضاء من خلال فريق عمل ذي خبرة عالية في مجال الأعمال، والشركاء
            والموردين العالميين الذين تم اختيارهم بعناية وفق أرقى المعايير. يتيح لكم الانضمام
            إلى الاتحاد تعزيز شبكة علاقاتكم والتعرف على نخبة كبيرة من رجال وسيدات الأعمال من
            شتى أنحاء العالم، والعمل معهم تحت شعار: معاً نبني عالماً جديداً.
          </p>
          <Link to="/" className='text-yellow-600 font-semibold hover:underline'>
            اقراء المزيد عن الاتحاد
          </Link>
        </div>

      </div>
    </div>
  )
}

export default AboutUs
