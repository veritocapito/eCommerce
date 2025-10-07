import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer title={"Nuestros productos"} />}
          />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
