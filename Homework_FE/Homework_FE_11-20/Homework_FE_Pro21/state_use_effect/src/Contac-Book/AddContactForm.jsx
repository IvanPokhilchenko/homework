import React, { useState } from 'react';
import './Contact.css';

function AddContactForm({ onAddContact }) {
  const [contact, setContact] = useState({ name: '', phone: '', email: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  const handleAddContact = () => {
    if (contact.name && contact.phone && contact.email) {
      onAddContact(contact);
      setContact({ name: '', phone: '', email: '' });
    } else {
      alert('Пожалуйста, заполните все поля!!!');
    }
  };

  return (
    <div className="container">
      <form className="form-group">
        Name:
        <input type="text" name="name" value={contact.name} onChange={handleInputChange} />
        Phone:
        <input type="text" name="phone" value={contact.phone} onChange={handleInputChange} />
        Email:
        <input type="text" name="email" value={contact.email} onChange={handleInputChange} />
      <button onClick={handleAddContact}>Add Contact</button>
      </form>
    </div>
  )
}

export default AddContactForm;