const ProductFormUI = ({
  product,
  errors,
  loading,
  onChange,
  onFileChange,
  onSubmit,
}) => {
  return (
    <section>
      <h2>Accesos del usuario Admin</h2>

      <form className="product-form" onSubmit={onSubmit}>
        <h3>Agregar producto</h3>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={onChange}
            placeholder="Nombre del producto"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div>
          <label htmlFor="price">Precio:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={onChange}
            placeholder="Precio del producto"
          />
          {errors.price && <span className="error">{errors.price}</span>}
        </div>

        <div>
          <label htmlFor="category">Categoría:</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={onChange}
            placeholder="Categoría del producto"
          />
          {errors.category && <span className="error">{errors.category}</span>}
        </div>

        <div>
          <label htmlFor="description">Descripción:</label>
          <textarea
            name="description"
            value={product.description}
            onChange={onChange}
            placeholder="Descripción del producto"
          />
          {errors.description && (
            <span className="error">{errors.description}</span>
          )}
        </div>

        <div>
          <label htmlFor="image">Imagen:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
          />
          {errors.file && <span className="error">{errors.file}</span>}
        </div>
        <button className="btn" type="submit" disabled={loading}>
          {loading ? "Guardando..." : "Guardar"}
        </button>
      </form>
    </section>
  );
};

export default ProductFormUI;
