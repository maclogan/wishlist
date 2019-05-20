import React from 'react';

import './List.css'
import ListItem from '../ListItem/ListItem';

class List extends React.Component {
    render() {
        return (
            <div className="list">
                <h5>{this.props.listName} ></h5>
                <div class="listItems">
                    <ListItem image={this.props.items.image} 
                    name={this.props.items.name}
                    price={this.props.items.price} />
                    <ListItem image={this.props.items.image} 
                    name={this.props.items.name}
                    price={this.props.items.price} />
                </div>
            </div>
        )
    }

};

export default List;