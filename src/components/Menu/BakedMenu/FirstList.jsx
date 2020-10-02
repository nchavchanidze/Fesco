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
                    name: "ხაჭაპური იმერული (1 ცალი)",
                    description: "Pork stomach with wallnutss",
                    price: "3.50 ₾",
                    image: test
                },
                {
                    id: 1,
                    name: "ხაჭაპური ნახევრად ფენოვანი (1 ცალი)",
                    description: "Beef stewed",
                    price: " 3.60₾",
                    image: test
                },
                {
                    id: 2,
                    name: "ხაჭაპური ნახევრად ფენოვანი (1 ლისტი)",
                    description: "Ostri",
                    price: "22.00 ₾",
                    image: test
                },
                {
                    id: 3,
                    name: "ხაჭაპური მეგრული (1 ცალი)",
                    description: "Dolma with grape leaves",
                    price: "3.50 ₾",
                    image: test
                },
                {
                    id: 4,
                    name: "ლობიანი (1 ცალი)",
                    description: "Dolma",
                    price: "2.00 ₾",
                    image: test
                },
                {
                    id: 5,
                    name: "ლობიანი ლორით (1 ცალი)",
                    description: "Kebab (1 piece)",
                    price: "3.30 ₾",
                    image: test
                },
                {
                    id: 6,
                    name: "ჰოთ-დოგი (1 ცალი)",
                    description: "Beef cutlet (1 piece)",
                    price: "1.50 ₾",
                    image: test
                },
                {
                    id: 7,
                    name: "გურული ღვეზელი (1 ცალი)",
                    description: "Meat pancake (1 piece)",
                    price: "3.50 ₾",
                    image: test
                },
                {
                    id: 8,
                    name: "სოკოს ღვეზელი (1 ცალი)",
                    description: "Cooked beef",
                    price: "1.00 ₾",
                    image: test
                },
                {
                    id: 9,
                    name: "ხორცის ღვეზელი (1 ცალი)",
                    description: "Khashi (1 serving)",
                    price: "1.60 ₾",
                    image: test
                },
                {
                    id: 10,
                    name: "ლობიოს ღვეზელი",
                    description: "Meat Jelly",
                    price: "0.80 ₾",
                    image: test
                },
                {
                    id: 11,
                    name: "კარტოფილის ღვეზელი",
                    description: "Pork \"Buzhenina\"",
                    price: "0.80 ₾",
                    image: test
                },
                {
                    id: 12,
                    name: "ტარხუნის ღვეზელი",
                    description: "Beef salad",
                    price: "1.00 ₾",
                    image: test
                },
                {
                    id: 13,
                    name: "მჭადი",
                    description: "Beef salad",
                    price: "0.70 ₾",
                    image: test
                },
                {
                    id: 14,
                    name: "ჭვიშტარი",
                    description: "Beef salad",
                    price: "1.00 ₾",
                    image: test
                },
                {
                    id: 15,
                    name: "აჩმა",
                    description: "Beef salad",
                    price: "3.50 ₾",
                    image: test
                },
                {
                    id: 16,
                    name: "პიცა",
                    description: "Beef salad",
                    price: "3.50 ₾",
                    image: test
                },
                {
                    id: 17,
                    name: "ჩიზბურგერი",
                    description: "Beef salad",
                    price: "3.00 ₾",
                    image: test
                },
                {
                    id: 18,
                    name: "ჰაბურგერი",
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
