import React from 'react';
import { Container } from 'react-bootstrap'
import '../../../App.scss';
import FirstList from './FirstList';

class MenuCake extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title1: "ნამცხვრები",
        }
    }

    render() {
        return (
            <Container>
                <h1 className="menu-title mt-5 mb-5">{this.state.title1}</h1>
                <div className="w-100">
                    <FirstList />
                </div>
            </Container>
        )
    }
}

export default MenuCake;
