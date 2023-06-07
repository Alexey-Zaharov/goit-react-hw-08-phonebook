import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

const Contacts = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    if (!token) return;
    dispatch(fetchContacts(token));
  }, [dispatch, token]);

  return (
    <>
      {/* {isLoading && !error && <b>Request in progress...</b>} */}
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default Contacts;
