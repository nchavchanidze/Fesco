import React from 'react';
import { Container, Row } from 'react-bootstrap'
import MenuItem from '../../MenuItem';
import image from '../../../assets/img/menu/test.jpg'
import image01 from '../../../assets/img/menu/Vegetable/IMG_9777-Edit.jpg'
import image02 from '../../../assets/img/menu/Vegetable/IMG_9779-Edit.jpg'
import image03 from '../../../assets/img/menu/Vegetable/IMG_9784-Edit.jpg'
import '../../../App.scss';

class FirstList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: [
                {
                    id: 0,
                    name: "სოკოს შილა-ფლავი",
                    description: "Donec velit neque",
                    price: "2.00₾",
                    image: image
                },
                {
                    id: 1,
                    name: "პრასი ნიგვზით",
                    description: "Donec velit neque",
                    price: "2.50₾",
                    image: image
                },
                {
                    id: 2,
                    name: "დაჭრილი ჭარხალი ნიგვზით",
                    description: "Donec velit neque",
                    price: "1.60₾",
                    image: image
                },
                {
                    id: 3,
                    name: "ისპანახის ფხალი ნიგვზით",
                    description: "Donec velit neque",
                    price: "2.50₾",
                    image: image02
                },
                {
                    id: 4,
                    name: "ისპანახი ზეთში შემწვარი",
                    description: "Donec velit neque",
                    price: "1.50₾",
                    image: image
                },
                {
                    id: 5,
                    name: "ყვავილოვანი კომბოსტო მაიონეზში",
                    description: "Donec velit neque",
                    price: "1.70₾",
                    image: image
                },
                {
                    id: 6,
                    name: "ყვავილოვანი კომბოსტო ბოსტნეულით",
                    description: "Donec velit neque",
                    price: "2.00₾",
                    image: image
                },
                {
                    id: 7,
                    name: "ბადრიჯანი ბულგარულით სუნელებში",
                    description: "Donec velit neque",
                    price: "2.00₾",
                    image: image
                },
                {
                    id: 8,
                    name: "ბადრიჯანი ნიგვზით და მაიონეზით",
                    description: "Donec velit neque",
                    price: "2.00₾",
                    image: image03
                },
                {
                    id: 9,
                    name: "ეკალა ნიგვზით",
                    description: "Donec velit neque",
                    price: "2.80₾",
                    image: image01
                },
                {
                    id: 10,
                    name: "ბულგარული ნიგვზით",
                    description: "Donec velit neque",
                    price: "2.80₾",
                    image: image
                },
                {
                    id: 11,
                    name: "ტოლმა სამარხვო(1 ცალი)",
                    description: "Donec velit neque",
                    price: "1.60₾",
                    image: image
                },
                {
                    id: 12,
                    name: "კოტლეტი სამარხვო (1 ცალი)",
                    description: "Donec velit neque",
                    price: "1.00₾",
                    image: image
                },
                {
                    id: 13,
                    name: "ბადრიჯანი ნიგვზით",
                    description: "Donec velit neque",
                    price: "2.50₾",
                    image: image
                },
                {
                    id: 14,
                    name: "მწვანე ლობიო ნიგვზით",
                    description: "Donec velit neque",
                    price: "2.50₾",
                    image: image
                },
                {
                    id: 15,
                    name: "წითელი ლობიო ნიგვზით",
                    description: "Donec velit neque",
                    price: "2.00₾",
                    image: image
                },
                {
                    id: 16,
                    name: "ლობიო ამოლესილი",
                    description: "Donec velit neque",
                    price: "1.20₾",
                    image: image
                },
                {
                    id: 17,
                    name: "ქამა სოკოს ჩაშუშული",
                    description: "Donec velit neque",
                    price: "2.30₾",
                    image: image
                },
                {
                    id: 18,
                    name: "ხის სოკოს ჩაშუშული",
                    description: "Donec velit neque",
                    price: "2.30₾",
                    image: image
                },
                {
                    id: 19,
                    name: "აჯაფსანდალი",
                    description: "Donec velit neque",
                    price: "2.00₾",
                    image: image
                },
                {
                    id: 20,
                    name: "უზბეკური ფლავი სამარხვო",
                    description: "Donec velit neque",
                    price: "1.80₾",
                    image: image
                },
                {
                    id: 21,
                    name: "კარტოფილის პიურე",
                    description: "Donec velit neque",
                    price: "0.70₾",
                    image: image
                },
                {
                    id: 22,
                    name: "ბოსტნეული მოთუშული ბროკოლით",
                    description: "Donec velit neque",
                    price: "2.00₾",
                    image: image
                },
                {
                    id: 23,
                    name: "ახალი კარტოფილი შემწვარი",
                    description: "Donec velit neque",
                    price: "1.60₾",
                    image: image
                },
                {
                    id: 24,
                    name: "ახალი კარტოფილი მოხარშული",
                    description: "Donec velit neque",
                    price: "1.20₾",
                    image: image
                },
                {
                    id: 25,
                    name: "ბაჟე",
                    description: "Donec velit neque",
                    price: "2.50₾",
                    image: image
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
                <Row className="w-100 justify-content-between m-0">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default FirstList;
