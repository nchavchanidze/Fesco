import React from 'react';
import { Container } from 'react-bootstrap'
import Slider from "react-slick";
import MenuMeat from './Menu/MeatMenu/MenuMeat';
import MenuSalad from './Menu/SaladMenu/MenuSalad';
import MenuVegetable from './Menu/VegetableMenu/MenuVegetable';
import '../App.scss';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "მენიუ",
            subtitle: "Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula."
        }
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            fade: true,
            autoplay: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Container className="pt-5" fluid={true} id="menu">
                <h1>{this.state.title}</h1>
                <h2>{this.state.subtitle}</h2>
                <Container>
                    <h1 className="menu-title mt-5 mb-5">{this.state.title1}</h1>
                    <div>
                        <Slider {...settings}>
                            <div>
                                <MenuMeat />
                            </div>
                            <div>
                                <MenuSalad />
                            </div>
                            <div>
                                <MenuVegetable />
                            </div>
                        </Slider>
                    </div>
                </Container>
            </Container>
        )
    }
}

export default Menu;
