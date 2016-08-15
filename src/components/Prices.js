import React from 'react'
import uuid from 'uuid'

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
  editProducts(products) {
    this.setState({products: products})
  },
  deleteProducts(id) {
    let newProducts = this.state.products.filter(val => val.id !== id)
    this.setState({products: newProducts})
  },
  addProduct(e) {
    let {name, price, description} = this.state
    let id = uuid()
    if (name && price && description) {
      let newProducts = this.state.products.concat({id, name, price, description})
      this.setState({products: newProducts,
        name: "", price: 0.00, description: ""})
    }

  },
  render() {
    return (
      <div>
        <input onChange={this.changeName} type="text" value={this.state.name} placeholder="Product Name"/>
        <input onChange={this.changePrice} type="number" value={this.state.price} placeholder="Produt Price"/>
        <input onChange={this.changeDescription} type="text" value={this.state.description} placeholder="Product Description"/>
        <button onClick={this.addProduct} type="button">Add Product</button>
        <br/><br/>
        <TablePrices deleteProducts={this.deleteProducts} editProducts={this.editProducts} products={this.state.products}/>
      </div>
    )
  }
})

const TablePrices = React.createClass({
  getInitialState() {
    return {
      products: [],
      setInput: "",
      name: "",
      description: "",
      price: 0.00
    }
  },
  componentWillReceiveProps(nextProps) {
    this.setState({products: nextProps.products})
  },
  setInput(id) {
    if (!this.state.setInput) {
      this.setState({
        setInput: id
      });
    }

    else if (this.state.setInput === id) {
      let {name, price, description} = this.state
      if (name && price && description) {
        this.state.products.forEach(val => {
          if (val.id === id) {
            val.name = name
            val.price = price
            val.description = description
          }
        })

        this.setState({name: "", price: 0.00, description: "", setInput: ""})
        this.props.editProducts(this.state.products);
      }
    }
  },
  setDelete() {
    
  }
  changeName(e) {
    this.setState({name: e.target.value})
  },
  changePrice(e) {
    this.setState({price: e.target.value})
  },
  changeDescription(e) {
    this.setState({description: e.target.value})
  },
  render() {
    let trs = this.state.products.map(val => {

      return <tr key={val.id}> 
                <td>{val.name}</td>
                <td>{val.price}</td>
                <td>{val.description}</td>
                <td><button onClick={this.setInput.bind(null, val.id)} type="button">Edit</button></td>
                <td><button type="button">Delete</button></td>
            </tr>
    });
    if (this.state.setInput) {

      trs = this.state.products.map(val => {
        console.log('val.id ', val.id)
        console.log('this.state.setInput ', this.state.setInput)
        if (this.state.setInput === val.id) {

          return <tr key={val.id}> 
              <td><input onChange={this.changeName} type="text" value={this.state.name} placeholder="Product Name"/></td>
              <td> <input onChange={this.changePrice} type="number" value={this.state.price} placeholder="Produt Price"/> </td>
              <td> <input onChange={this.changeDescription} type="text" value={this.state.description} placeholder="Product Description"/> </td>
              <td><button onClick={this.setInput.bind(null, val.id)} type="button">Edit</button></td>
              <td><button type="button">Delete</button></td>
          </tr>
        }

        return <tr key={val.id}> 
                <td>{val.name}</td>
                <td>{val.price}</td>
                <td>{val.description}</td>
                <td><button onClick={this.setInput.bind(null, val.id)} type="button">Edit</button></td>
                <td><button type="button">Delete</button></td>
            </tr>
      });
    }
    return (
      <table>
        <thead>
          <tr>
            <th> <button>Name</button></th>
            <th><button>Price $$$</button></th>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {trs}
        </tbody>
      </table>
    )
  }
})

export default Prices;