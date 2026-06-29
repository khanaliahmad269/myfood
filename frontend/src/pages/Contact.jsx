import React from 'react';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <ContactForm />
    </div>
  );
}

export default Contact;