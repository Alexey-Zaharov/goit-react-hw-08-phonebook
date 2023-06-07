import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import css from './Filter.module.css';

const Filter = () => {
  const getFilter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const handleFilter = event => {
    dispatch(setFilter(event.currentTarget.value));
  };
  return (
    <div className={css.filterContainer}>
      <h1 className={css.Header}>Contacts serch</h1>

      <label>
        Serch
        <input
          className={css.filterInput}
          value={getFilter}
          type="text"
          name="serch"
          onChange={event => {
            handleFilter(event);
          }}
        />
      </label>
    </div>
  );
};

export default Filter;
