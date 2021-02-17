import React, { Component } from 'react'
import { Container, Row, Col, Card, Image, Accordion } from 'react-bootstrap'
import './_service.scss'

class ServiceSection extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currentActiveKey: 0,
            modalShow: false,
        }
    }

    render() {
        const serviceCardsData = [
            {
                id: 1,
                serviceImg: require('../../../assets/images/setup_analytics.svg').default,
                serviceImgInfo: 'img1',
                serviceTitle: 'Reduce Expenses',
                serviceText: 'Hendrerit dolor magna eget est lorem ipsum dolor sit.'
            },
            {
                id: 2,
                serviceImg: require('../../../assets/images/secure_data.svg').default,
                serviceImgInfo: 'img2',
                serviceTitle: 'Virtual office',
                serviceText: 'Amet facilisis magna etiam tempor orci eu lobortis elementum.'
            },
            {
                id: 3,
                serviceImg: require('../../../assets/images/personal_settings.svg').default,
                serviceImgInfo: 'img3',
                serviceTitle: 'Premium benifits',
                serviceText: 'Varius duis at consectetur lorem donec. Proin fermentum leo velorci pulvinar.'
            }
        ];
        return (
            <section className="service_section theme-secondary py-5" id="services">
                <Container>
                    <Row>
                        <Col xl={{ span: 6, offset: 3 }} lg={{ span: 8, offset: 2 }} md={12}>
                            <div className="section-heading text-center mb-5">
                                <h2 className="text-white">Our Services</h2>
                                <p className="text-white-50">Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Nullam eget felis eget nunc lobortis.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        {
                            serviceCardsData.map((item, index) => {
                                return (
                                    <Col xl={4} lg={4} md={6} sm={12} key={index} className="my-4">
                                        <Card as={Card.Body} className="service_single align-items-center text-center h-100">
                                            <Image src={item.serviceImg} alt={item.serviceImgInfo} width="150" />
                                            <div className="service_single_content mt-3">
                                                <Card.Title className="font-weight-bold">{item.serviceTitle}</Card.Title>
                                                <Card.Text>{item.serviceText}</Card.Text>
                                            </div>
                                        </Card>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <Row className="mt-4">
                        <Col xl={{ span: 6, offset: 3 }} lg={{ span: 8, offset: 2 }} md={12}>
                            <div className="section-heading text-center mb-5">
                                <h2 className="text-white">FAQ</h2>
                                <p className="text-white-50">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                        </Col>
                        <Col xl={{ span: 8, offset: 2 }} lg={{ span: 8, offset: 2 }} md={12}>
                            <Accordion defaultActiveKey={this.state.currentActiveKey} className="accordion_cards">
                                <Card className="border-0">
                                    <Accordion.Toggle as={Card.Header} eventKey="0" className={this.state.currentActiveKey === 0 ? 'theme-primary' : null}
                                        onClick={() => {
                                            this.setState({ currentActiveKey: 0 });
                                        }}>
                                        <h6 className="mb-0 d-flex align-items-center"><i className='bx bxl-quora bx-sm mr-2 theme-text-red' />Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
                                        <i className={this.state.currentActiveKey === 0 ? 'bx bx-caret-down mr-2' : 'bx bx-caret-right mr-2'} />
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            <Card.Text>Ornare aenean euismod elementum nisi quis eleifend. Cursus sit amet dictum sit amet. Egestas maecenas pharetra convallis posuere morbi leo urna. Libero volutpat sed cras ornare arcu dui vivamus arcu felis.</Card.Text>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card className="border-0">
                                    <Accordion.Toggle as={Card.Header} eventKey="1" className={this.state.currentActiveKey === 1 ? 'theme-primary' : null}
                                        onClick={() => {
                                            this.setState({ currentActiveKey: 1 });
                                        }}>
                                        <h6 className="mb-0 d-flex align-items-center"><i className='bx bxl-quora bx-sm mr-2 theme-text-red' />Excepteur sint occaecat cupidatat non proident</h6>
                                        <i className={this.state.currentActiveKey === 1 ? 'bx bx-caret-down mr-2' : 'bx bx-caret-right mr-2'} />
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            <Card.Text>In nulla posuere sollicitudin aliquam ultrices sagittis orci. Lobortis mattis aliquam faucibus purus in massa tempor nec. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed.</Card.Text>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card className="border-0">
                                    <Accordion.Toggle as={Card.Header} eventKey="2" className={this.state.currentActiveKey === 2 ? 'theme-primary' : null}
                                        onClick={() => {
                                            this.setState({ currentActiveKey: 2 });
                                        }}>
                                        <h6 className="mb-0 d-flex align-items-center"><i className='bx bxl-quora bx-sm mr-2 theme-text-red' />Ut enim ad minim veniam, quis nostrud exercitation</h6>
                                        <i className={this.state.currentActiveKey === 2 ? 'bx bx-caret-down mr-2' : 'bx bx-caret-right mr-2'} />
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>
                                            <Card.Text>Tincidunt ornare massa eget egestas purus. Netus et malesuada fames ac turpis egestas sed. Risus sed vulputate odio ut enim blandit volutpat. Quis eleifend quam adipiscing vitae proin sagittis nisl.</Card.Text>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card className="border-0">
                                    <Accordion.Toggle as={Card.Header} eventKey="3" className={this.state.currentActiveKey === 3 ? 'theme-primary' : null}
                                        onClick={() => {
                                            this.setState({ currentActiveKey: 3 });
                                        }}>
                                        <h6 className="mb-0 d-flex align-items-center"><i className='bx bxl-quora bx-sm mr-2 theme-text-red' />Volutpat blandit aliquam etiam erat velit</h6>
                                        <i className={this.state.currentActiveKey === 3 ? 'bx bx-caret-down mr-2' : 'bx bx-caret-right mr-2'} />
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="3">
                                        <Card.Body>
                                            <Card.Text>Sed risus ultricies tristique nulla aliquet enim tortor at. Id eu nisl nunc mi. Neque convallis a cras semper auctor neque vitae. Fermentum posuere urna nec tincidunt praesent semper feugiat. Gravida dictum fusce ut placerat orci nulla pellentesque.</Card.Text>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default ServiceSection


