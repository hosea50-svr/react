import { getUserId } from "./auth";
import { getToken } from "./auth";
import "./Api.css";
import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import  Footer  from "./components/Footer"
import Header from "./components/Header";
import { Modal } from "bootstrap";
import WelcomeCarousel from "./components/WelcomeCarousel";

function App() {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const currentUserId = getUserId();
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(null);

  const [deleteId, setDeleteId] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);


      const truncateText = (text, maxLength) => {
      if (!text) return "";
      return text.length > maxLength
        ? text.substring(0, maxLength) + "..."
        : text;
    };

    const getImageUrl = (image) => {
      if (!image) return "/default.jpg";
      return image.startsWith("http")
        ? image
        : `http://127.0.0.1:8000${image}`;
    };
  // GET posts
  useEffect(() => {
    fetch("http://127.0.0.1:8000/class/blogs/")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  // POST (add new post)

const handleAddPost = (e) => {
  e.preventDefault();

  const token = getToken();

  const formData = new FormData();

  formData.append("title", title);
  formData.append("content", content);

  if (image) {
    formData.append("image", image);
  }

  fetch("http://127.0.0.1:8000/class/blogs/", {
    method: "POST",
    headers: {
      Authorization: `Token ${token}`,
    },
    body: formData,
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to create post");
      }
      return res.json();
    })
    .then((newPost) => {
      setPosts([newPost, ...posts]);

      setTitle("");
      setContent("");
      setImage(null);
      if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
    })
    .catch((err) => {
      console.error(err);
      alert("Unauthorized or failed request");
    });
};

//delete post
const handleDelete = (id) => {
  const token = getToken();
  fetch(`http://127.0.0.1:8000/class/blogs/${id}/`, {
    method: "DELETE",
    headers: {
      Authorization: `Token ${token}`,
    },
  })
    .then((res) => {
      if (res.status === 204) {
        // remove from UI
        setPosts(posts.filter((post) => post.id !== id));
        const modal = document.getElementById("deleteModal");

      const bootstrapModal =
        window.bootstrap.Modal.getInstance(modal);

    bootstrapModal.hide();

      } else {
        alert("Failed to delete");
      }
    })
    .catch((err) => console.log(err));
};


// const handleDelete = async (id) => {

//   const confirmDelete = window.confirm(
//     "Are you sure you want to delete this post?"
//   );

//   if (!confirmDelete) {
//     return;
//   }

//   try {
//     await fetch(`http://127.0.0.1:8000/class/blogs/${id}/`, {
//       method: "DELETE",
//     });

//     setPosts(posts.filter(post => post.id !== id));

//   } catch (error) {
//     console.log(error);
//   }
// };
  //Loadind code
    if (loading){
      return (
        <h2 style={{ color: "green", textAlign: "center", marginTop: "50px" }}>
          Loading...
        </h2>
      );
  }
  return (
    <>
      <Header />

      <div>
        <WelcomeCarousel />
      </div>
      <div className="blog-container">
        <div>
          <form className="add-form" onSubmit={handleAddPost}>
            <p className="fs-6">
              Note only registered users are allowed to add blog post
            </p>
             <h2>Create New Post</h2>
             <Link to='/register'>
                  <span className="text-success">
                    register
                </span>
             </Link>
             
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          /><br/>
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          /><br/>

            <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={(e) => setImage(e.target.files[0])}
          /><br/>
          <button type="submit">Add Post</button>
        </form>
        </div>


          <div className="blog-grid">
              {currentPosts.map((post) => (
                <div className="card blog-card" key={post.id}>
                  <div className="card-img-top">
                    <img src={getImageUrl(post.image)} className="blog-image" />
                  </div>
                  <div className="card-title">
                    <h4 className="blog-title">{post.title}</h4>
                  </div>
                  <div className="card-title">
                     <p>{truncateText(post.content, 100)}</p>
                  </div>
                  {post.user == currentUserId && (
                    <div className="users-btn">
                      <p
                        onClick={() => navigate(`/edit/${post.id}`)}
                        className="blog-edit mb-3"
                      >
                        Edit
                      </p>

                      {/* <p
                        onClick={() => handleDelete(post.id)}
                        className="blog-delete"
                      >
                        Delete
                      </p> */}
                      <button
                        className="btn btn-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteModal"
                        onClick={() => setDeleteId(post.id)}
                      >
                        Delete
                      </button>
                </div>
                  )}
                  <button
                    onClick={() => navigate(`/blog/${post.id}`)}
                    className="blog-read-more mt-3"
                  >
                    Read More
                  </button>
                </div>
              ))}
          </div>
            
          <div
            className="modal fade"
            id="deleteModal"
            tabIndex="-1"
            aria-labelledby="deleteModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">

                <div className="modal-header">
                  <h5
                    className="modal-title"
                    id="deleteModalLabel"
                  >
                    Delete Post
                  </h5>

                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                  ></button>
                </div>

                <div className="modal-body">
                  Are you sure you want to delete this post?
                </div>

                <div className="modal-footer">

                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDelete(deleteId)}
                    data-bs-dismiss="modal"
                  >
                    Delete
                  </button>

                </div>

              </div>
            </div>
          </div>
            <div className="pagination">
              <button
                className="previous-blog-page-btn"
                onClick={() => setCurrentPage((p) => p - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>

              <button
                className="next-blog-page-btn"
                onClick={() => setCurrentPage((p) => p + 1)}
                
                disabled={indexOfLastPost >= posts.length}
              >
                Next
              </button>
            </div>
          <div>
            <Footer />
          </div>
      </div>
    </>
  );
}

export default App;