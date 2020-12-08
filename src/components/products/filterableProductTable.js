import React, { Component } from 'react'
import SearchBar from './searchBar'
import ProductsTable from './productsTable'

export default class FilterableProductTable extends Component {
    constructor(props) {
        super(props)

        this.state = {
            filterText: '',
            inStockOnly: false,
            products: this.props.products.sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : -1),
            categories: [...new Set(this.props.products.map(product => product.category))].sort((a, b) => (a.toUpperCase() > b.toUpperCase()) ? 1 : -1),
            currentCategory: 'Category',
            orderBy: 'name'
        }
    }
    allCategories = [...new Set(this.props.products.map(product => product.category))];

    render() {

        return (
            <div style={{ border: "1px solid yellow", padding: "20px" }}>
                <SearchBar onFilterChanged={this.filterChanged}
                    onInStockChanged={this.inStockChanged}
                    onCategoryChanged={this.categoryChanged}
                    onOrderByChanged={this.onOrderByChanged}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    categories={this.state.categories}
                    allCategories={this.allCategories}
                    currentCategory={this.currentCategory}
                    orderBy={this.orderBy} />
                <ProductsTable
                    onDelete={this.onDelete}
                    products={this.state.products}
                    categories={this.state.categories} />
            </div>
        )
    }

    //Callback from SearchBar
    filterChanged = (filterTextInput) => {
        let newProducts = [];
        this.setState({ filterText: filterTextInput });
        if (this.state.inStockOnly) {
            newProducts = this.state.products.filter(product => product.name.toUpperCase().includes(filterTextInput.toUpperCase()));
        }
        else {
            newProducts = this.props.products.filter(product => product.name.toUpperCase().includes(filterTextInput.toUpperCase()));
        }
        if (this.state.currentCategory !== 'Category') {
            newProducts = newProducts.filter(product => product.category === this.state.currentCategory);
        }
        this.setState({ products: newProducts });
        this.setState({ categories: [...new Set(newProducts.map(product => product.category))] });
    }

    inStockChanged = (inStockInput) => {
        let newProducts = [];
        this.setState({ inStockOnly: inStockInput });
        if (inStockInput) {
            newProducts = this.state.products.filter(product => product.inStock);
        }
        else {
            if (this.state.filterText === '') {
                newProducts = this.props.products;
            }
            else {
                newProducts = this.props.products.filter(product => product.name.toUpperCase().includes(this.state.filterText.toUpperCase()));
            }
        }
        if (this.state.currentCategory !== 'Category') {
            newProducts = newProducts.filter(product => product.category === this.state.currentCategory);
        }
        this.setState({ products: newProducts });
        this.setState({ categories: [...new Set(newProducts.map(product => product.category))] });
    }

    categoryChanged = (categoryInput) => {
        let newProducts = [];
        this.setState({ currentCategory: categoryInput });
        if (categoryInput === 'Category') {
            newProducts = this.props.products
        }
        else {
            newProducts = this.props.products.filter(product => product.category === categoryInput);
        }
        if (this.state.inStockOnly) {
            newProducts = newProducts.filter(product => product.inStock);
        }
        if (this.state.filterText !== '') {
            newProducts = newProducts.filter(product => product.name.toUpperCase().includes(this.state.filterText.toUpperCase()));
        }
        this.setState({ products: newProducts });
        this.setState({ categories: [...new Set(newProducts.map(product => product.category))] });
    }

    onOrderByChanged = (orderByInput) => {
        let orderedProducts = [];
        this.setState({ orderBy: orderByInput });
        if (orderByInput === 'name') {
            orderedProducts = this.state.products.sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : -1)
        }
        else {
            orderedProducts = this.state.products.sort((a, b) => a.price - b.price)
        }
        this.setState({ products: orderedProducts });

    }
    onDelete = (name) => {
        let newProducts = this.state.products.filter(product => product.name !== name);
        this.setState({ products: newProducts })
    };
}
