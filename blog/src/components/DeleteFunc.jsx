// export default function DeleteModal(){

//     const [deleteId, setDeleteId] = useState(null);
//     //delete post
// const handleDelete = (id) => {
//   const token = getToken();
//   fetch(`http://127.0.0.1:8000/class/blogs/${id}/`, {
//     method: "DELETE",
//     headers: {
//       Authorization: `Token ${token}`,
//     },
//   })
//     .then((res) => {
//       if (res.status === 204) {
//         // remove from UI
//         setPosts(posts.filter((post) => post.id !== id));
//         const modal = document.getElementById("deleteModal");

//       const bootstrapModal =
//         window.bootstrap.Modal.getInstance(modal);

//     bootstrapModal.hide();

//       } else {
//         alert("Failed to delete");
//       }
//     })
//     .catch((err) => console.log(err));
// };


//     return(
//         <div
//             className="modal fade"
//             id="deleteModal"
//             tabIndex="-1"
//             aria-labelledby="deleteModalLabel"
//             aria-hidden="true"
//           >
//             <div className="modal-dialog modal-dialog-centered">
//               <div className="modal-content">

//                 <div className="modal-header">
//                   <h5
//                     className="modal-title"
//                     id="deleteModalLabel"
//                   >
//                     Delete Post
//                   </h5>

//                   <button
//                     type="button"
//                     className="btn-close"
//                     aria-label="Close"
//                   ></button>
//                 </div>

//                 <div className="modal-body">
//                   Are you sure you want to delete this post?
//                 </div>

//                 <div className="modal-footer">

//                   <button
//                     type="button"
//                     className="btn btn-secondary"
//                     data-bs-dismiss="modal"
//                   >
//                     Cancel
//                   </button>

//                   <button
//                     type="button"
//                     className="btn btn-danger"
//                     onClick={() => handleDelete(deleteId)}
//                     data-bs-dismiss="modal"
//                   >
//                     Delete
//                   </button>

//                 </div>

//               </div>
//             </div>
//           </div>
//     )
// };