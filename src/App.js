import React from 'react';
import './App.css';
import FilterableProductTable from './components/products/filterableProductTable'

const productsData = [
  { name: "Football", price: 49.99, inStock: true, category: "Sporting Goods" },
  { name: "Baseball", price: 9.99, inStock: true, category: "Sporting Goods" },
  { name: "Basketball", price: 29.99, inStock: false, category: "Sporting Goods" },
  { name: "iPod Touch", price: 99.99, inStock: true, category: "Electronics" },
  { name: "iPhone 5", price: 399.99, inStock: false, category: "Electronics" },
  { name: "Nexus 7", price: 199.99, inStock: true, category: "Electronics" },
]

function App(props) {
  // props.productsList = [...productsData];
  // const [productsList, setProducts] = useState([...productList]);
  // props.onDelete = ({ name }) => {
  //   let newProducts = this.state.products.filter(product => product.name !== name);
  //   this.setState({ products: newProducts })
  // };

  return (
    <div className="container">
      <FilterableProductTable products={productsData} />
    </div>)

}

export default App;
