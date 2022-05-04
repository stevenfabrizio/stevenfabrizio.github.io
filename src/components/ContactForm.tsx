import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm: React.FC = () => {
  
  const [state, handleSubmit] = useForm('mjvjgazo');
  if (state.succeeded) {
    return <p className="submitted">Message Sent!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email"></label>
      <input id="e-mail" type="email" name="email" placeholder="✉ E-mail" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" placeholder="✎ Your Message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        ➢ Send
      </button>
    </form>
  );
};

export default ContactForm;