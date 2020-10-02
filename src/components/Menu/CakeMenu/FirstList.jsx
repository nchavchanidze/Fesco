import React from 'react';
import { Container, Row } from 'react-bootstrap'
import MenuItem from '../../MenuItem';
import image from '../../../assets/img/menu/test.jpg'
import image01 from '../../../assets/img/menu/Cake/IMG_9349.jpg'
import image02 from '../../../assets/img/menu/Cake/IMG_9408.jpg'
import image03 from '../../../assets/img/menu/Cake/IMG_9505-Edit.jpg'
import image04 from '../../../assets/img/menu/Cake/IMG_9523-Edit.jpg'
import image05 from '../../../assets/img/menu/Cake/IMG_9545-Edit.jpg'
import image06 from '../../../assets/img/menu/Cake/IMG_9551-Edit.jpg'
import image07 from '../../../assets/img/menu/Cake/IMG_9574.jpg'
import image08 from '../../../assets/img/menu/Cake/IMG_9586-Edit.jpg'
import image09 from '../../../assets/img/menu/Cake/IMG_9599-Edit.jpg'
import image10 from '../../../assets/img/menu/Cake/IMG_9606-Edit.jpg'
import image11 from '../../../assets/img/menu/Cake/IMG_9627-Edit.jpg'
import image12 from '../../../assets/img/menu/Cake/IMG_9648-Edit.jpg'
import image13 from '../../../assets/img/menu/Cake/IMG_9667-Edit.jpg'
import image14 from '../../../assets/img/menu/Cake/IMG_9684.jpg'
import image15 from '../../../assets/img/menu/Cake/IMG_9693.jpg'
import image16 from '../../../assets/img/menu/Cake/IMG_9701.jpg'
import image17 from '../../../assets/img/menu/Cake/IMG_9704-Edit.jpg'

class FirstList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: [
                {
                    id: 0,
                    name: "ზღაპარი",
                    description: "Pork stomach with wallnutss",
                    price: "4.00 ₾",
                    image: image
                },
                {
                    id: 1,
                    name: "\"ჯული\"",
                    description: "Beef stewed",
                    price: " 4.00₾",
                    image: image
                },
                {
                    id: 2,
                    name: "ჩიტის რძე",
                    description: "Ostri",
                    price: "4.00 ₾",
                    image: image
                },
                {
                    id: 3,
                    name: "\"მთვრალი ალუბალი\"",
                    description: "Dolma with grape leaves",
                    price: "4.00 ₾",
                    image: image09
                },
                {
                    id: 4,
                    name: "მოცხარი",
                    description: "Dolma",
                    price: "4.00 ₾",
                    image: image
                },
                {
                    id: 5,
                    name: "იდეალი",
                    description: "Kebab (1 piece)",
                    price: "4.00 ₾",
                    image: image
                },
                {
                    id: 6,
                    name: "იდეალი",
                    description: "Beef cutlet (1 piece)",
                    price: "4.00 ₾",
                    image: image
                },
                {
                    id: 7,
                    name: "მედოკი",
                    description: "Meat pancake (1 piece)",
                    price: "4.00 ₾",
                    image: image17
                },
                {
                    id: 8,
                    name: "ოპიუმი",
                    description: "Cooked beef",
                    price: "4.00 ₾",
                    image: image
                },
                {
                    id: 9,
                    name: "\"პრაღა\"",
                    description: "Khashi (1 serving)",
                    price: "4.00 ₾",
                    image: image
                },
                {
                    id: 10,
                    name: "ყარაყუმი",
                    description: "Meat Jelly",
                    price: "4.00 ₾",
                    image: image
                },
                {
                    id: 11,
                    name: "რაფაელო",
                    description: "Pork \"Buzhenina\"",
                    price: "4.00 ₾",
                    image: image
                },
                {
                    id: 12,
                    name: "\"ობამა\"",
                    description: "Beef salad",
                    price: "4.00 ₾",
                    image: image14
                },
                {
                    id: 13,
                    name: "სნიკერსი",
                    description: "Beef salad",
                    price: "4.00 ₾",
                    image: image02
                },
                {
                    id: 14,
                    name: "ნაპოლეონი",
                    description: "Beef salad",
                    price: "4.00 ₾",
                    image: image
                },
                {
                    id: 15,
                    name: "\"ტრუბოჩკა\"",
                    description: "Beef salad",
                    price: "2.00 ₾",
                    image: image
                },
                {
                    id: 16,
                    name: "შუ",
                    description: "Beef salad",
                    price: "2.00 ₾",
                    image: image
                },
                {
                    id: 17,
                    name: "ტარტალეტკა",
                    description: "Beef salad",
                    price: "2.00 ₾",
                    image: image
                },
                {
                    id: 18,
                    name: "ეკლერი",
                    description: "Beef salad",
                    price: "2.20 ₾",
                    image: image
                },
                {
                    id: 19,
                    name: "კალა",
                    description: "Beef salad",
                    price: "2.40 ₾",
                    image: image11
                },
                {
                    id: 20,
                    name: "\"ზებრა\"",
                    description: "Beef salad",
                    price: "7.00 ₾",
                    image: image
                },
                {
                    id: 21,
                    name: "პავლოვა",
                    description: "Beef salad",
                    price: "5.50 ₾",
                    image: image
                },
                {
                    id: 22,
                    name: "ტარტი ატმით",
                    description: "Beef salad",
                    price: "30.00 ₾",
                    image: image
                },
                {
                    id: 23,
                    name: "გარგრის ტარტი ხაჭოთი",
                    description: "Beef salad",
                    price: "40.00 ₾",
                    image: image
                },
                {
                    id: 24,
                    name: "ალუბლის ტარტი",
                    description: "Beef salad",
                    price: "19.00 ₾",
                    image: image
                },
                {
                    id: 25,
                    name: "ხაჭოს ორცხობილა",
                    description: "Beef salad",
                    price: "0.90 ₾",
                    image: image
                },
                {
                    id: 26,
                    name: "სომუხური ქადა",
                    description: "Beef salad",
                    price: "0.90 ₾",
                    image: image14
                },
                {
                    id: 27,
                    name: "ალუბლის კექსი",
                    description: "Beef salad",
                    price: "25.00 ₾",
                    image: image
                },
                {
                    id: 28,
                    name: "\"ჩიზბრაუნი\"",
                    description: "Beef salad",
                    price: "25.00 ₾",
                    image: image04
                },
                {
                    id: 29,
                    name: "ჩიზქეიქი",
                    description: "Beef salad",
                    price: "40.00 ₾",
                    image: image
                },
                {
                    id: 30,
                    name: "ჩიზქეიქი ჟოლოთი",
                    description: "Beef salad",
                    price: "40.00 ₾",
                    image: image
                },
                {
                    id: 31,
                    name: "ჟოლოს კალათი",
                    description: "Beef salad",
                    price: "32.00 ₾",
                    image: image03
                },
                {
                    id: 32,
                    name: "სტაფილოს კექსი",
                    description: "Beef salad",
                    price: "8.00 ₾",
                    image: image
                },
                {
                    id: 33,
                    name: "ქლიავის კექსი",
                    description: "Beef salad",
                    price: "25.00 ₾",
                    image: image
                },
                {
                    id: 34,
                    name: "ვაშლის და ალუბლის კექსი",
                    description: "Beef salad",
                    price: "25.00 ₾",
                    image: image
                },
                {
                    id: 35,
                    name: "შურო",
                    description: "Beef salad",
                    price: "4.00 ₾",
                    image: image
                },
                {
                    id: 36,
                    name: "\"ჩიზბრაუნი\"",
                    description: "Beef salad",
                    price: "25.00 ₾",
                    image: image
                },
                {
                    id: 37,
                    name: "\"ჩიზბრაუნი\"",
                    description: "Beef salad",
                    price: "25.00 ₾",
                    image: image
                },
                {
                    id: 38,
                    name: "\"ჩიზბრაუნი\"",
                    description: "Beef salad",
                    price: "25.00 ₾",
                    image: image
                },
                {
                    id: 39,
                    name: "\"ჩიზბრაუნი\"",
                    description: "Beef salad",
                    price: "25.00 ₾",
                    image: image
                },
                {
                    id: 40,
                    name: "\"ჩიზბრაუნი\"",
                    description: "Beef salad",
                    price: "25.00 ₾",
                    image: image
                },
                {
                    id: 41,
                    name: "\"ჩიზბრაუნი\"",
                    description: "Beef salad",
                    price: "25.00 ₾",
                    image: image
                },
                {
                    id: 42,
                    name: "\"ჩიზბრაუნი\"",
                    description: "Beef salad",
                    price: "25.00 ₾",
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
