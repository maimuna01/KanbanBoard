import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ openModal }) => {
  return (
    <header className="text-gray-600 body-font" style={{ backgroundColor: '#6366F1' }}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" style={{ color: '#f1f5f9' }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">TO DO</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-gray-900" style={{ color: '#f1f5f9' }}>Home</Link>
          <Link to="/" className="mr-5 hover:text-gray-900" style={{ color: '#f1f5f9' }}>Second Link</Link>
        </nav>
        <Link to="/project" className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Add Project
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;



      /*
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand" href="/">
                TO DO
              </a>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                     Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Update
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Forum
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    */

