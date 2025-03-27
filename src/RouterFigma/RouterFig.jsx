import React, { useContext } from 'react'
import Home from '../FigmaConponent/Home'
import Carusel from '../FigmaConponent/Carusel'
import Products from '../FigmaConponent/Products'
import Rooms from '../FigmaConponent/Rooms'
import Tips from '../FigmaConponent/Tips'
import Future from '../FigmaConponent/Future'
import Footer from '../FigmaConponent/Footer'
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationEn from '../FigmaConponent/locale/TranslationEn'
import translationUz from '../FigmaConponent/locale/TranslationUz'



i18next.use(initReactI18next).init({
  resources:{ // ✅ to‘g‘ri
    en:{translation:translationEn},
    uz:{translation:translationUz}
  },
  lng:'en',
  fallbackLng:'en'
})




const RouterFig = () => {


  return (

    <>
    
    <>
    <Home/>
    <Carusel/>
    <Products/>
    <Rooms/>
    <Tips/>
    <Future/>
    <Footer/>
    </>
    </>
  )
}

export default RouterFig