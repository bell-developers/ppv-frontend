import adaptProduct from 'adapters/adaptProduct';
import { Product } from 'models/Product.model';
import { useState, useEffect } from 'react';
import { getProduct } from 'services/get/getProduct';

type UseLoadProductReturn = {
    productData: Product;
    loading: boolean;
    error: boolean;
};

type UseLoadProduct = (id: string, isReady: boolean) => UseLoadProductReturn;

export const useLoadProduct: UseLoadProduct = (id, isReady) => {
    const [productData, setProductData] = useState<Product>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const loadProduct = async () => {
        try {
            setError(false);
            setLoading(true);
            setProductData(adaptProduct(await getProduct(id)));
            setLoading(false);
        } catch (e) {
            setLoading(false);
            setError(true);
        }
    };

    useEffect(() => {
        if (isReady === false) return () => setLoading(false);
        loadProduct();
        return () => setLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isReady]);

    return { productData, loading, error };
};
