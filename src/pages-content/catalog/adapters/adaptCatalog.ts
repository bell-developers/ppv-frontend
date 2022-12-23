import { Product } from 'models/Product.model';
import { Adapter } from '../../../adapters/Adapter.type';

type RequestEntryElement = {
    id: number;
    name: string;
    price: number;
    images: string[];
};

/**
 * Prepares base64 image for use it directly in src image attribute.
 * @param image Base64 image string.
 * @returns String formatted for image src.
 */
const adaptImage = (image: string) => 'data:image/jpg;base64,' + image.slice(2, -1);

/**
 * Adapts getCatalog service return.
 *
 * @see Adapter for more info about using adapters.
 */
export const adaptCatalog: Adapter<RequestEntryElement[], Product[]> = dataArray =>
    dataArray.map(data => ({
        id: data.id,
        name: data.name,
        price: data.price,
        images: data.images.map(adaptImage),
    }));
