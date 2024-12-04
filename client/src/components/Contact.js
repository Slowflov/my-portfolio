import React from 'react';
import MiniMap from './MiniMap';  // Импорт компонента карты

function Contact() {
  return (
    <section id="contact" className="p-10 bg-purple-100">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p>Здесь будут ваши контакты.</p>
            {/* Карта добавлена сюда, с правой стороны */}
            <div className="w-full flex justify-end p-4">
        <MiniMap />  {/* Компонент карты */}
      </div>
    </section>
  );
}

export default Contact;