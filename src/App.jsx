//import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {



  return (
    <>
      <Header />
      <ItemListContainer title={"Nuestros productos"} /> 
      <Footer />
    </>
  )
}

export default App
