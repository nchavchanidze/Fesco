import React from 'react';
import { Container, Row } from 'react-bootstrap'
import MenuItem from '../../MenuItem';
import test from '../../../assets/img/menu/test.jpg'
import '../../../App.scss';

class FirstList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: [
                {
                    id: 0,
                    name: "ოლივიე",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "1.20₾",
                    image: test
                },
                {
                    id: 1,
                    name: "სტაფილოს სალათი",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "1.00₾",
                    image: test
                },
                {
                    id: 2,
                    name: "ქათმის სალათი",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.50₾",
                    image: test
                },
                {
                    id: 3,
                    name: "ქათმის სალათი ტარხუნით",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.50₾",
                    image: test
                },
                {
                    id: 4,
                    name: "ქათმის სალათი ბულგარულით",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.50₾",
                    image: test
                },
                {
                    id: 5,
                    name: "ქათმის სალათი სოკოთი და ნიგვზით",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.50₾",
                    image: test
                },
                {
                    id: 6,
                    name: "კრაბის სალათი",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "1.70₾",
                    image: test
                },
                {
                    id: 7,
                    name: "სოკოს სალათი",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.50₾",
                    image: test
                },
                {
                    id: 8,
                    name: "სალათი ცეზარი",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.30₾",
                    image: test
                },
                {
                    id: 9,
                    name: "წითელი კომბოსტო ავოკადოთი",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "1.60₾",
                    image: test
                },
                {
                    id: 10,
                    name: "კიტრი და პომიდვრის სალათი",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "1.50₾",
                    image: test
                },
                {
                    id: 11,
                    name: "ნადუღი სულგუნის ფირფიტებში (1 ცალი)",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "1.50₾",
                    image: test
                },
                {
                    id: 12,
                    name: "კომბოსტოს სალათი",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.50₾",
                    image: test
                },
            ]
        }
    }

    makeItems = (menu) => {
        return this.state.menu.map(item => {
            return <MenuItem item={item} key={item.id} name={item.name} />
        })
    }

    render() {
        return (
            <Container>
                <Row className="w-100 justify-content-between m-0">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container >
        )
    }
}

export default FirstList;
