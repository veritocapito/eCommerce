import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartProvider";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer title={"Bienvenidos"} />}
            />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
