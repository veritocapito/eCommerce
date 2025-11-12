# eCommerce - ReactJS Talento Tech 

Plataforma de comercio electrónico desarrollada con React para visualizar y gestionar productos.

## 🚀 Características

- Catálogo de productos con filtrado por categoría
- Panel administrativo para crear productos
- Subida de imágenes con ImgBB
- Validación de formularios robusta
- Detalle de productos con manejo de errores
- Routing con React Router

## 🔧 Instalación

```bash
# Clonar repositorio
git clone https://github.com/veritocapito/eCommerce.git
cd eCommerce

# Instalar dependencias
npm install

# Iniciar servidor
npm run dev
```

## 📁 Estructura

```
src/
├── components/
│   ├── ItemDetail/
│   ├── ItemDetailContainer/
│   └── adminComponents/
├── services/
│   ├── productService.js
│   └── uploadImage.js
└── utils/
```

## 🛠️ Tecnologías

- React
- React Router
- Fetch API
- ImgBB
- MockAPI

## 📚 API Principal

```javascript
// Obtener productos
getProducts(category?)

// Obtener producto por ID
getProductById(id)

// Crear producto
createProduct(productData)

// Subir imagen
uploadToImgbb(file)
```

## 🔗 Enlaces

- **Repositorio:** https://github.com/veritocapito/eCommerce
- **Deploy:** https://e-commerce-vc.vercel.app/

## 👤 Autora

**Verónica Capobianco**  
* *Conoce mis proyectos en [GitHub](https://github.com/veritocapito)*
* *Visita mi perfil en [LinkedIn](https://www.linkedin.com/in/vscapobianco/)*
