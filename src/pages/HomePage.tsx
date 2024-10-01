import React from 'react'
import { useTranslation } from 'react-i18next'
import LandingHomePage from '../components/LandingHomePage'
const HomePage = () => {
  const [t, i18n] = useTranslation("global")
  return (
    <div className='h-1000 bg-black' style={{height: '1000vh'}}>
      {t('Home')}
      <LandingHomePage />
        
    </div>
  )
}

export default HomePage
