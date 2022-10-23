import "./comm.css";
import React from "react";

const Comment = (props) => {
  return (
    <div className="comm">
      <h3 className="comm-h3">{props.coment.email}</h3>
      <p className="comm-p">{props.coment.body}</p>
    </div>
  );
};

export default Comment;
