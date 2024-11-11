import React, { useState } from 'react';

import {
  AlertCircle,
  Check,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const contactPersons = [
    {
      name: "Anu Lauttia",
      title: "Toimitusjohtaja",
      contacts: {
        mobile: "040 8644 982",
        phone: "018-511 00",
        email: "anu.lauttia@matfish.fi"
      }
    },
    {
      name: "Kerli Vokksepp",
      title: "Myyntineuvottelija",
      contacts: {
        mobile: "040 1454 014",
        phone: "018-511 01",
        email: "info@matfish.fi"
      }
    }
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Replace with your actual API call
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">{t('contact.title', 'Contact Us')}</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            {t('contact.subtitle', 'Get in touch with our team for any inquiries about our products and services.')}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-12 grid gap-12 md:grid-cols-2">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">{t('contact.team', 'Our Team')}</h2>
          <div className="space-y-6">
            {contactPersons.map((person, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900">{person.name}</h3>
                <p className="text-gray-700 mb-4">{person.title}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <a href={`tel:${person.contacts.mobile.replace(/\s/g, '')}`} className="text-gray-800 hover:text-blue-600">
                      {person.contacts.mobile}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <a href={`tel:${person.contacts.phone.replace(/\s/g, '')}`} className="text-gray-800 hover:text-blue-600">
                      {person.contacts.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a href={`mailto:${person.contacts.email}`} className="text-gray-800 hover:text-blue-600">
                      {person.contacts.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-900">{t('contact.address', 'Address')}</h3>
                <p className="text-gray-700">Tingsvägen 3, 22710 Föglö</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">{t('contact.form.title', 'Send us a message')}</h2>

          {/* Submission Status Messages */}
          {submitStatus === 'success' && (
            <div className="mb-4 p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-2">
              <Check className="w-5 h-5" />
              {t('contact.form.success', 'Message sent successfully!')}
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mb-4 p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              {t('contact.form.error', 'Failed to send message. Please try again.')}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900">
                {t('contact.form.name', 'Name')} *
              </label>
              <input
                type="text"
                {...register('name', { required: true })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900">
                {t('contact.form.email', 'Email')} *
              </label>
              <input
                type="email"
                {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900">
                {t('contact.form.message', 'Message')} *
              </label>
              <textarea
                {...register('message', { required: true })}
                rows={5}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:bg-blue-400"
            >
              {isSubmitting ? t('contact.form.sending', 'Sending...') : t('contact.form.send', 'Send Message')}
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
