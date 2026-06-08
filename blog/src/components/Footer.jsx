import "./Footer.css"
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h4 className="text-warning" style={{cursor:"pointer"}}>MyBlog
            <i className="bi bi-mortarboard text-primary"></i>
          </h4>
          <p>Sharing knowledge, ideas, and inspiration.</p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="footer-right">
          <p>Follow us</p>
          <div className="socials">
            <a 
              href="https://www.facebook.com/share/1ELu4gaXpm/"
              target="_blank"
              rel="noopener noreferrer"           
            ><i className="bi bi-facebook m-2 text-primary"></i></a>

            <a href=""><i className="bi bi-instagram m-2 text-warning"></i></a>

            <a href="https://wa.me/2348103189576"
              target="_blank"
              rel="noopener noreferrer"
            ><i className="bi bi-whatsapp m-2 text-success"></i></a>

            <a href=""><i className="bi bi-twitter-x m-2"></i></a>

            <a href="https://www.youtube.com/@FunomBawa">
              <i className="bi bi-youtube m-2 text-danger"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MyBlog. All rights reserved.</p>
      </div>

    </footer>
  );
}
