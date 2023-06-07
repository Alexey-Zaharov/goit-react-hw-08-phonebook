import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import css from './ContactListElement.module.css';

const ContactListElement = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  return (
    <li className={css.contactListItem}>
      {name}: {number}
      <button
        className={css.contactListButton}
        onClick={() => dispatch(deleteContact({ id, token }))}
      >
        Delete
      </button>
    </li>
  );
};
ContactListElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListElement;
