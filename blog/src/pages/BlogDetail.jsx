import { useEffect, useState } from "react";
import { useParams,useNavigate,} from "react-router-dom";
import { getToken } from "../auth";
import  "./BlogDetail.css"

function BlogDetail() {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();
  const token = getToken();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
  fetch(`http://127.0.0.1:8000/posts/${id}/comments/`)
    .then((res) => res.json())
    .then((data) => setComments(data));
  }, [id]);


  const handleComment = async (e) => {
  e.preventDefault();

  const response = await fetch(
    `http://127.0.0.1:8000/posts/${id}/comments/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        body,
      }),
    }
  );

  const data = await response.json();

  if (response.ok) {
    setComments((prev) => [data, ...prev]);

    setName("");
    setBody("");
  }
};

  useEffect(() => {
    fetch(
      `http://127.0.0.1:8000/class/blogs/${id}/`,
      {
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
      });

  }, [id,token]);

  if (!blog) {
    return <h1 style={{textAlign:"center",color:'gold'}}>Loading...</h1>;
  }

  return (
    <div className="detail-container">

      <h1>{blog.title}</h1>

      {blog.image && (
        <img
          src={`http://127.0.0.1:8000${blog.image}`}
          alt={blog.title}
          width="400"
        />
      )}

      <p className="blog-text">{blog.content}</p>

      <button className="blog-like">
        <i className="bi bi-heart m-2"></i>
        Like
      </button>

      <button
        onClick={() => navigate(-1)}
        className="back-btn p-2"
      >
        Back
      </button>


        <div className="comments-section">
      <h3>Comments</h3>

      {comments.map((comment) => (
        <div key={comment.id} className="comment">
          <div>
            <img src="/default-img.png" className="comment-img" />
          </div>
          
         <div className="comment-details">
          
            <h5>{comment.name}</h5>

            <p>{comment.body}</p>
         </div>

        </div>
      ))}
    </div>


      <div className="container">
        <form onSubmit={handleComment} className="comment-form">
          <h3>Leave a comment</h3>
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <textarea
            placeholder="Write comment..."
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />

          <button type="submit">
            Post Comment
          </button>

        </form>
      </div>
    </div>
  );
}

export default BlogDetail;