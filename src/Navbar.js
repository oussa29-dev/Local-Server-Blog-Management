import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light p-4 ">
      <div className="container-md">
        <h1 className="navbar-brand" >
        
        The Dojo Blog</h1>
        <div className="links ">
         
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ">
              <li className="nav-item ">
              <Link to="/" className="navbar-brand">
            <span className="fw-bold active">Home</span>
          </Link>
              </li>
              <li className="nav-item">
              <Link to="/create" className="navbar-brand">
            <span className="fw-bold">New Blog</span>
          </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
