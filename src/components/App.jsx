import { useState, useEffect} from "react"
import { Container } from "./Styles/Container.styled.jsx";
import {Title1, Title2} from './Styles/Titles.styled.jsx'
import { ContactForm } from "./Form/ContactForm";
import ContactList from "./ContactsList/ContactsList.jsx";
import Filter from "./Filter/Filter.jsx";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

function App (){
const [contacts, setContacts] = useLocalStorage('contacts', [])
const [filter, setFilter] = useState('');

function useLocalStorage(key, defaultValue){
  const [state, setState] = useState(()=> {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue})

   useEffect(()=>{
      window.localStorage.setItem(key, JSON.stringify(state))   
   }, [state, key])

    return [state, setState];
}

  function onFormSubmit( contact ){
    const someName = contacts.filter(item=> contact.name.toLowerCase() === item.name.toLowerCase())
    if(someName.length === 1){
      Notify.failure(`${contact.name} is already in contacts.`);
     return;
    }
    setContacts([contact, ...contacts])
  }

  const onDeleteContact = contactId => {
    setContacts(contacts.filter(({id}) => id !== contactId))
 }

  const handleFilter = e => {
    setFilter(e.target.value)
  }

  const findContact = () => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  }
    const foundContacts = findContact()


  return (
    <Container>
  <Title1>Phonebook</Title1>
  <ContactForm onSubmit={onFormSubmit}/>

  <Title2>Contacts</Title2>
  <Filter value={filter} onChange={handleFilter}/> 
  <ContactList contacts={foundContacts} handleDelete={onDeleteContact}/>
    </Container>
  )
};
export { App };

