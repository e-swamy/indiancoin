import React, { Component } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './_infoSection.scss'


export class InfoSection extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.propsSendTag.infoData.map((item, index) => {
                        return (
                            <div key={index} id={item.id} className={`info_section py-5 ${item.bgColor === 'false' ? 'bg-white' : 'theme-secondary'}`}>
                                <Container>
                                    <Row className={`align-items-center justify-content-md-between ${item.directionRow === 'true' ? 'flex-row' : 'flex-row-reverse'}`}>
                                        <Col xl={5} lg={5} md={12}>
                                            <div className="info_content my-3">
                                                <p className="subtitle">{item.infoSubTitle}</p>
                                                <h1 className="infotitle">{item.infoTitle}</h1>
                                                <p className="description">{item.infoDescriptin}</p>
                                                <Link to={item.linkDirection} className={`btn rounded-pill d-inline-flex align-items-center ${item.btnColor === 'true' ? 'btn-theme-primary' : 'btn-theme-secondary'}`}>{item.btnLabel} <i className='bx bx-caret-right bx-xs'/></Link>
                                            </div>
                                        </Col>
                                        <Col xl={6} lg={6} md={12}>
                                            <Image className="my-3" src={item.infoImg} alt={item.infoImageAlt} fluid />
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                        )
                    })
                }
            </React.Fragment>
        )
    }
}

export default InfoSection

// import React from 'react'

// export default function InfoSection({ id, bgColor, directionRow, infoSubTitle, infoTitle, infoDescriptin, btnColor, btnLabel, infoImg, infoImageAlt }) {
//     return (
//         <div className={`info_section py-5 ${bgColor === 'false' ? 'bg-white' : 'theme-secondary'}`} id={id}>
//             <Container>
//                 <Row className={`align-items-center justify-content-md-between ${directionRow === 'true' ? 'flex-row' : 'flex-row-reverse'}`}>
//                     <Col xl={5} lg={5} md={12}>
//                         <div className="info_content my-3">
//                             <p className="subtitle">{infoSubTitle}</p>
//                             <h1 className="infotitle">{infoTitle}</h1>
//                             <p className="description">{infoDescriptin}</p>
//                             <Button className={`btn ${btnColor === 'true' ? 'btn-theme-primary' : 'btn-theme-secondary'}`}>{btnLabel}</Button>
//                          </div>
//                     </Col>
//                     <Col xl={6} lg={6} md={12}>
//                         <Image className="my-3" src={infoImg} alt={infoImageAlt} fluid />
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     )
// }