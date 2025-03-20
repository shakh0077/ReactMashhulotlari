import React, { useContext } from 'react'
import Home from '../FigmaConponent/Home'
import Carusel from '../FigmaConponent/Carusel'
import Products from '../FigmaConponent/Products'
import Rooms from '../FigmaConponent/Rooms'
import Tips from '../FigmaConponent/Tips'
import Future from '../FigmaConponent/Future'
import Footer from '../FigmaConponent/Footer'
import { ThemeContext } from '../Context/GlobalContext'
import ThemeToggle from '../AntDesign/ThemeToggle'




const RouterFig = () => {

 const {theme, setTheme, lang, setLang } = useContext(ThemeContext)
 console.log(theme,lang,)
  return (

    <>
    <div>
    <Home/>
    <ThemeToggle/>
    <Carusel/>
    <Products/>
    <Rooms/>
    <Tips/>
    <Future/>
    <Footer/>
 
    </div>
    </>
  )
}

export default RouterFig