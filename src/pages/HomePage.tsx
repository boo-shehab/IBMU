import React from 'react'
import { useTranslation } from 'react-i18next'
const HomePage = () => {
  const [t, i18n] = useTranslation("global")
  return (
    <div className='h-100' style={{height: '100vh'}}>
      {t('Home')}
    </div>
  )
}

export default HomePage
