import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Truck, Shield, ArrowRight } from 'lucide-react';

const product = {
  id: '1',
  name: 'Modern Koltuk Takımı',
  category: 'Oturma Odası',
  price: 24999,
  description: 'Modern çizgilere sahip, konforlu ve şık koltuk takımı. Yüksek kaliteli kumaş ve dayanıklı malzemeler kullanılarak üretilmiştir.',
  dimensions: '320x180x75 cm',
  materials: ['Ahşap İskelet', 'Premium Kumaş', 'Yüksek Yoğunluklu Sünger'],
  images: [
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80'
  ],
  colors: ['Bej', 'Gri', 'Lacivert'],
  inStock: true,
  rating: 4.8
};

export default function ProductDetail() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div>
            <div className="aspect-w-1 aspect-h-1 mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-w-1 aspect-h-1 ${
                    selectedImage === index ? 'ring-2 ring-gray-900' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                  />
                ))}
              </div>
              <span className="text-gray-600">{product.rating} / 5</span>
            </div>
            <p className="text-3xl font-bold mb-6">{product.price.toLocaleString('tr-TR')} ₺</p>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Renk Seçenekleri</h3>
              <div className="flex space-x-4">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-full border ${
                      selectedColor === color
                        ? 'border-gray-900 bg-gray-900 text-white'
                        : 'border-gray-300 hover:border-gray-900'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <button
              className={`w-full py-3 rounded-lg mb-6 flex items-center justify-center ${
                product.inStock
                  ? 'bg-gray-900 text-white hover:bg-gray-800'
                  : 'bg-gray-200 text-gray-500 cursor-not-allowed'
              }`}
              disabled={!product.inStock}
            >
              {product.inStock ? (
                <>
                  Sepete Ekle
                  <ArrowRight className="ml-2" size={20} />
                </>
              ) : (
                'Stokta Yok'
              )}
            </button>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <Truck className="mr-2" size={20} />
                <span className="text-sm">Ücretsiz Kargo</span>
              </div>
              <div className="flex items-center">
                <Shield className="mr-2" size={20} />
                <span className="text-sm">2 Yıl Garanti</span>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Ürün Açıklaması</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Ölçüler</h3>
                <p className="text-gray-600">{product.dimensions}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Malzemeler</h3>
                <ul className="list-disc list-inside text-gray-600">
                  {product.materials.map(material => (
                    <li key={material}>{material}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}