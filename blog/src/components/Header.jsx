// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Header.css"


// export default function Header() {
//   const [open, setOpen] = useState(false);
//   return (
//     <header className="header">
//       <div className="header-container">
//         <div className="logo">
//           <Link to="/">MyBlog</Link>
//         </div>

//         <nav className={open ? "nav open" : "nav"}>
//           <Link to="/">Home</Link>
//           {/* <Link to="/blog">Blog</Link> */}
//           <Link to="/contact">Contact</Link>

//             <Link to='/login' style={{color:"gold",fontWeight:'bold'}}>
//                 Login
//             </Link>
//         </nav>

//         <button className="menu-btn" onClick={() => setOpen(!open)}>
//           ☰
//         </button>
//       </div>
   
//     </header>
//   );
// }


import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">

        <Link className="navbar-brand" to="/">
          MyBlog
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto">

            <Link className="nav-link" to="/">
              Home
            </Link>

            <Link className="nav-link" to="/contact">
              Contact
            </Link>

            <Link
              className="nav-link fw-bold text-warning"
              to="/login"
            >
              Login
            </Link>

          </div>
        </div>

      </div>
    </nav>
  );
}
