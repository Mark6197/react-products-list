import React, { Component } from 'react'


export default class ProductCategoryRow extends Component {

    render() {
        return (
            <tr className="table-primary">
                <td colSpan="3" style={{ textDecoration: "underline" }}>{this.props.name}</td>
            </tr>
        )
    }
}
