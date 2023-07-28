import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postSlice";

export default function AddForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();
  const savePostOnClick = () => {
    if (title && desc) {
      dispatch(postAdded(title, desc));
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div>
      <h1>Add Post</h1>
      <form>
        <input
          placeholder="Post Title"
          id="postTitle"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Post Description"
          id="postDesc"
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button type="button" onClick={() => savePostOnClick()}>
          Add Post
        </button>
      </form>
    </div>
  );
}
