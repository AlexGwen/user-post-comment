import "./posts.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Comment from "../comments/comm";

const Posts = (props) => {
  const [coments, setComents] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let result = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setComents(result.data);
    };
    fetchData();
  }, []);
  let postId = props.post.id;

  let commPostId = [];
  for (let i = 0; i < coments.length; i++) {
    if (coments[i].postId === postId) {
      commPostId.push(coments[i]);
    }
  }

  return (
    <div className="post">
      <h2 className="post-title">{props.post.title}</h2>
      <span className="post-body">{props.post.body}</span>
      <div className="post-comm">
        {commPostId.map((comm) => (
          <Comment coment={comm} key={comm.id} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
