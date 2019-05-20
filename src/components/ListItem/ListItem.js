import React from 'react';

import './ListItem.css';


const ListItem = ({item}) => {
    return (
        <div class="listItem">
            <img src={item.image} />
            <p class="itemName">{item.name}</p>
            <p>${item.price}</p>
        </div>
    )
}

export default ListItem;