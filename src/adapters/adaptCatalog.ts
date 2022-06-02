import { Product } from 'models/Product.model';

export const adaptCatalog = (dataArray: any): Product[] => {
    return dataArray.map((data: any) => ({
        name: data.name,
        price: data.price,
        images: data.images,
        sizes: data.sizes,
    }));
};
