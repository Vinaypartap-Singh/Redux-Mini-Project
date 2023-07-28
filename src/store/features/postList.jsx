import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import TimeAgo from "./timeAgo";

export default function PostList() {
  const posts = useSelector(selectAllPosts);
  const orderedPosts = posts
    ?.slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  return (
    <div>
      <h2>Posts</h2>
      <div className="card-wrapper">
        {orderedPosts?.map((post) => {
          return (
            <article key={post.id} className="card">
              <h3>{post.title}</h3>
              <p>{post.description.substring(0, 50)}</p>
              <p>
                {" "}
                Author: {post.userId}{" "}
                <span>
                  {" "}
                  <TimeAgo timestamp={post.date} />{" "}
                </span>{" "}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
}
