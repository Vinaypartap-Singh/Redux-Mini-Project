import { createSlice, nanoid } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = [
  {
    id: 1,
    title: "Learning Redux Toolkit",
    description: "I am learning this from dave gray",
  },
  {
    id: 2,
    title: "Redux Operation and Data Flow",
    description:
      "With this mini project I will understand the data flow of redux Toolkit",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, description) {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
          },
        };
      },
    },
  },
});

export const { postAdded } = postSlice.actions;
export const selectAllPosts = (state) => state.post;

export default postSlice.reducer;
