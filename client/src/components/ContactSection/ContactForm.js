import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Импортируем библиотеку EmailJS

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errorMessage, setErrorMessage] = useState('');  // Стейт для ошибок

  // Обработчик изменений в форме
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Обновляем соответствующее поле состояния
    }));
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();  // Останавливаем перезагрузку страницы

    // Валидация обязательных полей
    if (!formData.name || !formData.email || !formData.subject) {
      setErrorMessage('Please fill in all the required fields: Name, Email, and Subject.');
      return; // Не отправляем форму, если есть незаполненные обязательные поля
    }

    // Отправка данных на EmailJS
    emailjs
      .sendForm(
        'service_ykd2orp', // Ваш Service ID
        'template_bbj5k97', // Ваш Template ID
        e.target,           // Форма, которую отправляем
        'mKdGJ-Ap6zpNmSXaA' // Ваш Public Key / User ID
      )
      .then(
        (result) => {
          console.log('Message sent:', result.text);
          alert('Your message has been sent successfully!');
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });  // Очистить форму после успешной отправки
          setErrorMessage('');  // Очистить сообщение об ошибке
        },
        (error) => {
          console.log('Error sending message:', error.text);
          alert('There was an error sending your message. Please try again.');
        }
      );
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      {/* Если есть ошибка, отображаем сообщение */}
      {errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>}

      <div className="flex space-x-4">
        {/* Поле Name */}
        <input
          type="text"
          name="name"  // Используем соответствующее имя из useState
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-1/2 p-2 border border-gray-300 rounded"
        />
        {/* Поле Email */}
        <input
          type="email"
          name="email"  // Используем соответствующее имя из useState
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-1/2 p-2 border border-gray-300 rounded"
        />
      </div>

      {/* Поле Subject */}
      <input
        type="text"
        name="subject"  // Используем соответствующее имя из useState
        value={formData.subject}
        onChange={handleChange}
        placeholder="Subject"
        className="w-full p-2 border border-gray-300 rounded"
      />

      {/* Поле Message */}
      <textarea
        name="message"  // Используем соответствующее имя из useState
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        className="w-full p-2 border border-gray-300 rounded h-32"
      />

      {/* Кнопка отправки */}
      <button
        type="submit"
        className="self-start bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
      >
        SEND A MESSAGE
      </button>
    </form>
  );
};

export default ContactForm;


