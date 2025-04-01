import React, { useContext, useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { ThemeContext } from '../Context/GlobalContext';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const token = 'YOUR_TELEGRAM_BOT_TOKEN';
  const chat_id = 'YOUR_CHAT_ID';
  const telegramAPI = `https://api.telegram.org/bot${token}/sendMessage`;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = `📩 *${t('new_message')}* 📩\n👤 *${t('name')}:* ${formData.name}\n📧 *${t('email')}:* ${formData.email}\n💬 *${t('message')}:* ${formData.message}`;

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
        setResponseMessage(t('message_sent'));
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResponseMessage(t('message_error'));
      }
    } catch (error) {
      setResponseMessage(t('network_error'));
    }
  };

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const { theme } = useContext(ThemeContext);

  return (
    <footer
      id='footer'
      className={`${
        theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-700'
      } border-t py-10 px-10 relative pt-[70px]`}
    >


      <div
        data-aos='fade-down'
        className='max-w-[1440px] w-full mx-auto text-center grid grid-cols-1 md:grid-cols-5 gap-8'
      >
        <div className='text-center lg:text-start'>
          <h2 className='text-xl font-bold'>
            <a href='#'>Funiro.</a>
          </h2>
          <p className='pt-2'>{t('footer_desc')}</p>
          <div className='flex items-center mt-3'>
            <FaMapMarkerAlt className='mr-2' />
            <span>{t('address')}</span>
          </div>
          <a href='tel:+998902640680' className='flex items-center mt-1'>
            <FaPhoneAlt className='mr-2 text-gray-400' /> +998 90 264 06 80
          </a>
        </div>

        <div>
          <h3 className='text-lg font-bold'>{t('menu')}</h3>
          <ul className='mt-2 space-y-1'>
            <li>{t('products')}</li>
            <li>{t('rooms')}</li>
            <li>{t('inspirations')}</li>
            <li>{t('about_us')}</li>
            <li>{t('terms_policy')}</li>
          </ul>
        </div>

        <div>
          <h3 className='text-lg font-bold'>{t('account')}</h3>
          <ul className='mt-2 space-y-1'>
            <li>{t('my_account')}</li>
            <li>{t('checkout')}</li>
            <li>{t('my_cart')}</li>
            <li>{t('about_us')}</li>
          </ul>
        </div>

        <div>
          <h3 className='text-lg font-bold'>{t('stay_connected')}</h3>
          <ul className='mt-2 space-y-1'>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>

        <div>
          <h3 className='text-lg font-bold'>{t('stay_updated')}</h3>
          <form
            onSubmit={handleSubmit}
            className='mt-3 flex flex-col gap-2 border rounded-lg p-4'
          >
            <input
              type='text'
              name='name'
              placeholder={t('name')}
              value={formData.name}
              onChange={handleChange}
              className='w-full p-2 border rounded'
              required
            />
            <input
              type='email'
              name='email'
              placeholder={t('email')}
              value={formData.email}
              onChange={handleChange}
              className='w-full p-2 border rounded'
              required
            />
            <textarea
              name='message'
              placeholder={t('message')}
              value={formData.message}
              onChange={handleChange}
              className='w-full p-2 border rounded'
              required
            ></textarea>
            <button
              type='submit'
              className='bg-orange-400 text-white p-3 w-full flex items-center justify-center'
            >
              <FaPaperPlane className='mr-2' /> {t('send')}
            </button>
          </form>
          {responseMessage && (
            <p className='text-center mt-2'>{responseMessage}</p>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
