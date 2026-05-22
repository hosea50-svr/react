import "./Edit.css";
import { getToken } from "../auth";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = getToken();  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // fetch single blog
  useEffect(() => {
  fetch(`http://127.0.0.1:8000/class/blogs/${id}/`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      setTitle(data.title);
      setContent(data.content);
    });
}, [id,token]);

  // update blog
  const handleUpdate = async (e) => {
    e.preventDefault();

    const response = await fetch(
      `http://127.0.0.1:8000/class/blogs/${id}/`,
      {
        method: "PATCH",

        headers: {
          "Content-Type": "application/json",
            Authorization: `Token ${token}`
        },

        body: JSON.stringify({
          title,
          content,
        }),
      }
    );

    if (response.ok) {
      navigate("/");
    }
  };

  return (
    <div className="edit-container">
      <h1 className="edit-title">Edit Blog</h1>

      <form 
        onSubmit={handleUpdate}
        className="edit-form"
      >
        <input
          type="text"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          className="edit-input"
        />

        <br />
        <br />

        <textarea
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
          className="edit-textarea"
        />

        <br />
        <br />

        <button type="submit" className="update-btn">
          Update Blog
        </button>

        <button onClick={() => navigate("/")}  className="back-btn">
             Back
        </button>
      </form>
    </div>
  );
}

export default Edit;