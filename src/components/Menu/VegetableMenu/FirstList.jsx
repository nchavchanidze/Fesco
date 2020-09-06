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
                    name: "სოკოს შილა-ფლავი",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.00₾"
                },
                {
                    id: 1,
                    name: "პრასი ნიგვზით",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.50₾"
                },
                {
                    id: 2,
                    name: "დაჭრილი ჭარხალი ნიგვზით",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "1.60₾"
                },
                {
                    id: 3,
                    name: "ისპანახის ფხალი ნიგვზით",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.50₾"
                },
                {
                    id: 4,
                    name: "ისპანახი ზეთში შემწვარი",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "1.50₾"
                },
                {
                    id: 5,
                    name: "ყვავილოვანი კომბოსტო მაიონეზში",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "1.70₾"
                },
                {
                    id: 6,
                    name: "ყვავილოვანი კომბოსტო ბოსტნეულით",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.00₾"
                },
                {
                    id: 7,
                    name: "ბადრიჯანი ბულგარულით სუნელებში",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.00₾"
                },
                {
                    id: 8,
                    name: "ბადრიჯანი ნიგვზით და მაიონეზით",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.00₾"
                },
                {
                    id: 9,
                    name: "ეკალა ნიგვზით",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.80₾"
                },
                {
                    id: 10,
                    name: "ბულგარული ნიგვზით",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.80₾"
                },
                {
                    id: 11,
                    name: "ტოლმა სამარხვო(1 ცალი)",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "1.60₾"
                },
                {
                    id: 12,
                    name: "კოტლეტი სამარხვო (1 ცალი)",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "1.00₾"
                },
                {
                    id: 13,
                    name: "ბადრიჯანი ნიგვზით",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.50₾"
                },
                {
                    id: 14,
                    name: "მწვანე ლობიო ნიგვზით",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.50₾"
                },
                {
                    id: 15,
                    name: "წითელი ლობიო ნიგვზით",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.00₾"
                },
                {
                    id: 16,
                    name: "ლობიო ამოლესილი",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "1.20₾"
                },
                {
                    id: 17,
                    name: "ქამა სოკოს ჩაშუშული",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.30₾"
                },
                {
                    id: 18,
                    name: "ხის სოკოს ჩაშუშული",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.30₾"
                },
                {
                    id: 19,
                    name: "აჯაფსანდალი",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.00₾"
                },
                {
                    id: 20,
                    name: "უზბეკური ფლავი სამარხვო",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "1.80₾"
                },
                {
                    id: 21,
                    name: "კარტოფილის პიურე",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "0.70₾"
                },
                {
                    id: 22,
                    name: "ბოსტნეული მოთუშული ბროკოლით",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "2.00₾"
                },
                {
                    id: 23,
                    name: "ახალი კარტოფილი შემწვარი",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "1.60₾"
                },
                {
                    id: 24,
                    name: "ახალი კარტოფილი მოხარშული",
                    description: "Donec velit neque, auctor sit amet aliquam vel ullamcorper sit amet ligula.............................",
                    price: "1.20₾"
                },
                {
                    id: 25,
                    name: "ბაჟე",
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
