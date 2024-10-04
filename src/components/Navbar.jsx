// import logo from '../src/assets/react.svg';
import logo from "../assets/branding-identity-corporate-logo-vector-design-template.png"



export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light  p-3 rounded-5 shadow">
        <div className="container-fluid">
          {/* Left side: Logo */}
          <a className="navbar-brand" href="#">
            <img
                src= {logo}// Replace with your logo URL
                alt="Logo"
                width="30"
                height="30"
                className="d-inline-block align-text-top"
            />
            Assignment
          </a>

          <button type="button"
            className="navbar-toggler me-3"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="toggle navigation">

            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Center: Menu */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item pe-3 ps-3">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item v">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item pe-3 ps-3">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item pe-3 ps-3">
                <a className="nav-link" href="#">About</a>
              </li>
            </ul>
          </div>

          {/* Right side: Buttons */}
          <div className="d-flex">
            <button className="btn btn-outline-warning me-2 pe-4 ps-4" type="button"><strong>Login</strong></button>
            <button className="btn btn-warning pe-4 ps-4" type="button"><strong>Sign Up</strong></button>
          </div>
        </div>
      </nav>
            
    </>
  )
};

