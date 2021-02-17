import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
import './_infoSection.scss'

export default function InfoSection({ id, bgColor, directionRow, infoSubTitle, infoTitle, infoDescriptin, btnColor, btnLabel, infoImg, infoImageAlt }) {
    return (
        <div className={`info_section py-5 ${bgColor === 'false' ? 'bg-white' : 'theme-secondary'}`} id={id}>
            <Container>
                <Row className={`align-items-center justify-content-md-between ${directionRow === 'true' ? 'flex-row' : 'flex-row-reverse'}`}>
                    <Col xl={5} lg={5} md={12}>
                        <div className="info_content my-3">
                            <p className="subtitle">{infoSubTitle}</p>
                            <h1 className="infotitle">{infoTitle}</h1>
                            <p className="description">{infoDescriptin}</p>
                            <Button className={`btn ${btnColor === 'true' ? 'btn-theme-primary' : 'btn-theme-secondary'}`}>{btnLabel}</Button>
                         </div>
                    </Col>
                    <Col xl={6} lg={6} md={12}>
                        <Image className="my-3" src={infoImg} alt={infoImageAlt} fluid />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
