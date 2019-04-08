import React from 'react';

import './List.css'
import ListItem from '../ListItem/ListItem';

class List extends React.Component {
    render() {
        return (
            <div class="list">
                <div class="listItems">
                    <ListItem image={this.props.image} 
                    name={this.props.name}
                    price={this.props.price} />
                </div>
            </div>
        )
    }

};

export default List;