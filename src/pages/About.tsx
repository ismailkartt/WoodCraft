import React from 'react';

const teamMembers = [
  {
    name: 'Ali Yıldız',
    position: 'Kurucu & CEO',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80'
  },
  {
    name: 'Zeynep Kaya',
    position: 'Tasarım Direktörü',
    image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&q=80'
  },
  {
    name: 'Can Demir',
    position: 'Üretim Müdürü',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
  }
];

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1604014237800-1c9102c219da?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hakkımızda</h1>
            <p className="text-xl">20 yıldır kaliteli mobilyanın adresi</p>
          </div>
        </div>
      </div>

      {/* Firma Bilgisi */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Hikayemiz</h2>
              <p className="text-gray-600 mb-4">
                2003 yılında küçük bir atölyede başlayan yolculuğumuz, bugün Türkiye'nin önde gelen mobilya üreticilerinden biri olarak devam ediyor. Her bir ürünümüzde kalite, estetik ve konforu bir araya getiriyoruz.
              </p>
              <p className="text-gray-600">
                Modern teknolojiyi geleneksel mobilya işçiliğiyle birleştirerek, her eve ve ofise özel çözümler sunuyoruz.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80" 
                alt="Atölyemiz" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vizyon & Misyon */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Vizyonumuz</h3>
              <p className="text-gray-600">
                Türkiye'nin ve dünyanın önde gelen mobilya markalarından biri olarak, yaşam alanlarını daha konforlu ve estetik hale getirmek.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Misyonumuz</h3>
              <p className="text-gray-600">
                Yenilikçi tasarımlar ve kaliteli ürünlerle müşterilerimizin hayallerindeki yaşam alanlarını gerçeğe dönüştürmek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ekip */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ekibimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}