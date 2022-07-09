import { useRouter } from 'next/router';

function ProductPage() {
    const { query } = useRouter();

    return <div>{query.id}</div>;
}

export default ProductPage;
