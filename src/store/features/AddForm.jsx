import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postSlice";
import { selectAllUser } from "./users/userSlice";

export default function AddForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [author, setAuthor] = useState("");

  const users = useSelector(selectAllUser);

  const dispatch = useDispatch();
  const savePostOnClick = () => {
    if (title && desc && author) {
      dispatch(postAdded(title, desc, author));
      setTitle("");
      setDesc("");
    }
  };

  const canSave = Boolean(title) && Boolean(desc) && Boolean(author);

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

        <select onChange={(e) => setAuthor(e.target.value)}>
          <option>Choose Author</option>
          {users.map((users) => {
            return <option key={users.id}>{users.name}</option>;
          })}
        </select>
        <button
          type="button"
          disabled={!canSave}
          onClick={() => savePostOnClick()}
        >
          Add Post
        </button>
      </form>
    </div>
  );
}
