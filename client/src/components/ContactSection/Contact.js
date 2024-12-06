// Contact.js
import React from 'react';
import ContactForm from './ContactForm'; // Импортируем компонент формы
import MiniMap from '../MiniMap';  // Импорт компонента карты

const Contact = () => {
  return (
    <section id="contact" className="p-10 bg-gray-400 flex flex-col md:flex-row">
      {/* Контент с формой */}
      <div className="flex-1 flex flex-col justify-center items-start space-y-4 p-6">
        <h2 className="text-2xl font-semibold">Leave A Message</h2>

        {/* Форма */}
        <ContactForm />  {/* Вставляем компонент формы */}
      </div>

      {/* Карта с правой стороны */}
      <div className="w-full md:w-1/3 flex justify-end p-4">
        <MiniMap />  {/* Компонент карты */}
      </div>
    </section>
  );
};

export default Contact;


