import IProduct, {IProductUpdate, IProductCreate} from "../models/product.model";
import axios from "axios";

export const getAll = async (): Promise<IProduct[]> => {
  return await axios
    .get<IProduct[]>('http://localhost:3001/product')
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

export const getSingle = async (id:number): Promise<IProduct> => {
  return await axios
    .get<IProduct>(`http://localhost:3001/product/${id}`)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

export const create = async (product:IProductCreate): Promise<IProductCreate> => {
  return await axios
    .post<IProductCreate>('http://localhost:3001/product', product)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

export const update = async (product:IProductUpdate): Promise<IProductUpdate> => {
  return await axios
    .patch<IProductUpdate>('http://localhost:3001/product', product)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};

export const remove = async (product: IProduct): Promise<IProduct> => {
  return await axios
    .delete<IProduct>(`http://localhost:3001/product/${product.id}`)
    .then((response) => {
      if (response.data) {
        return response.data;
      }
    })
    .catch((error) => {
      return error;
    });
};
