import React from 'react';
import { Container } from 'react-bootstrap'
import '../App.scss';
import Header from './Header';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mainText: "კაფეტერია ტარტანი",
            descriptionText: "- ადგილი, სადაც ორიენტაცია ხდება ჯანსაღ პროდუქტზე, ხარისხსა და გემოზე.",

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
                    </div>
                </Container>
            </div>
        )
    }
}

export default Home;
