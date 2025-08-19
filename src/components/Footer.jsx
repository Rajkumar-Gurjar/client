import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-primary text-white pt-5 pb-4 mt-auto">
      <div className="container">
        <div className="row text-center text-md-start align-items-center">
          
          {/* Logo Section */}
          <div className="col-md-4 mb-4 text-center text-md-start">
            <img
              src="https://pninfosys.com/assets/colorlogo-BagIKm6w.png"
              alt="PNCOURSE LOGO"
              style={{
                height: "60px",
                backgroundColor: "white",
                padding: "5px",
                borderRadius: "5px"
              }}
            />
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white text-decoration-none">Home</Link>
              </li>
              <li>
                <Link to="/courses" className="text-white text-decoration-none">Courses</Link>
              </li>
              <li>
                <Link to="/login" className="text-white text-decoration-none">Login</Link>
              </li>
              <li>
                <Link to="/mybooking" className="text-white text-decoration-none">My Booking</Link>
              </li>
            </ul>
          </div>

          {/* Contact Section (Optional) */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold mb-3">Contact Us</h5>
            <p className="mb-1">📍 Vinay nagar, Gwalior, MP</p>
            <p className="mb-1">📞 +91 8815682128</p>
            <p>📧 hariomdhakad16122002@gmail.com</p>
          </div>
        </div>

        <hr className="border-light" />
        <p className="text-center mb-0 fw-semibold">
          © {new Date().getFullYear()} PNCOURSE | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;