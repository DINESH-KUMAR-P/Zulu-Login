import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedId: '',
};


const userSlice = createSlice({
  name: 'editUser',
  initialState,
  reducers: {
    editUserProfile: (state, action) => ({ ...state, ...action.payload }),
  },
});

export const { editUserProfile } = userSlice.actions;
export default userSlice.reducer;
