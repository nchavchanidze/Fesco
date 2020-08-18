import React from 'react';
import { Container } from 'react-bootstrap'
import '../App.scss';
import Header from './Header';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainText: "Making Food Taste Better.",
            descriptionText: "Italian Specialities",
            secondText: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae"

        }
    }
    render() {
        return (
            <div id="home" >
                    <Header />
                <Container className="home-container position-relative">
                    <div className="HomeTextContainer">
                        <h1>{this.state.mainText}</h1>
                        <h2>{this.state.descriptionText}</h2>
                        <p className="mt-5">{this.state.secondText}</p>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Home;
