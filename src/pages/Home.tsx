import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const testimonials = [
  {
    id: '1',
    name: 'Ayşe Yılmaz',
    comment: 'Mobilyalarının kalitesi ve şıklığı gerçekten etkileyici. Salonumuz için aldığımız koltuk takımı tam hayalimizdeki gibi.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    name: 'Mehmet Demir',
    comment: 'Profesyonel hizmet anlayışları ve ürün kalitesiyle beklentilerimizi fazlasıyla karşıladılar.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
  }
];

export default function Home() {
  const navigate = useNavigate();


  
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <FeaturedProducts />
      
      {/* Kampanyalar */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gray-900 dark:bg-gray-700 rounded-2xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Yaz Sezonu İndirimleri</h2>
            <p className="text-xl mb-6">Tüm bahçe mobilyalarında %30'a varan indirimler</p>
            <button 
              onClick={() => navigate('/products')} 
              className="bg-white text-gray-900 dark:bg-gray-800 dark:text-white 
              px-8 py-3 rounded-full font-semibold 
              hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-gray-900 
              hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
            >
              İndirimleri Keşfet
            </button>
          </div>
        </div>
      </section>

      {/* Müşteri Yorumları */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">Müşterilerimiz Ne Diyor?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold dark:text-white">{testimonial.name}</h3>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{testimonial.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}