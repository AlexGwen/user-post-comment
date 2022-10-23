import React from "react";
import Posts from "../posts/posts";
import axios from "axios";
import { useEffect, useState } from "react";
import "./user.css";

const User = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(result.data);
    };
    fetchData();
  }, []);
  let userId = props.user.id;

  let postUserId = [];
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].userId === userId) {
      postUserId.push(posts[i]);
    }
  }
  postUserId.length = 3;

  function openPosts() {
    let dia = document.getElementById(props.user.id);
    if (dia.style.display !== "flex") {
      dia.style.display = "flex";
    } else {
      dia.style.display = "none";
    }
    colorToggle();
  }

  //toggle color button
  function colorToggle() {
    const btn = document.getElementById(props.user.username);
    btn.classList.toggle("btn");
  }

  return (
    <div className="user">
      <h1 className="user-name">{props.user.name}</h1>
      <span className="user-span">Email: {props.user.email}</span>
      <span className="user-span">City: {props.user.address.city}</span>
      <div className="user-block">
        <button
          id={props.user.username}
          className="user-btn"
          onClick={openPosts}
        >
          Post
        </button>
        <dialog id={props.user.id} className="div">
          {postUserId.map((post) => (
            <Posts post={post} key={post.id} />
          ))}
        </dialog>
      </div>
    </div>
  );
};

export default User;
