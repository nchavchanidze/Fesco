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
                    id: 7,
                    name: "ხორცის ბლინი (1 ცალი)",
                    description: "Meat pancake (1 piece)",
                    price: "1.00₾"
                },
                {
                    id: 8,
                    name: "საქონლის ხორცი მოხარშული",
                    description: "Cooked beef",
                    price: "5.50₾"
                },
                {
                    id: 9,
                    name: "ხაში (1 პორცია)",
                    description: "Khashi (1 serving)",
                    price: "7.00₾"
                },
                {
                    id: 10,
                    name: "ხოლოდეცი",
                    description: "Meat Jelly",
                    price: "2.50₾"
                },
                {
                    id: 11,
                    name: "ღორის ხორცის \"ბუჟენინა\"",
                    description: "Pork \"Buzhenina\"",
                    price: "2.80₾"
                },
                {
                    id: 12,
                    name: "საქონლის ხორცის სალათი",
                    description: "Beef salad",
                    price: "2.70₾"
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
