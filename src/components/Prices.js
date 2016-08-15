import React from 'react'


//Sets up a list of products 
const Prices = React.createClass({
  getInitialState() {
    return {
      products: [],
      name: "",
      price: 0.00,
      description: ""
    }
  },
  changeName(e) {
    this.setState({name: e.target.value})
  },
  changePrice(e) {
    this.setState({price: e.target.value})
  },
  changeDescription(e) {
    this.setState({description: e.target.value})
  },
  addProduct(e) {
    let {name, price, description} = this.state
    
    if (name && price && description) {
      let newProducts = this.state.products.concat({name, price, description})
      this.setState({products: newProducts})
    }

  },
  render() {
    return (
      <div>
        <input onChange={this.changeName} type="text" value={this.state.name} placeholder="Product Name"/>
        <input onChange={this.changePrice} type="number" value={this.price} placeholder="Produt Price"/>
        <input onChange={this.changeDescription} type="text" value={this.state.description} placeholder="Product Description"/>
        <button onClick={this.addProduct} type="button">Add Product</button>
        <br/><br/>
        <TablePrices products={this.state.products}/>
      </div>
    )
  }
})

const TablePrices = React.createClass({
  componentWillReceiveProps(nextProps) {
    console.log('next props ', nextProps.products)
  },
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price $$$</th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
      </table>
    )
  }
})

export default Prices;