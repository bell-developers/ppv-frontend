import { Product } from 'models/Product.model';

type RequestEntryElement = {
    id: number;
    name: string;
    price: number;
    images: string[];
    sizes: string[];
};

const adaptImage = (image: string) => 'data:image/jpg;base64,' + image.slice(2, -1);

export const adaptCatalog = (dataArray: RequestEntryElement[]): Product[] => {
    return dataArray.map(data => ({
        id: data.id,
        name: data.name,
        price: data.price,
        images: data.images.map(adaptImage),
        sizes: data.sizes,
    }));
};
