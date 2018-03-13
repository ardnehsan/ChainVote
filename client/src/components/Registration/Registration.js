"react";
import ''
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel}Registration
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Register</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup row>
                <Label for="exampleEmail" sm={2}>
                  Email
                </Label>
                <Col sm={10}>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="email"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="examplePassword" sm={2}>
                  Password
                </Label>
                <Col sm={10}>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="examplePassword" sm={2}>
                  Confirm Password
                </Label>
                <Col sm={10}>
                  <Input
                    type="password"
                    name="password"
                    id="confirm_password"
                    placeholder="confirm password"
                  />
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Register
            </Button>
            {""}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default Registration;