import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const Login = (props) => {
  return (
    <>
      <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>
                    <label style={{ fontSize: "20px" }}>Username</label>
                  </div>
                  <div>
                    <input
                      placeholder="Username"
                      type="email"
                      style={{ padding: "5px 2px", borderRadius: "3px" }}
                    />
                  </div>
                </div>
                <br />
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>
                    <label style={{ fontSize: "20px" }}>Password</label>
                  </div>
                  <div>
                    <input
                      placeholder="Password"
                      type="password"
                      style={{ padding: "5px 2px", borderRadius: "3px" }}
                    />
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderLeft: "1px solid grey",
                  paddingLeft: "30px",
                }}
              >
                <div>
                  <Button variant="primary">
                    <i
                      class="fab fa-google"
                      style={{ color: "white", marginRight: "3px" }}
                    >
                      {" "}
                      &nbsp;&nbsp;Continue with Google
                    </i>
                  </Button>
                </div>
                <div>or</div>
                <div>
                  <Button variant="primary">
                    <i
                      class="fab fa-facebook-f"
                      style={{ color: "white", marginRight: "3px" }}
                    >
                      {" "}
                      &nbsp;Continue with Facebook
                    </i>
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleLogin}>
            Log In
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;
