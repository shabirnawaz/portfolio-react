import React from "react";
import img from "../images/Login-cuate.svg";

function ContactUS() {
  return (
    <>
      <div className="container-fluid py-4">
        <div className="container">
          <div className="row">
            <h4 className="text-center mb-4">
              Login to <span className="heading-span"> Your Account</span>
            </h4>
            <div className="col-md-6 ">
              <img src={img} alt="" className="img-responsive" />
            </div>
            <div className="col-md-6">
              <form>
                <div className="row">
                  <div className="col-md-12 mb-4">
                    <label htmlFor="FirstName" className="fw-bold mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your First Name"
                    />
                  </div>

                  <div className="col-md-12 mb-4">
                    <label htmlFor="LastName" className="fw-bold mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Last Name"
                    />
                  </div>

                  <div className="col-md-12 mb-4">
                    <label htmlFor="FirstName" className="fw-bold mb-2">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Email"
                    />
                  </div>

                  <div className="col-md-12 mb-4">
                    <label htmlFor="LastName" className="fw-bold mb-2">
                      Password
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Password"
                    />
                  </div>
                  <div className="col-md-12 text-center">
                    <button className=" btn-bg btn btn-outline-secondary">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUS;
