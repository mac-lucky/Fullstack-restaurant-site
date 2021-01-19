import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCard, MDBCardBody } from "mdbreact";
import "./Register.css";

const Register = () => {
  return (
    <>
      <div className="RegisterPage d-flex align-items-center">
        <MDBContainer>
          <MDBRow>
            <MDBCol className="offset-lg-3 offset-md-0" lg="6">
              <MDBCard>
                <MDBCardBody>
                  <form>
                    <p className="h4 text-center py-4">Rejestracja</p>
                    <div className="grey-text">
                      <MDBInput
                        label="Imię"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Nazwisko"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Email"
                        icon="envelope"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                      />
                      <MDBInput
                        label="Hasło"
                        icon="lock"
                        group
                        type="password"
                        validate
                      />
                    </div>
                    <div className="text-center py-4 mt-3">
                      <MDBBtn color="cyan" type="submit">
                        Register
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </>
  );
};

export default Register;
