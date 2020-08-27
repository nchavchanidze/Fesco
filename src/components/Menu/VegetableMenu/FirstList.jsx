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
                    name: "MEXICANA",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.50₾"
                },
                {
                    id: 1,
                    name: "MEXICANA",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.50₾"
                },
                {
                    id: 2,
                    name: "MEXICANA",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.50₾"
                },
                {
                    id: 3,
                    name: "MEXICANA",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.50₾"
                },
                {
                    id: 4,
                    name: "PATRIJANA",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.50₾"
                },
                {
                    id: 5,
                    name: "MEXICANA",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.50₾"
                },
                {
                    id: 6,
                    name: "MEXICANA",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.50₾"
                },
                {
                    id: 7,
                    name: "MEXICANA",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.50₾"
                }
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
