
function Footer() {
  return (
    <>
      <footer className="bg-light text-dark  text-center text-lg-start pt-5" >
        <div className="container p-4 text-dark" >
          {/* Section: Links */}
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Company</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-dark">About Us</a>
                </li>
                <li>
                  <a href="#" className="text-dark">Careers</a>
                </li>
                <li>
                  <a href="#" className="text-dark">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-dark">Terms of Service</a>
                </li>
              </ul>
            </div>
  
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 ">
              <h5 className="text-uppercase">Support</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-dark">Help Center</a>
                </li>
                <li>
                  <a href="#" className="text-dark">Contact Us</a>
                </li>
                <li>
                  <a href="#" className="text-dark">FAQs</a>
                </li>
              </ul>
            </div>
  
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Follow Us</h5>
              <ul className="list-unstyled d-flex justify-content-center">
                <li className="me-3">
                  <a href="#" className="text-dark">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="me-3">
                  <a href="#" className="text-dark">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="me-3">
                  <a href="#" className="text-dark">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="me-3">
                  <a href="#" className="text-dark">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
  
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Subscribe</h5>
              <form action="">
                <input
                  type="email"
                  className="form-control mb-2"
                  placeholder="Enter your email"
                  required
                />
                <button type="submit" className="btn btn-primary">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer
