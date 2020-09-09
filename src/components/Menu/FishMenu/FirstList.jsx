import React from 'react';
import { Container, Row } from 'react-bootstrap'
import MenuItem from '../../MenuItem';
import '../../../App.scss';

class FirstList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: [
                {
                    id: 0,
                    name: "კალმახი შემწვარი",
                    description: "Pork stomach with wallnuts",
                    price: "2.80 ₾"
                },
                {
                    id: 1,
                    name: "ხეკი შემწვარი",
                    description: "Beef stewed",
                    price: "1.80₾"
                },
                {
                    id: 2,
                    name: "მოხარშული ორაგული ქინძმარში",
                    description: "Ostri",
                    price: "3.70 ₾"
                },
                {
                    id: 3,
                    name: "ორაგულის სალათი ბულგარულით",
                    description: "Dolma with grape leaves",
                    price: "3.00 ₾"
                },
                {
                    id: 4,
                    name: "ორაგულის ფილე გამომცხვარი ღუმელში",
                    description: "Dolma",
                    price: "4.50 ₾"
                },
                {
                    id: 5,
                    name: "ლოქო ქინძმარში",
                    description: "Kebab (1 piece)",
                    price: "4.00 ₾"
                },
                {
                    id: 6,
                    name: "ზუთხი ქინძმარში",
                    description: "Beef cutlet (1 piece)",
                    price: "7.50 ₾"
                },
                {
                    id: 7,
                    name: "სიომგა ქინძმარში",
                    description: "Meat pancake (1 piece)",
                    price: "6.50 ₾"
                },
                {
                    id: 8,
                    name: "თევზი \"ცოცხალი\"",
                    description: "Cooked beef",
                    price: "2.50 ₾"
                },
                {
                    id: 9,
                    name: "ზღვის პროდუქტების სალათი",
                    description: "Khashi (1 serving)",
                    price: "5.50 ₾"
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
                <Row className="w-100 justify-content-between m-0">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default FirstList;
