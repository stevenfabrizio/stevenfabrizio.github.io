import React from 'react';

import './Contact.css';
// import ContactForm from './contactform/ContactForm'
const ContactForm = React.lazy(() => import('./contactform/ContactForm'));

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="contact-h3">
        <h3 className="h3-observable translate-eles" id="contact">
          Contact me
        </h3>
      </div>

      <React.Suspense fallback={<></>}>
        <ContactForm />
      </React.Suspense>
    </div>
  );
};

export default Contact;
