import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 0,
    name: "John Doe",
  },
  {
    id: 1,
    name: "Cool Dude",
  },
  {
    id: 2,
    name: "Nothing",
  },
];

const userSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {},
});

export const selectAllUser = (state) => state.users;
export default userSlice.reducer;
