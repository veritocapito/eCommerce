export const validateProducts = (product, fileRequired = true) => {
    const errors = {};

    if (!product.name.trim()) {
        errors.name = "El nombre del producto es obligatorio.";
    }

    if (!product.price || isNaN(product.price) || Number(product.price) <= 0) {
        errors.price = "El precio debe ser un número positivo.";
    }

    if (!product.description.trim()) {
        errors.description = "La descripción del producto es obligatoria.";
    }

    if (!product.category.trim()) {
        errors.category = "La categoría del producto es obligatoria.";
    }

    if (fileRequired && !product.file) {
        errors.file = "La imagen del producto es obligatoria.";
    }

    return Object.keys(errors).length === 0 ? true : errors;
};
