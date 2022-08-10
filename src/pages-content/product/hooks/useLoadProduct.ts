import adaptProduct from 'adapters/adaptProduct';
import { Product } from 'models/Product.model';
import { useState, useEffect, useCallback } from 'react';
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

    const loadProduct = useCallback(async () => {
        try {
            console.log(productData);
            setError(false);
            setLoading(true);
            setProductData(adaptProduct(await getProduct(id)));
            setLoading(false);
        } catch (e) {
            setLoading(false);
            setError(true);
        }
    }, [id, productData]);

    useEffect(() => {
        if (isReady === false) return;
        else loadProduct();
        return () => setLoading(false);
    }, [isReady, loadProduct]);

    return { productData, loading, error };
};
