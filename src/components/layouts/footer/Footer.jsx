import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './_footer.scss'

export class Footer extends Component {
    render() {
        const footerColData = [
            {
                id: 1,
                footerTitle: 'About Us',
                footerItemData: [
                    {
                        id: 1,
                        singleItem: 'How it works'
                    },
                    {
                        id: 2,
                        singleItem: 'Testimonials'
                    },
                    {
                        id: 3,
                        singleItem: 'Careers'
                    },
                    {
                        id: 4,
                        singleItem: 'Investors'
                    },
                    {
                        id: 5,
                        singleItem: 'Term of service'
                    }
                ]
            },
            {
                id: 2,
                footerTitle: 'Contact Us',
                footerItemData: [
                    {
                        id: 1,
                        singleItem: 'Contact'
                    },
                    {
                        id: 2,
                        singleItem: 'Support'
                    },
                    {
                        id: 3,
                        singleItem: 'Destinations'
                    },
                    {
                        id: 4,
                        singleItem: 'Sponsorships'
                    }
                ]
            },
            {
                id: 3,
                footerTitle: 'Videos',
                footerItemData: [
                    {
                        id: 1,
                        singleItem: 'Submit Video'
                    },
                    {
                        id: 2,
                        singleItem: 'ambassadors'
                    },
                    {
                        id: 3,
                        singleItem: 'Agency'
                    },
                    {
                        id: 4,
                        singleItem: 'Influencer'
                    }
                ]
            }
        ];
        return (
            <footer className="footer theme-secondary">
                <div className="footer-top py-5">
                    <Container>
                        <Row>
                            {
                                footerColData.map((item, index) => {
                                    // console.log('item', item);
                                    const { footerItemData } = item;
                                    return (
                                        <Col xl={3} lg={3} md={6} sm={6} xs={6} className="single_column" key={index}>
                                            <h4 className="title theme-text-primary font-weight-bold mb-4">{item.footerTitle}</h4>
                                            <ul className="list-unstyled">
                                                {
                                                    footerItemData.map((listitems) => {
                                                        return (
                                                            <li key={listitems.id}>
                                                                <Link to="#">{listitems.singleItem}</Link>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </Col>
                                    )
                                })
                            }
                            <Col xl={3} lg={3} md={6} sm={6} xs={6} className="single_column">
                                <h2 className="title theme-text-primary font-weight-bold h4 mb-4">Social Media</h2>
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="https://www.instagram.com/accounts/login" target="_blank" rel="noreferrer"><i className="mr-2 bx bxl-instagram-alt" /> Instagram</a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="mr-2 bx bxl-facebook-square" /> Facebook</a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><i className="mr-2 bx bxl-youtube" /> Youtube</a>
                                    </li>
                                    <li>
                                        <a href="https://mobile.twitter.com/login" target="_blank" rel="noreferrer"><i className="mr-2 bx bxl-twitter" /> Twitter</a>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="footer-bottom py-3">
                    <Container>
                        <Row>
                            <Col xl={6} lg={6} md={12} className="text-xl-left text-lg-left text-center">
                                <p className="m-0 p-0 text-white-50">Copyright &copy; 2021 Rupee. All rights reserved</p>
                            </Col>
                            <Col xl={6} lg={6} md={12} className="text-xl-right text-lg-right text-center">
                                <ul className="list-inline m-0 p-0">
                                    <li className="list-inline-item"><Link to="http://">Terms of Use</Link></li>
                                    <li className="list-inline-item"><Link to="http://">Privacy Policy</Link></li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </footer>
        )
    }
}

export default Footer

