import { useState } from 'react';
import { toast } from 'react-toastify';

const TelegramForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState('');

  // Telegram API token va chat ID
  const token = '7330849668:AAH6-V7mMPu9Rha2infXYwBQ7zbVDRRbHe0';
  const chat_id = '-1002259806656';
  const telegramAPI = `https://api.telegram.org/bot${token}/sendMessage`;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Formani yuborish funksiyasi
  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = `
📩 *Saytdan Yangi Xabar* 📩
👤 *Ism:* ${formData.name}
📧 *Email:* ${formData.email}
💬 *Xabar:* ${formData.message}
    `;

    try {
      const response = await fetch(telegramAPI, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chat_id,
          text: text,
          parse_mode: 'Markdown',
        }),
      });

      const data = await response.json();

      if (data.ok) {
        toast.success('jo'natildi')
        setResponseMessage('✅ Xabar muvaffaqiyatli yuborildi!');
        setFormData({ name: '', email: '', message: '' }); // Formani tozalash
      } else {
        setResponseMessage('❌ Xabar yuborishda xatolik!');
      }
    } catch (error) {
      setResponseMessage('⚠️ Tarmoqda xatolik! Qayta urinib ko'ring.');
    }
  };

  return (
    <div className='max-w-md mx-auto absolute top-0  mt-10 p-6 bg-white rounded-md'>
      {/* ✅ Xabar holati tepada chiqadi */}
      {responseMessage && (
        <p className='mb-4 text-center text-green-600 font-semibold bg-green-100 p-2 rounded'>
          {responseMessage}
        </p>
      )}

      <h2 className='text-2xl font-bold mb-4'>Biz bilan bog‘lanish</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Ismingiz'
          value={formData.name}
          onChange={handleChange}
          className='w-full p-2 border rounded mb-2'
          required
        />
        <input
          type='email'
          name='email'
          placeholder='Emailingiz'
          value={formData.email}
          onChange={handleChange}
          className='w-full p-2 border rounded mb-2'
          required
        />
        <textarea
          name='message'
          placeholder='Xabaringizni yozing...'
          value={formData.message}
          onChange={handleChange}
          className='w-full p-2 border rounded mb-2'
          required
        ></textarea>
        <button
          type='submit'
          className='w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition'
        >
          Yuborish
        </button>
      </form>
    </div>
  );
};

export default TelegramForm;
