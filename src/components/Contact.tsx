import React from 'react';

import './Contact.css';
const ContactForm = React.lazy(() => import('./ContactForm'));

const Contact: React.FC = () => {
  return (
    <div className="contact-container" id='contact'>
      <div className="contact-h3">
        <h3 className="h3-observable translate-eles">Contact me</h3>
      </div>

      <React.Suspense fallback={<></>}>
        <ContactForm />
      </React.Suspense>
    </div>
  );
};

export default Contact;
