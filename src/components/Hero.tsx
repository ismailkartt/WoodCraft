import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    title: 'Modern Yaşam Alanları',
    description: 'Eviniz için en şık ve konforlu mobilyalar',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80'
  },
  {
    title: 'Zamansız Tasarımlar',
    description: 'Her zevke uygun mobilya koleksiyonları',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80'
  },
  {
    title: 'Konforlu Yaşam',
    description: 'Kaliteli malzemeler, kusursuz işçilik',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
            style={{
              backgroundImage: `url("${slide.image}")`,
              transform: currentSlide === index ? 'scale(1.05)' : 'scale(1)',
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 transform transition-all duration-1000 translate-y-0 opacity-100">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 transform transition-all duration-1000 translate-y-0 opacity-100">
                {slide.description}
              </p>
              <button 
                onClick={() => navigate('/products')}
                className="relative z-10 bg-white dark:bg-gray-800 text-gray-900 dark:text-white 
                px-8 py-3 rounded-full font-semibold flex items-center mx-auto 
                hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-gray-900 
                hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
              >
                Koleksiyonu Keşfet
                <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}