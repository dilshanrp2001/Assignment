'use client';
import { useQuery } from 'react-query';
import api from '../../../utils/api';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
}

const fetchProducts = async (): Promise<Product[]> => {
  const res = await api.get('/products');
  return res.data as Product[];
};

export default function Products() {
  const { data, isLoading, error } = useQuery<Product[]>('products', fetchProducts);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl mb-4">Products</h1>
      <Link href="/products/form">
        <button className="bg-green-500 text-white p-2 rounded">Add Product</button>
      </Link>
      <ul className="mt-4">
        {data?.map((product) => (
          <li key={product.id} className="border p-2 mb-2">
            <Link href={`/products/${product.id}`}>
              <h2 className="text-xl">{product.name}</h2>
            </Link>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}