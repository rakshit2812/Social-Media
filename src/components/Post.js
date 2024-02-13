import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../context/store";

export default function Post({ POST }) {
  const {deletePost} = useContext(PostListContext);
  return (
    <div>
      <div className="card my-card" style={{ width: "70%" }}>
        <div className="card-body ">
          <h5 className="card-title">
            {POST.title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger delete-bttn" onClick={()=>{deletePost(POST.id)}}>
              <MdDelete />
            </span>
          </h5>
          <p className="card-text" style={{ marginBottom: "0rem" }}>
            {POST.body}
          </p>
          {POST.tags.map((item) => (
            <span key={item} className="badge text-bg-primary my-badge">
              {item}
            </span>
          ))}
        </div>
        <div className="alert alert-success my-alert" role="alert" style={{margin : '10px 20px 20px 20px'}}>
          This post has been reacted by {POST.reactions} people.
        </div>
      </div>
    </div>
  );
}
