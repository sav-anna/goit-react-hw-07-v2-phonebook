import css from './ContactList.module.css';
import ContactItem from '../ContactItems';
import { useSelector } from 'react-redux';
// import SyncLoader from 'react-spinners/SyncLoader';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  console.log(contacts);
  const filter = useSelector(state => state.filter.filter);

  const getVisibleContacts = () => {
    if (!filter) {
      return contacts;
    } else {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };
  const visibleContacts = getVisibleContacts(contacts, filter);

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(({ id, name, phone }) => (
        <ContactItem key={id} id={id} name={name} phone={phone} />
      ))}
    </ul>
  );
};
export default ContactList;

// return (
//   <ul className={css.contactList}>
//     {contactLoading ? (
//       <div>
//         <SyncLoader
//           color="#36d7b7"
//           size={20}
//           cssOverride={{
//             position: 'fixed',
//             top: '0',
//             left: '0',
//             bottom: '0',
//             right: '0',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             height: '100vh',
//             width: '100vw',
//             margin: 'auto',
//             overflow: 'show',
//             zIndex: '999',
//           }}
//         />
//       </div>
//     ) : (
//       visibleContacts.map(({ id, name, phone }) => (
//         <ContactItem key={id} id={id} name={name} phone={phone} />
//       ))
//     )}
//   </ul>
// );
