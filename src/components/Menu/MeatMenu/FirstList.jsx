import React from 'react';
import { Container, Row } from 'react-bootstrap'
import MenuItem from '../../MenuItem';
import test from '../../../assets/img/menu/test.jpg'
import test2 from '../../../assets/img/menu/test2.jpg'
import '../../../App.scss';

class FirstList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: [
                {
                    id: 0,
                    name: "გოჭის კუჭ-მაჭი ნიგვზით",
                    description: "Pork stomach with wallnuts",
                    price: "2.80 ₾",
                    image: test2
                },
                {
                    id: 1,
                    name: "საქონლის ჩაშუშული",
                    description: "Beef stewed",
                    price: "5.00 ₾",
                    image: test
                },
                {
                    id: 2,
                    name: "ოსტრი",
                    description: "Ostri",
                    price: "5.00 ₾",
                    image: test

                },
                {
                    id: 3,
                    name: "ტოლმა ვაზის ფოთოლში",
                    description: "Dolma with grape leaves",
                    price: "1.90 ₾",
                    image: test

                },
                {
                    id: 4,
                    name: "ტოლმა",
                    description: "Dolma",
                    price: "1.90 ₾",
                    image: test

                },
                {
                    id: 5,
                    name: "ქაბაბი (1 ცალი)",
                    description: "Kebab (1 piece)",
                    price: "6.00 ₾",
                    image: test

                },
                {
                    id: 6,
                    name: "საქონლის კოტლეტი (1 ცალი)",
                    description: "Beef cutlet (1 piece)",
                    price: "2.20 ₾",
                    image: test

                },
                {
                    id: 7,
                    name: "ხორცის ბლინი (1 ცალი)",
                    description: "Meat pancake (1 piece)",
                    price: "1.00 ₾",
                    image: test

                },
                {
                    id: 8,
                    name: "საქონლის ხორცი მოხარშული",
                    description: "Cooked beef",
                    price: "5.50 ₾",
                    image: test

                },
                {
                    id: 9,
                    name: "ხაში (1 პორცია)",
                    description: "Khashi (1 serving)",
                    price: "8.00 ₾",
                    image: test

                },
                {
                    id: 10,
                    name: "ხოლოდეცი",
                    description: "Meat Jelly",
                    price: "2.50 ₾",
                    image: test

                },
                {
                    id: 11,
                    name: "ღორის ხორცის \"ბუჟენინა\"",
                    description: "Pork \"Buzhenina\"",
                    price: "3.80 ₾",
                    image: test

                },
                {
                    id: 12,
                    name: "საქონლის ხორცის სალათი",
                    description: "Beef salad",
                    price: "3.00 ₾",
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
