import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Импортируем библиотеку EmailJS
import { useTranslation } from 'react-i18next';

const ContactForm = () => {
    const { t } = useTranslation();
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
          placeholder={t('placeholder.Name')}
          className="w-1/2 p-2 border border-customWhiteblue rounded"
        />
        {/* Поле Email */}
        <input
          type="email"
          name="email"  // Используем соответствующее имя из useState
          value={formData.email}
          onChange={handleChange}
          placeholder={t('placeholder.Email')}
          className="w-1/2 p-2 border border-customWhiteblue rounded"
        />
      </div>

      {/* Поле Subject */}
      <input
        type="text"
        name="subject"  // Используем соответствующее имя из useState
        value={formData.subject}
        onChange={handleChange}
        placeholder={t('placeholder.Subject')}
        className="w-full p-2 border border-customWhiteblue rounded"
      />

      {/* Поле Message */}
      <textarea
        name="message"  // Используем соответствующее имя из useState
        value={formData.message}
        onChange={handleChange}
        placeholder={t('placeholder.Message')}
        className="w-full p-2 border border-customWhiteblue rounded h-32"
      />

      {/* Кнопка отправки */}
      <button
  type="submit"
  className="self-start bg-customWhiteblue text-gray-300 px-2 py-2 rounded hover:bg-customDarkblue flex items-center">
  {t('Message.send')}
  <div className="ml-3 w-6 h-6 border-2 border-white rounded-full flex justify-center items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-gray-300"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
    >
      {/* Стрелка вправо */}
      <line x1="6" y1="12" x2="18" y2="12" stroke="currentColor" strokeWidth="2" />
      <line x1="13" y1="7" x2="18" y2="12" stroke="currentColor" strokeWidth="2" />
      <line x1="13" y1="17" x2="18" y2="12" stroke="currentColor" strokeWidth="2" />
    </svg>
  </div>
</button>

    </form>
  );
};

export default ContactForm;


