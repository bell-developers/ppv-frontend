import { Product } from 'models/Product.model';

const adaptImage = (image: string) => 'data:image/jpg;base64,' + image.slice(2, -1);

const adaptProduct = (data: Product): Product => ({
    ...data,
    // images: data.images.map(adaptImage),
});

export default adaptProduct;
