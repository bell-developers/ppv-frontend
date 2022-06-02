import { Product } from 'models/Product.model';
import { convertBase64ToObjectURL } from 'utils/convertBase64ToObjectURL';

const adaptImages = (images: any[]) =>
    images.map(image => convertBase64ToObjectURL(image, 'image/jpg'));

export const adaptCatalog = (dataArray: any): Product[] => {
    return dataArray.map((data: any) => ({
        name: data.name,
        price: data.price,
        images: adaptImages(data.image),
        sizes: data.sizes,
    }));
};
