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
                    name: "მოხარშული დედალი",
                    description: "Pork stomach with wallnuts",
                    price: "2.00 ₾",
                    image: test
                },
                {
                    id: 1,
                    name: "შემწვარი ქათამი (1 ცალი)",
                    description: "Beef stewed",
                    price: "14.00₾",
                    image: test
                },
                {
                    id: 2,
                    name: "ქათმის ღვიძლი ჩაშუშული",
                    description: "Ostri",
                    price: "1.80 ₾",
                    image: test
                },
                {
                    id: 3,
                    name: "ქათმის კოტლეტი (1 ცალი)",
                    description: "Dolma with grape leaves",
                    price: "2.20 ₾",
                    image: test
                },
                {
                    id: 4,
                    name: "კიევური კოტლეტი",
                    description: "Dolma",
                    price: "3.00 ₾",
                    image: test
                },
                {
                    id: 5,
                    name: "ქათმის რულეტი",
                    description: "Kebab (1 piece)",
                    price: "2.70 ₾",
                    image: test
                },
                {
                    id: 6,
                    name: "ქათმის ფილე მექსიკურად",
                    description: "Beef cutlet (1 piece)",
                    price: "2.50 ₾",
                    image: test
                },
                {
                    id: 7,
                    name: "ქათმის ფხალი",
                    description: "Meat pancake (1 piece)",
                    price: "2.50 ₾",
                    image: test
                },
                {
                    id: 8,
                    name: "ქათმის მწვადი შამფურზე",
                    description: "Cooked beef",
                    price: "3.50 ₾",
                    image: test
                },
                {
                    id: 9,
                    name: "ქათმის ბარკალი",
                    description: "Khashi (1 serving)",
                    price: "1.50 ₾",
                    image: test
                },
                {
                    id: 10,
                    name: "ქათმის შნიცელი",
                    description: "Meat Jelly",
                    price: "2.20 ₾",
                    image: test
                },
                {
                    id: 11,
                    name: "უზბეკური ფლავი ქათმის ფილეთი",
                    description: "Pork \"Buzhenina\"",
                    price: "2.20 ₾",
                    image: test
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
