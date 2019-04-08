import React from 'react';

import './ListItem.css';

class ListItem extends React.Component {
    render() {
        return (
            <div class="listItem">
                <img src={this.props.image} />
                <p class="itemName">{this.props.name}</p>
                <p>{this.props.price}</p>
            </div>
        )
    }
};

export default ListItem;