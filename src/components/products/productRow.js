import React, { Component } from 'react'


export default class ProductRow extends Component {

    render() {
        let productClassName = this.props.inStock ? "" : "not-available";
        let tdBtnDelete = this.props.inStock ? <td></td> : <td><button onClick={this.handleDelete}>Delete</button></td>;
        return (
            <tr>
                <td className={productClassName}>{this.props.name}</td>
                <td>{this.props.price}$</td>
                {tdBtnDelete}
            </tr>
        )
    }
    handleDelete = (e) => {
        this.props.onDelete(this.props.name);
    }

}
