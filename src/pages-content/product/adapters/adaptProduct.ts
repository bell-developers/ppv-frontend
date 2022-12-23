import { Product } from 'models/Product.model';
import { Adapter } from '../../../adapters/Adapter.type';

// Waiting API implements images
// const adaptImage = (image: string) => 'data:image/jpg;base64,' + image.slice(2, -1);

/**
 * Adapts getProduct service return.
 *
 * @see Adapter for more info about using adapters.
 */
const adaptProduct: Adapter<Product, Product> = data => ({
    ...data,
});

export default adaptProduct;
