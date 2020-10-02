import React from 'react';
import { Container } from 'react-bootstrap'
import Aos from 'aos';
import Slider from "react-slick";

import '../App.scss';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainText: "კაფეტერია ტარტანი",
            descriptionText: "- ადგილი, სადაც ორიენტაცია ხდება ჯანსაღ პროდუქტზე, ხარისხსა და გემოზე.",

        }
    }
    componentDidMount() {
        Aos.init({
            duration: 1000
        })
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            fade: true,
            easing: "ease-in",
            autoplay: true,
            speed: 350,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
        };
        return (
            <div id="home" data-aos="zoom-in">
                <Slider {...settings}>
                    <div>
                        <Container fluid={true} className="home-container-1 p-0">
                            <div className="bg-layer">
                                <Container className="HomeTextContainer position-relative">
                                    <h1>{this.state.mainText}</h1>
                                    <h2>{this.state.descriptionText}</h2>
                                </Container>
                            </div>
                        </Container>
                    </div>
                    <div>
                        <Container fluid={true} className="home-container-2 p-0">
                            <div className="bg-layer">
                                <Container className="HomeTextContainer position-relative">
                                    <h1>{this.state.mainText}</h1>
                                    <h2>{this.state.descriptionText}</h2>
                                </Container>
                            </div>
                        </Container>
                    </div>
                    <div>
                        <Container fluid={true} className="home-container-3 p-0">
                            <div className="bg-layer">
                                <Container className="HomeTextContainer position-relative">
                                    <h1>{this.state.mainText}</h1>
                                    <h2>{this.state.descriptionText}</h2>
                                </Container>
                            </div>
                        </Container>
                    </div>
                </Slider>
            </div>
        )
    }
}

export default Home;
