//import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {



  return (
    <>
      <Header />
      {/* <ItemListContainer title={"Nuestros productos"} /> */}
      <ItemDetailContainer />
      <Footer />
    </>
  )
}

export default App
