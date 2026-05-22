// import React from "react";
// import "./Blog.css";

// const blogs = [
//   {
//     id: 1,
//     title: "Understanding Shading in Art",
//     description: "Learn different shading techniques like hatching, cross-hatching and blending.",
//     image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f"
//   },
//   {
//     id: 2,
//     title: "React for Beginners",
//     description: "Start your journey into modern frontend development with React.",
//     image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee"
//   },
//   {
//     id: 3,
//     title: "Django REST API Guide",
//     description: "Build powerful APIs using Django REST Framework step-by-step.",
//     image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
//   }
// ];

// export default function BlogPage() {
//   return (
//     <div className="blog-container">
//       <h1 className="blog-title">My Blog</h1>

//       <div className="blog-grid">
//         {blogs.map((blog) => (
//           <div key={blog.id} className="blog-card">
//             <img src={blog.image} alt={blog.title} />
//             <div className="blog-content">
//               <h2>{blog.title}</h2>
//               <p>{blog.description}</p>
//               <button>Read More</button>
//               <button>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }