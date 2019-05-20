import React from 'react';

import './List.css'
import ListItem from '../ListItem/ListItem';

const List = ({items}) => {
    console.log(typeof(items))
    return (
        <div className="list">
            <h5>Fix list names</h5>
            <div className="listItems">
                { items && items.map(item => {
                    return(
                        <ListItem item={item} key={item.id}/>
                    )
                })}
            </div>
        </div>
    )
}

export default List;