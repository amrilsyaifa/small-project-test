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
  isLoadingForm: boolean;
  isEdit: boolean;
  isModalVisible: boolean;
  formData: IHome;
}

const formDataTemplate = {
  userId: 0,
  id: 0,
  title: '',
  body: ''
};

const initialState: IState = {
  data: [],
  isLoading: false,
  isLoadingForm: false,
  isModalVisible: false,
  isEdit: false,
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
    addData: (state, action: PayloadAction<IHome>) => {
      state.data = [...state.data, action.payload];
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsLoadingForm: (state, action: PayloadAction<boolean>) => {
      state.isLoadingForm = action.payload;
    },
    setIsModalVisible: (state, action: PayloadAction<boolean>) => {
      state.isModalVisible = action.payload;
    },
    setIsIsEdit: (state, action: PayloadAction<boolean>) => {
      state.isEdit = action.payload;
    },
    clearFormData: (state) => {
      state.formData = formDataTemplate;
    },
    onChangeFormData: (state, action: PayloadAction<IHome>) => {
      state.formData = action.payload;
    }
  }
});

export const {
  fetchData,
  addData,
  setIsLoading,
  clearFormData,
  onChangeFormData,
  setIsModalVisible,
  setIsIsEdit,
  setIsLoadingForm
} = homeSlice.actions;

export const selectHome = (state: RootState) => state.home;

export default homeSlice.reducer;
