import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./features/postSlice";
import userSlice from "./features/users/userSlice";

const store = configureStore({
  reducer: {
    post: postSlice,
    users: userSlice,
  },
});

export default store;
