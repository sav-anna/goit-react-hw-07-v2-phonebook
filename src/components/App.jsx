import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter';
import ContactList from './Contact/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { selectorContacts } from '../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export default function App() {
  const contacts = useSelector(selectorContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <Filter />
      {contacts?.length > 0 ? (
        <ContactList />
      ) : (
        <p className="app">You don’t have any contacts yet...🥺</p>
      )}
    </div>
  );
}
