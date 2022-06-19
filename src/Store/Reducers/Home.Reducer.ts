import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '..';

export interface IHome {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IState {
  data: IHome[];
  isLoading: boolean;
  formData: IHome;
}

const initialState: IState = {
  data: [],
  isLoading: false,
  formData: {
    userId: 0,
    id: 0,
    title: '',
    body: ''
  }
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    fetchData: (state, action: PayloadAction<IHome[]>) => {
      state.data = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  }
});

export const { fetchData, setIsLoading } = homeSlice.actions;

export const selectHome = (state: RootState) => state.home;

export default homeSlice.reducer;
