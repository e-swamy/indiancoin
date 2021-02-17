import React, { Component } from 'react'
import NavbarSection from '../layouts/Navbar/NavbarSection'
import HomeSection from '../contents/hero_home/HomeSection'
import InfoSection from '../contents/infos/InfoSection'
// import { infoDataOne, infoDataTwo, infoDataThree } from '../infos/InfoData'
import ServiceSection from '../contents/services/ServiceSection'
import Footer from '../layouts/footer/Footer'
import ScrollTop from '../shared/ScrollTop'

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            infoDataOne: {
                infoData: [
                    {
                        id: 'about',
                        bgColor: "true",
                        directionRow: "true",
                        infoSubTitle: "Primium Bank",
                        infoTitle: "Unlimited transections with zero fees",
                        infoDescriptin: "Eu ultrices vitae auctor eu augue ut lectus arcu. Volutpat sed cras ornare arcu. Id faucibus nisl tincidunt eget nullam non nisi est sit. Mauris sit amet massa vitae tortor condimentum lacinia quis. Eget aliquet nibh praesent tristique magna sit amet purus.",
                        linkDirection: '#',
                        btnColor: "true",
                        btnLabel: "Read more",
                        infoImg: require('../../assets/images/off_road.svg').default,
                        infoImageAlt: 'img'
                    }
                ]
            },
            infoDataTwo: {
                infoData: [
                    {
                        id: 'discover',
                        bgColor: "false",
                        directionRow: "false",
                        infoSubTitle: "Unlimited access",
                        infoTitle: "Login to your account at any time",
                        infoDescriptin: "Sit amet nisl suscipit adipiscing bibendum est. Ornare aenean euismod elementum nisi quis eleifend. Cursus sit amet dictum sit amet. Egestas maecenas pharetra convallis posuere morbi leo urna.",
                        linkDirection: '#',
                        btnColor: "false",
                        btnLabel: "Learn More",
                        infoImg: require('../../assets/images/savings.svg').default,
                        infoImageAlt: 'img'
                    }
                ]
            },
            infoDataThree: {
                infoData: [
                    {
                        id: 'signup',
                        bgColor: "false",
                        directionRow: "true",
                        infoSubTitle: "Join our team",
                        infoTitle: "Creating an account is extremely easy",
                        infoDescriptin: "In nulla posuere sollicitudin aliquam ultrices sagittis orci. Lobortis mattis aliquam faucibus purus in massa tempor nec. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed.",
                        linkDirection: '/signup',
                        btnColor: "false",
                        btnLabel: "Register Now",
                        infoImg: require('../../assets/images/team_up.svg').default,
                        infoImageAlt: 'img'
                    }
                ]
            }
        }
    }

    render() {
        return (
            <div className="app-wrapper">
                <NavbarSection />
                <HomeSection />
                <InfoSection propsSendTag={this.state.infoDataOne} />
                <InfoSection propsSendTag={this.state.infoDataTwo} />
                {/* <InfoSection {...infoDataOne} /> */}
                {/* <InfoSection {...infoDataTwo} /> */}
                <ServiceSection />
                {/* <InfoSection {...infoDataThree} /> */}
                <InfoSection propsSendTag={this.state.infoDataThree} />
                <ScrollTop />
                <Footer />
            </div>
        )
    }
}

export default Home
