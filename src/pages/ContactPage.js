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
      // Replace with your actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
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
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{t('contact.title', 'Contact Us')}</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            {t('contact.subtitle', 'Get in touch with our team for any inquiries about our products and services.')}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold mb-8">{t('contact.team', 'Our Team')}</h2>
            
            {/* Contact Cards */}
            <div className="space-y-8">
              {contactPersons.map((person, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-2">{person.name}</h3>
                  <p className="text-gray-600 mb-4">{person.title}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="text-sm text-gray-600">Mobile</p>
                        <a href={`tel:${person.contacts.mobile.replace(/\s/g, '')}`} 
                           className="hover:text-blue-600">
                          {person.contacts.mobile}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="text-sm text-gray-600">Phone</p>
                        <a href={`tel:${person.contacts.phone.replace(/\s/g, '')}`}
                           className="hover:text-blue-600">
                          {person.contacts.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <a href={`mailto:${person.contacts.email}`}
                           className="hover:text-blue-600">
                          {person.contacts.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Location Information */}
            <div className="mt-8 bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">{t('contact.address', 'Address')}</h3>
                  <p className="text-gray-600">Tingsvägen 3, 22710 Föglö</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-6">{t('contact.form.title', 'Send us a message')}</h2>
            
            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-2">
                <Check className="w-5 h-5" />
                {t('contact.form.success', 'Message sent successfully!')}
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                {t('contact.form.error', 'Failed to send message. Please try again.')}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.name', 'Name')} *
                </label>
                <input
                  type="text"
                  {...register('name', { required: true })}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none
                    ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.email', 'Email')} *
                </label>
                <input
                  type="email"
                  {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none
                    ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.message', 'Message')} *
                </label>
                <textarea
                  {...register('message', { required: true })}
                  rows={5}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none
                    ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 
                         transition-colors disabled:bg-blue-400 flex items-center justify-center gap-2"
              >
                {isSubmitting ? t('contact.form.sending', 'Sending...') : t('contact.form.send', 'Send Message')}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;