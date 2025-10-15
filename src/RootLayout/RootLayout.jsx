import { Outlet, NavLink } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <div className="container-fluid nav-bg">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container-fluid">
              {/* Logo */}
              <NavLink className="navbar-brand fw-bold" to="/">
                Shabir Afridi
              </NavLink>

              {/* Toggle button for mobile */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* Menu items */}
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      Home
                    </NavLink>
                  </li>
                  {/* <li className="nav-item">
                    <NavLink className="nav-link" to="/About">
                      About
                    </NavLink>
                  </li> */}
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/Services">
                      Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/ContactUS">
                      Contact Us
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <main>
        <Outlet />
        <footer className="text-center py-3 mt-5">
          © 2025 Shabir Afridi. All Rights Reserved.
        </footer>
      </main>
    </>
  );
}

export default RootLayout;
