import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/operations';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();
  const getContacts = useSelector(state => state.contacts.list);
  const token = useSelector(state => state.auth.token);

  const newContact = (data, event) => {
    getContacts.some(
      contact =>
        contact.name.toLowerCase() === data.contactData.name.toLowerCase()
    )
      ? window.alert(data.name + ' is already in contacts')
      : dispatch(addContact(data)) && event.target.reset();
  };

  const handleSubmit = event => {
    event.preventDefault();
    const contactData = {
      name: event.currentTarget.elements.name.value,
      number: event.currentTarget.elements.number.value.toString(),
    };
    newContact({ contactData, token }, event);
  };
  return (
    <div className={css.container}>
      <h1 className={css.header}>PhoneBook</h1>

      <form onSubmit={handleSubmit} className={css.contactForm}>
        <label className={css.contactLable}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            className={css.contactInput}
          />
        </label>
        <label className={css.contactLable}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            className={css.contactInput}
          />
        </label>
        <button type="submit" className={css.button}>
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
