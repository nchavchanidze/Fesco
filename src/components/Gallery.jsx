import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Aos from 'aos';
import Slider from "react-slick";
import test from '../assets/img/menu/test.jpg'
import '../App.scss';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "გალერეა",
            subtitle: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
            image: test
        }
    }
    componentDidMount() {
        Aos.init({
            duration: 500
        })
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            fade: true,
            autoplay: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Container className="pb-5 pt-5" id="gallery" data-aos="fade-up">
                <h1>{this.state.title}</h1>
                <h2>{this.state.subtitle}</h2>
                <Container>
                    <Slider {...settings}>
                        <div>
                            <Row>
                                <Col md={4}>
                                    <img className="gallery-img" src={this.state.image} alt="img" />
                                </Col>
                                <Col md={4}>
                                    <img className="gallery-img" src={this.state.image} alt="img" />

                                </Col>
                                <Col md={4}>
                                    <img className="gallery-img" src={this.state.image} alt="img" />

                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <img className="gallery-img" src={this.state.image} alt="img" />

                                </Col>
                                <Col md={4}>
                                    <img className="gallery-img" src={this.state.image} alt="img" />

                                </Col>
                                <Col md={4}>
                                    <img className="gallery-img" src={this.state.image} alt="img" />

                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <img className="gallery-img" src={this.state.image} alt="img" />

                                </Col>
                                <Col md={4}>
                                    <img className="gallery-img" src={this.state.image} alt="img" />

                                </Col>
                                <Col md={4}>
                                    <img className="gallery-img" src={this.state.image} alt="img" />

                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row>
                                <Col md={4}>
                                    <img className="gallery-img" src={this.state.image} alt="img" />

                                </Col>
                                <Col md={4}>
                                    <img className="gallery-img" src={this.state.image} alt="img" />

                                </Col>
                                <Col md={4}>
                                    <img className="gallery-img" src={this.state.image} alt="img" />

                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <img className="gallery-img" src={this.state.image} alt="img" />

                                </Col>
                                <Col md={4}>
                                    <img className="gallery-img" src={this.state.image} alt="img" />

                                </Col>
                                <Col md={4}>
                                    <img className="gallery-img" src={this.state.image} alt="img" />

                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <img className="gallery-img" src={this.state.image} alt="img" />

                                </Col>
                                <Col md={4}>
                                    <img className="gallery-img" src={this.state.image} alt="img" />

                                </Col>
                                <Col md={4}>
                                    <img className="gallery-img" src={this.state.image} alt="img" />

                                </Col>
                            </Row>
                        </div>
                        <div>
                            <Row>
                                <Col md={4}>
                                    <img className="gallery-img" src={this.state.image} alt="img" />

                                </Col>
                                <Col md={4}>
                                    <img className="gallery-img" src={this.state.image} alt="img" />

                                </Col>
                                <Col md={4}>
                                    <img className="gallery-img" src={this.state.image} alt="img" />

                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <img className="gallery-img" src={this.state.image} alt="img" />

                                </Col>
                                <Col md={4}>
                                    <img className="gallery-img" src={this.state.image} alt="img" />

                                </Col>
                                <Col md={4}>
                                    <img className="gallery-img" src={this.state.image} alt="img" />

                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <img className="gallery-img" src={this.state.image} alt="img" />

                                </Col>
                                <Col md={4}>
                                    <img className="gallery-img" src={this.state.image} alt="img" />

                                </Col>
                                <Col md={4}>
                                    <img className="gallery-img" src={this.state.image} alt="img" />

                                </Col>
                            </Row>
                        </div>
                    </Slider>
                </Container>
            </Container>
        )
    }
}

export default Gallery;
