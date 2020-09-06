import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faFacebookF, faTwitter, faGooglePlusG, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import '../App.scss';

library.add(fab, faFacebookF, faTwitter, faGooglePlusG, faInstagram)

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
                title: 'ADDRESS:',
                add1: "17 Awesome Street, Belgrade",
                add2: "SR 877900"
            },
            hours:
            {
                title: 'OPENING HOURS:',
                timedate1: 'Monday - Friday......................................8:00am - 11:00 pm',
                timedate2: 'Saturday - Sunday......................................8:00am - 11:00 pm'
            },
            socials:
            {
                title: 'WE ARE SOCIAL',
                description: 'Feel free to check our social media pages'
            }
        }
    }
    render() {
        return (
            <Container fluid={true} id='footer' className="">
                <Container className="pb-3 pt-5">
                    <Row className="m-auto">
                        <Col md={3}>
                            <h3>{this.state.address.title}</h3>
                            <p>{this.state.address.add1}</p>
                            <p>{this.state.address.add2}</p>
                            <button className="mt-4">view map</button>
                            <p className="mt-5"> © 2020 - Tartan All Right Reserved</p>
                        </Col>
                        <Col md={5} offset={1}>
                            <h3>{this.state.hours.title}</h3>
                            <p>{this.state.hours.timedate1}</p>
                            <p>{this.state.hours.timedate2}</p>
                            <button className="mt-4">Table Reservation</button>
                        </Col>
                        <Col md={3} offset={1}>
                            <h3>{this.state.socials.title}</h3>
                            <p className="mt-2">{this.state.socials.description}</p>
                            <div className="mt-4 d-flex justify-content-between align-items center">
                                <button>
                                    <FontAwesomeIcon style={iconStyle} icon={['fab', 'facebook-f']} />
                                </button>
                                <button>
                                    <FontAwesomeIcon style={iconStyle} icon={['fab', 'twitter']} />
                                </button>
                                <button>
                                    <FontAwesomeIcon style={iconStyle} icon={['fab', 'google-plus-g']} />
                                </button>
                                <button>
                                    <FontAwesomeIcon style={iconStyle} icon={['fab', 'instagram']} />
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        )
    }
}

export default Footer;
