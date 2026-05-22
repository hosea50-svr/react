import "./Footer.css"
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>MyBlog</h3>
          <p>Sharing knowledge, ideas, and inspiration.</p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-right">
          <p>Follow us</p>
          <div className="socials">
            <a 
              href="https://www.facebook.com/share/1ELu4gaXpm/"
              target="_blank"
              rel="noopener noreferrer"
            
            ><i className="bi bi-facebook m-2 text-primary"></i></a>
            <a href=""><i className="bi bi-instagram m-2"></i></a>
            <a href="https://wa.me/2348103189576"
              target="_blank"
              rel="noopener noreferrer"
            ><i className="bi bi-whatsapp m-2 text-success"></i></a>
            <a href=""><i className="bi bi-twitter-x m-2"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MyBlog. All rights reserved.</p>
      </div>

    </footer>
  );
}
