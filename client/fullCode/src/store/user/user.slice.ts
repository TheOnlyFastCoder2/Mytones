import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { RootState } from '../index';

export interface State {
  name: string,
  avatar: string,
}

const initialState = {
  name: "",
  avatar: ""
}

const Slice = createSlice({
  name: "User",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    }
  }
})

export const { signIn } = Slice.actions;
export const getState = (state: RootState) => state.user;

export default Slice.reducer;