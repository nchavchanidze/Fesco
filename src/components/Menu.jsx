import React from 'react';
import { Container } from 'react-bootstrap'
import Slider from "react-slick";
import MenuMeat from './Menu/MeatMenu/MenuMeat';
import MenuSalad from './Menu/SaladMenu/MenuSalad';
import MenuVegetable from './Menu/VegetableMenu/MenuVegetable';
import MenuChicken from './Menu/ChickenMenu/MenuChicken';
import MenuFish from './Menu/FishMenu/MenuFish';
import MenuBaked from './Menu/BakedMenu/MenuBaked';
import '../App.scss';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "მენიუ",
            subtitle: "Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.",
            description: "* ფასები მოცემულია 100გ-ზე"
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
            <Container className="pt-5 pb-5" fluid={true} id="menu">
                <h1>{this.state.title}</h1>
                <h2>{this.state.subtitle}</h2>
                <Container>
                    <h1 className="menu-title mt-5 mb-5">{this.state.title1}</h1>
                    <div>
                        <Slider {...settings}>
                            <div>
                                <MenuMeat />
                                <h3 className="menu-title text-left ml-4 mt-5 mb-5">{this.state.description}</h3>
                            </div>
                            <div>
                                <MenuSalad />
                            </div>
                            <div>
                                <MenuVegetable />
                            </div>
                            <div>
                                <MenuChicken />
                            </div>
                            <div>
                                <MenuFish />
                            </div>
                            <div>
                                <MenuBaked />
                            </div>
                        </Slider>
                    </div>
                </Container>
            </Container>
        )
    }
}

export default Menu;
