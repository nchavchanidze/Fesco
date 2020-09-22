import React from 'react';
import { Container } from 'react-bootstrap'
import '../App.scss';

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
            <div id="home">
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
