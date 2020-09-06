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
                    name: "გოჭის კუჭ-მაჭი ნიგვზით",
                    description: "Pork stomach with wallnuts",
                    price: "2.80 ₾"
                },
                {
                    id: 1,
                    name: "საქონლის ჩაშუშული",
                    description: "Beef stewed",
                    price: "5.00 ₾"
                },
                {
                    id: 2,
                    name: "ოსტრი",
                    description: "Ostri",
                    price: "5.00 ₾"
                },
                {
                    id: 3,
                    name: "ტოლმა ვაზის ფოთოლში",
                    description: "Dolma with grape leaves",
                    price: "1.90 ₾"
                },
                {
                    id: 4,
                    name: "ტოლმა",
                    description: "Dolma",
                    price: "1.90 ₾"
                },
                {
                    id: 5,
                    name: "ქაბაბი (1 ცალი)",
                    description: "Kebab (1 piece)",
                    price: "6.00 ₾"
                },
                {
                    id: 6,
                    name: "საქონლის კოტლეტი (1 ცალი)",
                    description: "Beef cutlet (1 piece)",
                    price: "2.20 ₾"
                },
                {
                    id: 7,
                    name: "ხორცის ბლინი (1 ცალი)",
                    description: "Meat pancake (1 piece)",
                    price: "1.00 ₾"
                },
                {
                    id: 8,
                    name: "საქონლის ხორცი მოხარშული",
                    description: "Cooked beef",
                    price: "5.50 ₾"
                },
                {
                    id: 9,
                    name: "ხაში (1 პორცია)",
                    description: "Khashi (1 serving)",
                    price: "8.00 ₾"
                },
                {
                    id: 10,
                    name: "ხოლოდეცი",
                    description: "Meat Jelly",
                    price: "2.50 ₾"
                },
                {
                    id: 11,
                    name: "ღორის ხორცის \"ბუჟენინა\"",
                    description: "Pork \"Buzhenina\"",
                    price: "3.80 ₾"
                },
                {
                    id: 12,
                    name: "საქონლის ხორცის სალათი",
                    description: "Beef salad",
                    price: "3.00 ₾"
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
