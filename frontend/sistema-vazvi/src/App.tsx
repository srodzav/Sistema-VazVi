import React, { useState } from "react";
import IProduct, { IProductCreate, IProductUpdate } from "./models/product.model";
import { setAllProducts, viewProduct, hardDeleteProduct, updateProduct, addProduct } from "./controllers/product.controller";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [product, setProduct] = useState<IProduct>({} as IProduct);

  const testCreate: IProductCreate = {
    name: "testCreate 3",
    price: 100,
    stock: 1,
    is_active: 1,
    category: 4,
    brand: 2,
  };

  React.useEffect(() => {
    setAllProducts(setProducts);
  }, []);


  return (
    <div>
      <button  onClick={() => addProduct(testCreate)}> Crear </button>
      {products.map((product: IProduct) => (
        <p key={product.id}>
          {product.id} {product.name} {product.category.name} {product.brand.name}{" "} {product.is_active}
          <button onClick={() => viewProduct(product, setProduct) }> view product </button>{" "}
          <button onClick={() => updateProduct(product, true)}> soft delete </button>{" "}
          <button onClick={() => hardDeleteProduct(product)}> delete </button>{" "}
        </p>
      ))}
    </div>
  );
}

export default App;
