import { getAll, getSingle, create, update, remove } from '../endpoints/product.endopint';
import IProduct, {IProductCreate, IProductUpdate} from '../models/product.model';

export function setAllProducts(setProducts: any) {
    getAll().then((data) => {
        if (data) {
          setProducts(data);
        }
      });
}

export function viewProduct(product: IProduct, setProduct: any){
    setProduct(product);
    console.log(product);
}

export function addProduct(product: IProductCreate){
    create(product);
}

export function hardDeleteProduct(product: IProduct) {
  remove(product);
} 

export function updateProduct(product: IProduct, option:boolean) {

  const updatedProduct: IProductUpdate = {
    id: product.id,
    name: product.name,
    price: product.price,
    stock: product.stock,
    category: product.category.id,
    brand: product.brand.id,
    is_active: product.is_active,
  }

  if(option){//Enters if its a soft delete
    updatedProduct.is_active = 0;
  }

  update(updatedProduct);
}



