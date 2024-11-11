import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';

function ContactPage() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic (e.g., using an API endpoint)
    alert(t('form_submitted'));
  };

  return (
    <div>
      <h1>{t('contact_us')}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          {t('your_name')}
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          {t('your_email')}
          <input type="email" name="email" value={form.email} onChange={handleChange} required />
        </label>
        <label>
          {t('your_message')}
          <textarea name="message" value={form.message} onChange={handleChange} required></textarea>
        </label>
        <button type="submit">{t('send_message')}</button>
      </form>
    </div>
  );
}

export default ContactPage;
