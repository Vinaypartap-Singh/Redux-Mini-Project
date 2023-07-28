import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PostList from "./store/features/postList";
import AddForm from "./store/features/AddForm";

function App() {
  return (
    <>
      <div>
        <AddForm />
        <PostList />
      </div>
    </>
  );
}

export default App;
