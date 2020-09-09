import React from 'react';
import { Container } from 'react-bootstrap'
import '../../../App.scss';
import FirstList from './FirstList';

class MenuChicken extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title1: "ქათმის კერძები",
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

export default MenuChicken;
