import React from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import '../App.scss';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "About Us",
            subtitle: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae."
        }
    }
    render() {
        return (
            <Container className="pb-5" id="about">
                <h1 className="mt-5">{this.state.title}</h1>
                <h2>{this.state.subtitle}</h2>
                <Row className="mt-5">
                    <Col md={6} sm={12}>
                        <p className="about-text">
                            Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                            Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.
                            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                            Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
                            Cras ultricies ligula sed magna dictum porta.
                        </p>
                        <p className="about-text mt-5">
                            Curabitur aliquet quam id dui posuere blandit.
                            Vivamus magna justo, lacinia eget consectetur sed, dictum porta.
                        </p>
                    </Col>
                    <Col md={6}>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default About;
