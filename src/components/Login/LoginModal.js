import React, { Component } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBContainer,
  MDBInput,
} from "mdbreact";

class LoginModal extends Component {
  render() {
    return (
      <>
        <MDBContainer>
          <MDBModal isOpen={this.props.modal} toggle={this.props.toggleModal}>
            <MDBModalHeader toggle={this.props.toggleModal}>
              Logowanie
            </MDBModalHeader>
            <MDBModalBody>
              <form>
                <div className="grey-text">
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
              </form>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={this.props.toggleModal}>
                Zamknij
              </MDBBtn>
              <MDBBtn color="primary">Zaloguj</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      </>
    );
  }
}

export default LoginModal;
