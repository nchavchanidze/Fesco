import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas, faMapMarkerAlt, faClock, faPhone, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { fab, faFacebookF, faTwitter, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import '../App.scss';

library.add(fab, faFacebookF, faTwitter, faGooglePlusG, faInstagram, fas, faMapMarkerAlt, faClock, faPhone, faMapMarkedAlt)

const iconStyle = {
    color: '#fff',
    fontSize: "1.33333333em !important"
}

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address:
            {
                title: 'მისამართი:',
                add1: "ერეკლე ტატიშვილის ქუჩა 17, თბილისი",
                map: "რუკა",
                mapLink: "https://goo.gl/maps/WsbxF61H3kA6yV3A9"
            },
            hours:
            {
                title: 'სამუშაო საათები:',
                timedate1: 'ორშაბათი-კვირა: 9:00 - 22:00',
                phone: "+995 568 16 77 16",
            },
            socials:
            {
                title: 'სოციალური ქსელები:',
            }
        }
    }
    render() {
        return (
            <footer id='footer'>
                <Container className="pb-3 pt-5">
                    <Row className="m-auto">
                        <Col md={4} className="mt-3">
                            <h3>{this.state.address.title}</h3>
                            <p className="mb-2">
                                <FontAwesomeIcon className="mr-2" style={iconStyle} icon={['fas', 'map-marker-alt']} />
                                {this.state.address.add1}
                            </p>
                            <p className="mb-2">
                                <FontAwesomeIcon className="mr-2" style={iconStyle} icon={['fas', 'clock']} />
                                {this.state.hours.timedate1}
                            </p>
                            <p className="mb-2">
                                <FontAwesomeIcon className="mr-2" style={iconStyle} icon={['fas', 'phone']} />
                                {this.state.hours.phone}
                            </p>
                            <a className="map-btn" href={this.state.address.mapLink} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="mr-2" style={iconStyle} icon={['fas', 'map-marked-alt']} />
                                {this.state.address.map}
                            </a>
                        </Col>
                        <Col md={4} className="mt-3 footer-links">
                            <h3>ლინკები:</h3>
                            <p className="mb-2">
                                <a href="#home">მთავარი</a>
                            </p>
                            <p className="mb-2">
                                <a href="#home">ჩვენს შესახებ</a>
                            </p>
                            <p className="mb-2">
                                <a href="#home">მენიუ</a>
                            </p>
                            <p className="mb-2">
                                <a href="#home">გალერეა</a>
                            </p>
                        </Col>
                        {/* <Col md={5} offset={1} className="mt-3">
                            <a  href="#" target="_blank" rel="noopener noreferrer">Table Reservation</a>
                        </Col> */}
                        <Col md={{ span: 4 }} className="mt-3">
                            <h3>{this.state.socials.title}</h3>
                            <div className="w-75 d-flex justify-content-between align-items center">
                                <a href="https://www.facebook.com/cafeteriatartan/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon style={iconStyle} className="footer-icons" icon={['fab', 'facebook-f']} />
                                </a>
                                <a href="/#" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon style={iconStyle} className="footer-icons" icon={['fab', 'twitter']} />
                                </a>
                                <a href="/#" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon style={iconStyle} className="footer-icons" icon={['fab', 'google-plus-g']} />
                                </a>
                                <a href="https://www.instagram.com/cafeteria_tartan/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon style={iconStyle} className="footer-icons" icon={['fab', 'instagram']} />
                                </a>
                            </div>
                        </Col>
                    </Row>
                    <div className="text-center">
                        <p className="mt-5">© 2020 - ტარტანი. ყველა უფლება დაცულია</p>
                    </div>
                </Container>
            </footer>
        )
    }
}

export default Footer;
