import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const userOrganizationSlice = createSlice({
  name: 'userOrganization',
  initialState,
  reducers: {
    updateUserOrganization: (state, action) => ({ ...state, ...action.payload }),
    resetUserOrganization: () => (initialState),
  },
});

export const { updateUserOrganization, resetUserOrganization } = userOrganizationSlice.actions;
export default userOrganizationSlice.reducer;
