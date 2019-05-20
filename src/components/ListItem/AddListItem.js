import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../../store/actions/itemActions'

import './ListItem.css';

class AddListItem extends React.Component {
    state = {
        title: '',
        description: '',
        price: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <h5>Add Item</h5>
                    <div className="inputField">
                        <label>Item Name</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="inputField">
                        <button className="button">Add Item</button>
                    </div>
                </form>
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) => dispatch(addItem(item))
    }
}

export default connect()(AddListItem);