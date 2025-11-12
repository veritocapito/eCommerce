import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartProvider";
import Cart from "./components/Cart/Cart";
import ProductFormContainer from "./components/adminComponents/ProductFormContainer/ProductFormContainer";
import MainLayout from "./layout/MainLayout";
import AdminLayout from "./layout/AdminLayout";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route element={<MainLayout />}>
              <Route
                path="/"
                element={<ItemListContainer title={"Bienvenidos"} />}
              />
              <Route
                path="/category/:category"
                element={<ItemListContainer title={"MVD Colección"} />}
              />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
            </Route>

            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<Login />} />
              <Route path="alta-productos" 
                element={<ProtectedRoute>
                  <ProductFormContainer />
                </ProtectedRoute>}
              />
            </Route>
{/*             <Route path="/admin" element={<ProductFormContainer />} /> */}
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
