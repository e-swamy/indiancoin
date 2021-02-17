import { Row, Col, Modal, Image, Form, Button } from 'react-bootstrap'
import React, { Component } from 'react'

export class ForgotPwdModal extends Component {
    render() {
        return (
            <Modal {...this.props} centered
                size="md" aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header className="border-0" closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" className="h6">Forgot Password</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-4">
                    <Row>
                        <Col sm={6}>
                            <Form className="forgotpwd-form">
                                <Form.Group>
                                    <Form.Control type="email" id="Email" className="form-control" placeholder="email@example.com" />
                                    <Form.Label htmlFor="Email">Enter Email</Form.Label>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Control type="text" id="OTPtext" className="form-control" placeholder="OTP" />
                                    <Form.Label htmlFor="OTPtext">OTP</Form.Label>
                                </Form.Group>
                                <Form.Group>
                                    <Button className="btn btn-theme-primary btn-block" type="submit">Submit</Button>
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col sm={6} className="d-none d-md-block">
                            <Image src={require('../../../assets/images/forgot_password.svg').default} alt="forgot-img" fluid={true} />
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>
        )
    }
}

export default ForgotPwdModal
