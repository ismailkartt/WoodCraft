import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  'Tümü',
  'Oturma Odası',
  'Yatak Odası',
  'Yemek Odası',
  'Çalışma Odası',
  'Bahçe',
  'Mutfak',
  'Çocuk Odası'
];

const products = [
  {
    id: '1',
    name: 'Modern Koltuk Takımı',
    category: 'Oturma Odası',
    price: 24999,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80',
    inStock: true
  },
  {
    id: '2',
    name: 'Minimalist Yemek Masası',
    category: 'Yemek Odası',
    price: 12999,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80',
    inStock: true
  },
  {
    id: '3',
    name: 'Lüks Yatak Odası Takımı',
    category: 'Yatak Odası',
    price: 34999,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80',
    inStock: false
  },
  {
    id: '4',
    name: 'Çalışma Masası',
    category: 'Çalışma Odası',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80',
    inStock: true
  },
  {
    id: '5',
    name: 'Bahçe Oturma Grubu',
    category: 'Bahçe',
    price: 15999,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80',
    inStock: true
  },

  {
    id: '7',
    name: 'Çocuk Odası Takımı',
    category: 'Çocuk Odası',
    price: 19999,
    image: 'https://images.unsplash.com/photo-1632829882891-5047ccc421bc?auto=format&fit=crop&q=80',
    inStock: true
  },
  {
    id: '8',
    name: 'TV Ünitesi',
    category: 'Oturma Odası',
    price: 7999,
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&q=80',
    inStock: true
  },
 
  {
    id: '10',
    name: 'Kitaplık',
    category: 'Çalışma Odası',
    price: 5999,
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&q=80',
    inStock: true
  }
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = products.filter(
    product => selectedCategory === 'Tümü' || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0;
  });

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gray-900 dark:bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Ürünlerimiz</h1>
          <p className="text-lg">Eviniz için en şık ve kaliteli mobilyalar</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-gray-900 dark:bg-gray-700 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border rounded-lg dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
          >
            <option value="featured">Öne Çıkanlar</option>
            <option value="price-asc">Fiyat: Düşükten Yükseğe</option>
            <option value="price-desc">Fiyat: Yüksekten Düşüğe</option>
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {sortedProducts.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id} className="group">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 dark:text-gray-200">{product.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{product.category}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-900 dark:text-gray-200 font-bold">
                      {product.price.toLocaleString('tr-TR')} ₺
                    </p>
                    <span className={`px-2 py-1 rounded text-sm ${
                      product.inStock 
                        ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                        : 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200'
                    }`}>
                      {product.inStock ? 'Stokta' : 'Tükendi'}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}