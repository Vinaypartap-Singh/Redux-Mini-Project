import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";

export default function PostList() {
  const posts = useSelector(selectAllPosts);
  return (
    <div>
      <h2>Posts</h2>
      <div className="card-wrapper">
        {posts.map((post) => {
          return (
            <article key={post.id} className="card">
              <h3>{post.title}</h3>
              <p>{post.description.substring(0, 50)}</p>
              <p> Author: {post.userId} </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
