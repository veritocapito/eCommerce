import { useState } from "react";
import ProductFormUI from "../ProductFormUI/ProductFormUI";
import { validateProducts } from "../../../utils/validateProducts";
import { uploadToImgbb } from "../../../services/uploadImage";
import { createProduct } from "../../../services/productService";

import "../ProductFormContainer/ProductFormContainer.css";

const ProductFormContainer = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("Campo cambiado:", name, value);
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("✅ handleSubmit ejecutado");
    console.log("Producto antes de enviar:", product);
    console.log("Archivo:", file);
    setErrors({});
    setLoading(true);

    try {
      console.log("🔍 Validando producto...");
      const newErrors = validateProducts({ ...product, file });
      console.log("Errores de validación:", newErrors);

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        setLoading(false);
        return;
      }

      let imageUrl = null;

      if (file) {
        console.log("📤 Subiendo imagen a ImgBB...");
        imageUrl = await uploadToImgbb(file);
        console.log("URL de imagen:", imageUrl);
      }
      const productData = {
        ...product,
        price: Number(product.price),
        imageUrl,
      };

      console.log("📨 Enviando a API:", productData);
      const response = await createProduct(productData);
      console.log("✅ Respuesta de API:", response);

      alert("Producto creado con éxito!");
      setProduct({
        name: "",
        price: "",
        category: "",
        description: "",
      });
      setFile(null);
      setErrors({})
    } catch (error) {
      console.error("❌ Error en handleSubmit:", error);
      setErrors({ api: error.message || "Error al crear el producto"});
    } finally {
      console.log("🏁 Finalizando...");
      setLoading(false);

    }
  };

  return (
    <ProductFormUI
      product={product}
      errors={errors}
      loading={loading}
      onChange={handleChange}
      onFileChange={setFile}
      onSubmit={handleSubmit}
    />
  );
};

export default ProductFormContainer;
