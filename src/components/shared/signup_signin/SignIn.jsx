import React, { Component } from 'react'
import { Container, Row, Col, Form, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ForgotPwdModal from './ForgotPwdModal'
import './_signin_signup.scss'

export class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalShow: false
        }
        
        this.Input = React.createRef();
    }

    componentDidMount() {
        this.Input.current.focus();
    }

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
                                <h1 className="login-title">Log in</h1>
                                <Form action="#!">
                                    <Form.Group>
                                        <Form.Control type="email" id="email" className="form-control" placeholder="email@example.com" ref={this.Input} />
                                        <Form.Label htmlFor="email">Email</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control type="password" id="password" className="form-control" placeholder="Enter your passsword" />
                                        <Form.Label htmlFor="password">Password</Form.Label>
                                    </Form.Group>
                                    <Form.Group>
                                        <Link className="btn btn-theme-primary btn-block" type="submit" to="/india-coin">Signin</Link>
                                    </Form.Group>
                                </Form>
                                <Button variant="link" className="forgot-password-link" onClick={() => this.setState({ modalShow: true })}>Forgot password?</Button>
                                <p className="login-wrapper-footer-text">Don't have an account? <Link to="/india-coin/signup" className="text-reset theme-text-primary">Register here</Link></p>
                            </div>
                            <Image className="signin-img" src={require('../../../assets/images/signin_img.svg').default} alt="signin-img" />
                        </Col>
                        <Col md={6} className="px-0 d-none d-md-block">
                            <div className="hiden-img">
                                <Image src="https://images.unsplash.com/photo-1443110189928-4448af4a2bc5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=897&q=80" alt="login image" className="login-img" />
                            </div>
                        </Col>
                    </Row>
                    <ForgotPwdModal show={this.state.modalShow} onHide={() => this.setState({ modalShow: false })} />
                </Container>
            </section>
        )
    }
}

export default SignIn
