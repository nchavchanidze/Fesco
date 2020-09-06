import React from 'react';
import { Container } from 'react-bootstrap'
import '../../../App.scss';
import FirstList from './FirstList';
import SecondList from './SecondList';

class MenuSalad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title1: ".......... სალათები ..........",
        }
    }

    render() {
        return (
            <Container>
                <h1 className="menu-title mt-5 mb-5">{this.state.title1}</h1>
                <div className="d-flex justify-content-between align-items-center">
                    <FirstList />
                    <SecondList />
                </div>
            </Container>
        )
    }
}

export default MenuSalad;
