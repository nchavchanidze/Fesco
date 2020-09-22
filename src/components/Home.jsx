import React from 'react';
import { Container } from 'react-bootstrap'
import Aos from 'aos';
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
        return (
            <div id="home" data-aos="zoom-in">
                <div className="bg-layer">
                    <Container className="home-container position-relative">
                        <div className="HomeTextContainer">
                            <h1>{this.state.mainText}</h1>
                            <h2>{this.state.descriptionText}</h2>
                        </div>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Home;
