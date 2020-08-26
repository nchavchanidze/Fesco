import React from 'react';
import { Container } from 'react-bootstrap'
import MenuItem from './MenuItem';
import '../App.scss';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Our Menu",
            subtitle: "Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
            title1: ".......... PIZZA ..........",
            menu: [
                {
                    id: 0,
                    name: "MEXICANA",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "1.90₾"
                },
                {
                    id: 1,
                  name: "MEXICANA",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "1.90₾"
                },
                {
                    id: 2,
                    name: "MEXICANA",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "1.90₾"
                },
                {
                    id: 3,
                    name: "MEXICANA",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "1.90₾"
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
            <Container className="pt-5" fluid={true} id="menu">
                <h1>{this.state.title}</h1>
                <h2>{this.state.subtitle}</h2>
                <Container>
                    <h1 className="menu-title mt-5 mb-5">{this.state.title1}</h1>
                    {this.makeItems(this.state.items)}
                </Container>
            </Container>
        )
    }
}

export default Menu;
