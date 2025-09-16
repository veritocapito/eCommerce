//import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  //const [count, setCount] = useState(0)

  //PROVISORAMENTE
  const arrayProductos = [
    {
      id: 1,
      nombre: "Remera",
      precio: 20000,
      descripcion: "Remera de algodon",
    },
    {
      id: 2,
      nombre: "Pantalon",
      precio: 80000,
      descripcion: "Pantalon de jean",
    },
    {
      id: 3,
      nombre: "zapatillas",
      precio: 110000,
      descripcion: "Zapatillas deportivas",
    },
  ];

  return (
    <>
      <Header />
      <ItemListContainer titulo={"Nuestros productos"} productos={arrayProductos} /> 
      <Footer />
    </>
  )
}

export default App
