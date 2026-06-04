import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  return (
    <>
      <Header />

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="text-center mb-5">
              <h1 className="display-4 fw-bold">
                About Our{" "}
                <span
                  className="text-warning"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Blog
                </span>
              </h1>
              <p className="lead text-muted">
                Sharing stories, ideas, news, and insights that inspire and
                inform.
              </p>
            </div>

            <div className="card shadow border-0">
              <div className="card-body p-5">
                <h2 className="mb-3 text-primary">
                  Who We Are <i className="text-warning bi bi-mortarboard"></i>
                </h2>
                <hr />
                <p className="text-muted">
                  Welcome to our blog! This platform was created to provide
                  readers with valuable content ranging from current affairs,
                  technology, education, lifestyle, and much more.
                </p>

                <p className="text-muted">
                  We believe that information should be accessible, engaging,
                  and impactful. Our goal is to create content that educates,
                  inspires, and sparks meaningful conversations.
                </p>

                <hr className="my-4" />

                <div className="row text-center">
                  <div className="col-md-4 mb-4">
                    <div className="p-3">
                      <i className="bi bi-pencil-square fs-1 text-primary"></i>
                      <h4 className="mt-3">Quality Content</h4>
                      <p className="text-muted">
                        Carefully crafted articles designed to inform and
                        engage.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-4">
                    <div className="p-3">
                      <i className="bi bi-globe fs-1 text-success"></i>
                      <h4 className="text-warning">Global Reach</h4>
                      <p className="text-muted">
                        Connecting readers from different parts of the world.
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 mb-4">
                    <div className="p-3">
                      <i className="bi bi-people fs-1 text-danger"></i>
                      <h4 className="mt-3">Community</h4>
                      <p className="text-muted">
                        Building a community of curious and informed readers.
                      </p>
                    </div>
                  </div>
                </div>

                <hr className="my-4" />

                <h2 className="mb-3 text-warning">
                  Our Mission
                  <i className="text-success bi bi-trophy fs-2"></i>
                </h2>
                <p className="text-muted">
                  Our mission is to provide reliable, engaging, and insightful
                  content that helps readers stay informed and inspired. Whether
                  you're here for breaking news, educational articles, or
                  thought-provoking stories, we aim to deliver value with every
                  post.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-100 bg-warning p-3">
        <h4 className="text-center">
          Rules and regulations
          <i className="bi bi-card-checklist fs-5 m-2 text-danger"></i>
        </h4>
        <hr />
        <div className="d-flex justify-content-center text-muted">
          <ol>
            <li>
              Note that only Registered Members are aloud to Add,Edit,Delete a
              blog post
            </li>
            <li> Do not share Fake news in your blog Post</li>
            <li> Avoid sharing your password to any one</li>
          </ol>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <p>
            <strong>Developer: </strong>Bawa Funom
          </p>
          <p>
            <strong>Contact: </strong>+234 8103189576
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
