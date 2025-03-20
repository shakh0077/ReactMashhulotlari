import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  // Telegram API token va chat ID
  const token = "7330849668:AAH6-V7mMPu9Rha2infXYwBQ7zbVDRRbHe0";
  const chat_id = "-1002259806656";
  const telegramAPI = `https://api.telegram.org/bot${token}/sendMessage`;

  // Inputni yangilash funksiyasi
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Formani yuborish funksiyasi
  const handleSubmit = async (e) => {
    e.preventDefault();

    const text = `📩 *Saytdan Yangi Xabar* 📩\n👤 *Ism:* ${formData.name}\n📧 *Email:* ${formData.email}\n💬 *Xabar:* ${formData.message}`;

    try {
      const response = await fetch(telegramAPI, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chat_id,
          text: text,
          parse_mode: "Markdown",
        }),
      });

      const data = await response.json();

      if (data.ok) {
        setResponseMessage("✅ Xabar muvaffaqiyatli yuborildi!");
        setFormData({ name: "", email: "", message: "" }); // Formani tozalash
      } else {
        setResponseMessage("❌ Xabar yuborishda xatolik!");
      }
    } catch (error) {
      setResponseMessage("⚠️ Tarmoqda xatolik! Qayta urinib ko'ring.");
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200 py-10 px-6 relative top-[70px]">
      <div className="max-w-[1440px] w-full mx-auto text-center grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="text-center lg:text-start">
          <h2 className="text-xl font-bold"><a href="#">Funiro.</a></h2>
          <p className="text-gray-500 mt-2">Worldwide furniture store since 2020.</p>
          <div className="flex items-center text-gray-600 mt-3">
            <FaMapMarkerAlt className="mr-2 text-gray-400" /><span> Toshkent Mirzo Ulug'bek, Buyuk Ipak Yo'li</span>
          </div>
          <a href="tel:+998902640680" className="flex items-center text-gray-600 mt-1">
            <FaPhoneAlt className="mr-2 text-gray-400" /> +998 90 264 06 80
          </a>
        </div>

        <div>
          <h3 className="text-lg font-bold">Menu</h3>
          <ul className="mt-2 text-gray-600 space-y-1">
            <li>Products</li>
            <li>Rooms</li>
            <li>Inspirations</li>
            <li>About Us</li>
            <li>Terms & Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Account</h3>
          <ul className="mt-2 text-gray-600 space-y-1">
            <li>My Account</li>
            <li>Checkout</li>
            <li>My Cart</li>
            <li>About Us</li>
            <li>My Cart</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold text-black">Stay Connected</h3>
          <ul className="mt-2 text-gray-600 space-y-1">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold">Stay Updated</h3>
          <form onSubmit={handleSubmit} className="mt-3 flex flex-col gap-2 border rounded-lg p-4">
            <input
              type="text"
              name="name"
              placeholder="Ismingiz"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Emailingiz"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <textarea
              name="message"
              placeholder="Xabaringiz"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            ></textarea>
            <button type="submit" className="bg-orange-400 text-white p-3 w-full flex items-center justify-center">
              <FaPaperPlane className="mr-2" /> Yuborish
            </button>
          </form>
          {responseMessage && <p className="text-center mt-2">{responseMessage}</p>}
        </div>

      </div>
    </footer>
  );
};

export default Footer;