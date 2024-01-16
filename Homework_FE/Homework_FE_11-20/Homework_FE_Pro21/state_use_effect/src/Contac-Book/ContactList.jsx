import React, { useState, useEffect } from 'react';
import './Contact.css';

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const storedContactsString = localStorage.getItem('contacts');

    let storedContacts;
    if (storedContactsString) {
      storedContacts = JSON.parse(storedContactsString);
    } else {
      storedContacts = [];
    }
    
    setContacts(storedContacts);
  }, []);
  // localStorage.clear();

  return (
    <div>
      <ul className="container-ul">
        {contacts.map((contact, index) => (
          <li key={index} className="li-item">
            {contact.name + " "}
            Phone: {contact.phone + " "}
            Email: {contact.email}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ContactList;

// Создать приложение "Контактная книга", которое позволяет пользователю добавлять и просматривать контакты.
// 1)Создайте компонент ContactList, который отображает список контактов.
// 2)Создайте компонент AddContactForm, который позволяет пользователю добавлять новый контакт.
// Для каждого контакта добавляется имя, телефон и email.


// Обязательно использовать useEffect, useState и localStorage.