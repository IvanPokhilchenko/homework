import AddContactForm from "./Contac-Book/AddContactForm";
import ContactList from "./Contac-Book/ContactList";
import Gallery from "./Gallery/Gallery";

function App() {

  function addContact(newContact) {
    let storedContacts = JSON.parse(localStorage.getItem('contacts'));
  
    if (!storedContacts) {
      storedContacts = [];
    }
  
    const updatedContacts = [...storedContacts, newContact];
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
  }

  return (
    <div>
      <AddContactForm onAddContact={addContact} />
      <ContactList />
      <Gallery />
    </div>
  );
}

export default App;
