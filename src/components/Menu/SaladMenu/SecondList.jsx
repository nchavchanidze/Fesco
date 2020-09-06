import React from 'react';
import { Container } from 'react-bootstrap'
import MenuItem from '../../MenuItem';
import '../../../App.scss';

class SecondList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: [
                {
                    id: 8,
                    name: "MEXICANA",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "3.68₾"
                },
                {
                    id: 9,
                    name: "MEXICANA",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "3.68₾"
                },
                {
                    id: 10,
                    name: "MEXICANA",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "3.68₾"
                },
                {
                    id: 11,
                    name: "MEXICANA",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "3.68₾"
                },
                {
                    id: 12,
                    name: "PATRIJANA",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "3.68₾"
                },
                {
                    id: 13,
                    name: "MEXICANA",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "3.68₾"
                },
                {
                    id: 14,
                    name: "MEXICANA",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "3.68₾"
                },
                {
                    id: 15,
                    name: "MEXICANA",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "3.68₾"
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
                {/* {this.makeItems(this.state.items)} */}
            </Container>
        )
    }
}

export default SecondList;
