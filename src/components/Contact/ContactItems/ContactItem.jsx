import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import css from './ContactItems.module.css';
import { deleteContact } from 'redux/reducers';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  return (
    <li className={css.contactItem}>
      {name}: {phone}
      <button
        className={css.contactItem__btn}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string,
};

export default ContactItem;
