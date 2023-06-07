import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

// const listInitState = [];

// const listSlice = createSlice({
//   name: 'contacts',
//   initialState: listInitState,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare({ name, number, id }) {
//         return {
//           payload: {
//             name,
//             number,
//             id,
//           },
//         };
//       },
//     },
//     deleteContact(state, action) {
//       const index = state.findIndex(contact => contact.id === action.payload);
//       state.splice(index, 1);
//     },
//   },
// });

// const listSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: {
//     [fetchContacts.pending](state) {
//       // state.isLoading = true;
//     },
//     [fetchContacts.fulfilled](state, action) {
//       // state.isLoading = false;
//       // state.error = null;
//       // state.contacts = action.payload;
//     },
//     [fetchContacts.rejected](state, action) {
//       // state.isLoading = false;
//       // state.error = action.payload;
//     },
//   },
// });

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const listSlice = createSlice({
  name: 'contacts',
  initialState: {
    list: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.list = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      // state.list = [action.payload, ...state.list];
      state.list.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.list.findIndex(
        contact => contact.id === action.payload.id
      );
      state.list.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const listReducer = listSlice.reducer;
