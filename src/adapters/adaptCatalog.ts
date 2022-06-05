import { Product } from 'models/Product.model';

export const adaptCatalog = (dataArray: any): Product[] => {
    return dataArray.map((data: any) => ({
        id: data.id,
        name: data.name,
        price: data.price,
        images: data.images,
        sizes: data.sizes,
    }));
};
