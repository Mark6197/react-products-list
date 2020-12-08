import React, { Component } from 'react'
import ProductCategoryRow from './productCategoryRow';
import ProductRow from './productRow'

export default class ProductsTable extends Component {

    render() {

        const items = [];

        this.props.categories.forEach(category => {
            if (this.props.products) {
                items.push(<ProductCategoryRow key={category.name} name={category} />);
                items.push(this.props.products.filter(product => product.category === category).map(product => <ProductRow onDelete={this.props.onDelete} key={product.name} {...product} />))
            }
        });

        return (
            <div style={{ border: "1px solid green" }}>
                <table className="table table-hover">
                    <thead>
                        <tr key="header" className="table-dark">
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items}
                    </tbody>
                </table>
            </div>
        )
    }
}
