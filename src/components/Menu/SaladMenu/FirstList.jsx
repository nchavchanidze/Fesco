import React from 'react';
import { Container } from 'react-bootstrap'
import MenuItem from '../../MenuItem';
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
                    price: "1.20₾"
                },
                {
                    id: 1,
                    name: "სტაფილოს სალათი",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "1.00₾"
                },
                {
                    id: 2,
                    name: "ქათმის სალათი",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.50₾"
                },
                {
                    id: 3,
                    name: "ქათმის სალათი ტარხუნით",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.50₾"
                },
                {
                    id: 4,
                    name: "ქათმის სალათი ბულგარულით",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.50₾"
                },
                {
                    id: 5,
                    name: "ქათმის სალათი სოკოთი და ნიგვზით",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.50₾"
                },
                {
                    id: 6,
                    name: "კრაბის სალათი",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "1.70₾"
                },
                {
                    id: 7,
                    name: "სოკოს სალათი",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.50₾"
                },
                {
                    id: 8,
                    name: "სალათი ცეზარი",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.30₾"
                },
                {
                    id: 9,
                    name: "წითელი კომბოსტო ავოკადოთი",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "1.60₾"
                },
                {
                    id: 10,
                    name: "კიტრი და პომიდვრის სალათი",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "1.50₾"
                },
                {
                    id: 11,
                    name: "ნადუღი სულგუნის ფირფიტებში (1 ცალი)",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "1.50₾"
                },
                {
                    id: 12,
                    name: "კომბოსტოს სალათი",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.50₾"
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
                {this.makeItems(this.state.items)}
            </Container>
        )
    }
}

export default FirstList;
