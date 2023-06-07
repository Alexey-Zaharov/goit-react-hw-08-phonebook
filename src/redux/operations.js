import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (token, thunkAPI) => {
    try {
      const respose = await axios.get(
        'https://connections-api.herokuapp.com/contacts',
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return respose.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkAPI) => {
    const newContact = {
      name: data.contactData.name,
      number: data.contactData.number,
    };
    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/contacts',
        newContact,
        {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (data, thunkAPI) => {
    try {
      const response = await axios.delete(
        `https://connections-api.herokuapp.com/contacts/${data.id}`,
        {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/users/signup',
        credentials
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://connections-api.herokuapp.com/users/login',
        credentials
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(window.alert(error.message));
    }
  }
);

export const logOut = createAsyncThunk(
  'auth/logout',
  async (token, thunkAPI) => {
    try {
      await axios.post(
        'https://connections-api.herokuapp.com/users/logout',
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      const response = await axios.get(
        'https://connections-api.herokuapp.com/users/current',
        {
          headers: { Authorization: `Bearer ${persistedToken}` },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
