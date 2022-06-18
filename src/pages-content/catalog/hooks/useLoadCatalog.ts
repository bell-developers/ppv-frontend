import { adaptCatalog } from 'adapters/adaptCatalog';
import { Product } from 'models/Product.model';
import { useState, useEffect } from 'react';
import { getCatalog } from 'services/get/getCatalog';

export const useLoadCatalog = () => {
    const [productsData, setProductsData] = useState<Product[]>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const loadCatalog = async () => {
        try {
            setError(false);
            setLoading(true);
            setProductsData(adaptCatalog(await getCatalog()));
            setLoading(false);
        } catch (e) {
            setLoading(false);
            setError(true);
        }
    };

    useEffect(() => {
        loadCatalog();
        return () => setLoading(false);
    }, []);

    return { productsData, loading, error };
};
