import React, { Component } from 'react'

export default class SearchBar extends Component {

    render() {
        return (
            <form style={{ border: "1px solid blue", padding: "3px" }}>
                <div className="form-group centered">
                    <input className="form-control"
                        type="text"
                        style={{ width: "96%" }}
                        placeholder="search..."
                        value={this.props.filterText}
                        onChange={this.handleFilterChanged} />
                </div>
                <div className="form-group left">
                    <div className="form-check">
                        <label className="form-check-label">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={this.props.inStockOnly}
                                onChange={this.handleInStokeChanged} />
                                Only show products in Stock
                        </label>
                    </div>
                </div>

                <div className="form-group left">
                    <label className="col-sm-1 col-form-label">Category</label>
                    <div className="col-sm-2">
                        <select value={this.props.currentCategory} className="custom-select" onChange={this.handleCategoryChanged}>
                            <option value="Category">All</option>
                            {this.props.allCategories.map(category => <option value={category}>{category}</option>)}
                        </select>
                    </div>
                </div>

                <div className="form-group left">
                    <label className="col-sm-1 col-form-label">Sort By</label>
                    <div className="col-sm-2">
                        <select value={this.props.currentCategory} className="custom-select" onChange={this.handleOrderByChanged}>
                            <option value="name">Name</option>
                            <option value="price">Price</option>
                        </select>
                    </div>
                </div>
            </form >
        )
    }

    handleFilterChanged = (e) => {
        let filterValue = e.target.value;
        this.props.onFilterChanged(filterValue);
    }

    handleInStokeChanged = (e) => {
        let isChecked = e.target.checked;
        this.props.onInStockChanged(isChecked);
    }

    handleCategoryChanged = (e) => {
        let category = e.target.value;
        this.props.onCategoryChanged(category);
    }

    handleOrderByChanged = (e) => {
        let category = e.target.value;
        this.props.onOrderByChanged(category);
    }
}
