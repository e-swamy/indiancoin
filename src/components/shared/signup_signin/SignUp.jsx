import React, { Component } from 'react'
import { Container, Row, Col, Form, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './_signin_signup.scss'

export class SignIn extends Component {
    render() {
        return (
            <section className="signin_signup_section" id="signin">
                <Container fluid={true}>
                    <Row>
                        <Col md={6} className="login-section-wrapper">
                            <Link to="/" className="brand-wrapper d-flex">
                                <span className="icon"><i className='bx bx-rupee' /></span> <span className="text-uppercase ml-2">Rupee</span>
                            </Link>
                            <div className="login-wrapper my-auto">
                                <h1 className="login-title">Sign Up</h1>
                                <Form action="#!">
                                    <Form.Group>
                                        <Form.Control type="text" id="name" className="form-control" placeholder="Name" />
                                        <Form.Label htmlFor="name">Name</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type="phone" id="mobile" className="form-control" placeholder="Mobile Number" />
                                        <Form.Label htmlFor="mobile">Mobile Number</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type="email" id="email" className="form-control" placeholder="email@example.com" />
                                        <Form.Label htmlFor="email">Email</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type="password" id="password" className="form-control" placeholder="Enter Passsword" />
                                        <Form.Label htmlFor="password">Password</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type="password" id="re-password" className="form-control" placeholder="Enter Re-passsword" />
                                        <Form.Label htmlFor="re-password">Re-Password</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <Link className="btn btn-theme-primary btn-block" type="submit" to="/">Register Now</Link>
                                    </Form.Group>
                                </Form>
                            </div>
                            <Image className="signin-img" src={require('../../../assets/images/signin_img.svg').default} alt="signin-img" />
                        </Col>
                        <Col md={6} className="px-0 d-none d-md-block">
                            <div className="hiden-img">
                                <Image src="https://images.unsplash.com/photo-1564143806867-42419ed0b58d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="login image" className="login-img" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default SignIn
