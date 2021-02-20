import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-scroll'
import './_heroSection.scss'
import bgVideo from '../../../assets/videos/Pexels-Videos-1409899.mp4'

export class HomeSection extends Component {
    render() {
        return (
            <section className="home_section" id="home">
                <video className="home_section_video_bg" autoPlay loop playsInline muted>
                    <source src={bgVideo} type="video/mp4" />
                </video>
                <Container>
                    <Row>
                        <Col xl={12}>
                            <div className="home_section_content d-flex flex-column align-items-center justify-content-center text-center">
                                <h1 className="text-white mb-3">Indian Coin Virtual bank Made Easy</h1>
                                <p className="text-white">Sign Up for a new account today and receive &#8377;250 in credit towards your next payment</p>
                                <Button as={Link} smooth={true} duration={500} spy={true} offset={-80}  to="about" variant="btn btn-theme-primary rounded-pill d-inline-flex align-items-center px-4 mt-3">Get Started <i className='bx bx-caret-right bx-xs'/></Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default HomeSection
