import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';

// Define a type for the slice state

interface IUser {
  token: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  phone: string;
}

interface ICounterState {
  value: number;
  users: IUser;
}

// Define the initial state using that type
const initialState: ICounterState = {
  value: 0,
  users: {
    token: '',
    first_name: '',
    middle_name: '',
    last_name: '',
    phone: ''
  }
};

export const authSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    fetchData: (state, action: PayloadAction<IUser>) => {
      state.users = action.payload;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    }
  }
});

export const { increment, decrement, incrementByAmount, fetchData } = authSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.auth;

export default authSlice.reducer;
