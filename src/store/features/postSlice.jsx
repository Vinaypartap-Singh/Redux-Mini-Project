import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import { Axios } from "axios";
import sub from "date-fns/sub";

const initialState = [
  {
    id: 1,
    title: "Learning Redux Toolkit",
    description: "I am learning this from dave gray",
    userId: "Cool Dude",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: 2,
    title: "Redux Operation and Data Flow",
    description:
      "With this mini project I will understand the data flow of redux Toolkit",
    userId: "John Doe",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
];

const POSTS_URL = `https://jsonplaceholder.typicode.com/posts`;

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    const response = await Axios.get(POSTS_URL);
    return response.data;
  } catch (error) {
    return error.message;
  }
});

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.posts.push(action.payload);
      },
      prepare(title, description, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            date: new Date().toISOString(),
            userId,
          },
        };
      },
    },
  },
});

export const { postAdded } = postSlice.actions;
export const selectAllPosts = (state) => state.posts?.post;

export default postSlice.reducer;
