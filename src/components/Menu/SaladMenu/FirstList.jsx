import React from 'react';
import { Container, Row } from 'react-bootstrap'
import MenuItem from '../../MenuItem';
import image from '../../../assets/img/menu/test.jpg'
import image01 from '../../../assets/img/menu/Salad/IMG_9799.jpg'
import image02 from '../../../assets/img/menu/Salad/IMG_9803.jpg'
import image03 from '../../../assets/img/menu/Salad/IMG_9813-Edit.jpg'
import image04 from '../../../assets/img/menu/Salad/IMG_9823-Edit.jpg'
import image05 from '../../../assets/img/menu/Salad/IMG_9830.jpg'
import image06 from '../../../assets/img/menu/Salad/IMG_9834.jpg'
import image07 from '../../../assets/img/menu/Salad/IMG_9868.jpg'
import image08 from '../../../assets/img/menu/Salad/IMG_9875.jpg'

class FirstList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: [
                {
                    id: 0,
                    name: "ოლივიე",
                    description: "Donec velit neque",
                    price: "1.20₾",
                    image: image
                },
                {
                    id: 1,
                    name: "სტაფილოს სალათი",
                    description: "Donec velit neque",
                    price: "1.00₾",
                    image: image06
                },
                {
                    id: 2,
                    name: "ქათმის სალათი",
                    description: "Donec velit neque",
                    price: "2.50₾",
                    image: image03
                },
                {
                    id: 3,
                    name: "ქათმის სალათი ტარხუნით",
                    description: "Donec velit neque",
                    price: "2.50₾",
                    image: image03
                },
                {
                    id: 4,
                    name: "ქათმის სალათი ბულგარულით",
                    description: "Donec velit neque",
                    price: "2.50₾",
                    image: image03
                },
                {
                    id: 5,
                    name: "ქათმის სალათი სოკოთი და ნიგვზით",
                    description: "Donec velit neque",
                    price: "2.50₾",
                    image: image03
                },
                {
                    id: 6,
                    name: "კრაბის სალათი",
                    description: "Donec velit neque",
                    price: "1.70₾",
                    image: image07
                },
                {
                    id: 7,
                    name: "სოკოს სალათი",
                    description: "Donec velit neque",
                    price: "2.50₾",
                    image: image
                },
                {
                    id: 8,
                    name: "სალათი ცეზარი",
                    description: "Donec velit neque",
                    price: "2.30₾",
                    image: image
                },
                {
                    id: 9,
                    name: "წითელი კომბოსტო ავოკადოთი",
                    description: "Donec velit neque",
                    price: "1.60₾",
                    image: image
                },
                {
                    id: 10,
                    name: "კიტრი და პომიდვრის სალათი",
                    description: "Donec velit neque",
                    price: "1.50₾",
                    image: image
                },
                {
                    id: 11,
                    name: "ნადუღი სულგუნის ფირფიტებში (1 ცალი)",
                    description: "Donec velit neque",
                    price: "1.50₾",
                    image: image04
                },
                {
                    id: 12,
                    name: "კომბოსტოს სალათი",
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
            </Container >
        )
    }
}

export default FirstList;
