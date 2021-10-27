import React from "react";

const Navbar = ({ getSearch, search, updateSearch }) => {
  return (
    <div
      style={{
        position: "sticky",
        top: "0px",
        zIndex: 100,
      }}
    >
      <nav
        className="navbar navbar-expand-lg navbar-light p-0 mb-3"
        style={{
          background: "#0a58ca",
          position: "sticky",
          top: "0px",
          padding: "10px 0px",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand text-white font-weight-bold" href="/">
            SHADI.COM
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" href="/">
                  About
                </a>
              </li>
            </ul>
            <form onSubmit={getSearch} className="d-flex ">
              <input
                onChange={updateSearch}
                className="form-control me-2 p-1"
                value={search}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary btn-sm p-1 " type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
