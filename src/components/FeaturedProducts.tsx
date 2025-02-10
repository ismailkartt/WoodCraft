import React from 'react';
import { Link } from 'react-router-dom';

const featuredProducts = [
  {
    id: '1',
    name: 'Modern Koltuk Takımı',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80',
    price: 24999,
  },
  {
    id: '2',
    name: 'Minimalist Yemek Masası',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80',
    price: 12999,
  },
  {
    id: '3',
    name: 'Lüks Yatak Odası Takımı',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80',
    price: 34999,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Öne Çıkan Ürünler</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id} className="group">
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 dark:text-white">{product.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{product.price.toLocaleString('tr-TR')} ₺</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}