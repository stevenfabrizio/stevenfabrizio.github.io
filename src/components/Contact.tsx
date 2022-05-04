import React from 'react';

const ContactForm = React.lazy(() => import('./ContactForm'));

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="contact-h3">
        <h3 className="h3-observable">Contact</h3>
      </div>

      <React.Suspense fallback={<span>Loading form...</span>}>
        <ContactForm />
      </React.Suspense>
      
    </div>
  );
};

export default Contact;
