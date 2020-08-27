import React from 'react';
import '../App.scss';

function MenuItem(props) {

    return (
        <div id="MenuItem" className="m-auto">
            <div className="d-flex justify-content-between align-items-center flex-wrap mt-3">
                <div className="menu-item-info">

                    <h3>{props.item.name}</h3>
                    <p>{props.item.description}</p>
                </div>
                <h3 className="menu-item-price">{props.item.price}</h3>
            </div>
        </div>
    )
}

export default MenuItem;
