import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">İletişim</h1>
          <p className="text-lg">Sizden haber almayı bekliyoruz</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* İletişim Bilgileri */}
          <div>
            <h2 className="text-2xl font-bold mb-6 dark:text-white">İletişim Bilgileri</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="mr-4 mt-1 dark:text-white" />
                <div>
                  <h3 className="font-semibold mb-1 dark:text-white">Telefon</h3>
                  <p className="text-gray-600 dark:text-gray-300">+90 (212) 555 0123</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="mr-4 mt-1 dark:text-white" />
                <div>
                  <h3 className="font-semibold mb-1 dark:text-white">E-posta</h3>
                  <p className="text-gray-600 dark:text-gray-300">info@mobilya.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="mr-4 mt-1 dark:text-white" />
                <div>
                  <h3 className="font-semibold mb-1 dark:text-white">Adres</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Mobilya Caddesi No: 123<br />
                    Şişli, İstanbul 34394
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 h-[300px] bg-gray-100 rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.232948447242!2d28.987875815415726!3d41.06031597929471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab703f3858137%3A0xe5b1d997c7f1dead!2zxZ5pxZ9saSwgxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1645789012345!5m2!1str!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>

          {/* Bize Ulaşın Formu */}
          <div>
            <h2 className="text-2xl font-bold mb-6 dark:text-white">Bize Ulaşın</h2>
            
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Adınız Soyadınız*
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  E-posta Adresiniz*
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Konu*
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 mb-2">
                  Mesajınız*
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gray-900 dark:bg-gray-700 text-white px-6 py-2 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
              >
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}