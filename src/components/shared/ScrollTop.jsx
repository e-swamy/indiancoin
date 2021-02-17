import React, { Component } from 'react'
import { Link } from 'react-scroll'
export class ScrollTop extends Component {
    state = {
        // intervalId: 0,
        thePosition: false
    };

    componentDidMount() {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                this.setState({ thePosition: true })
            } else {
                this.setState({ thePosition: false })
            }
        });
        window.scrollTo(0, 0);
    }

    // onScrollStep = () => {
    //     if (window.pageYOffset === 0) {
    //         clearInterval(this.state.intervalId);
    //     }
    //     window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    // }

    // scrollToTop = () => {
    //     let intervalId = setInterval(this.onScrollStep, this.props.delayInMs);
    //     this.setState({ intervalId: intervalId });
    // }

    renderGoTopIcon = () => {
        if (this.state.thePosition) {
            return (
                <Link className="go-top text-white text-decoration-none" to="home" smooth={true}
                // <Link className="go-top" onClick={this.scrollToTop} smooth={true}
                duration={500}
                spy={true}
                offset={-80}>
                    Top
                </Link>
            )
        }
    }

    render() {
        return (
                    <React.Fragment>
                        {this.renderGoTopIcon()}
                    </React.Fragment>
        )
    }
}

export default ScrollTop
