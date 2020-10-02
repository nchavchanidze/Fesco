import React from 'react';
import Zoom from 'react-medium-image-zoom'
import '../App.scss';


function MenuItem(props) {

    return (
        <div id="MenuItem" className="mt-3 p-2 col-md-4 col-sm-12">
            <div className="menu-item-img">
                <Zoom overlayBgColorEnd="#141723" style={{ backgroundColor: '#212529' }} className="menu-zoom">
                    <img className="w-100" src={props.item.image} alt={props.item.name} />
                </Zoom>
            </div>
            <div className="mt-3">
                <div className="menu-item-info">
                    <h3>{props.item.name}</h3>
                    <p>{props.item.description}</p>
                </div>
                <div>
                    <h3 className="menu-item-price">{props.item.price}</h3>
                </div>
            </div>
        </div>
    )
}

export default MenuItem;
