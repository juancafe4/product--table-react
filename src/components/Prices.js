import React from 'react'


const Prices = React.createClass({
  render() {
    return (
      <div>
        <input type="text" value="" placeholder="Product Name"/>
        <input type="text" value="" placeholder="Produt Price"/>
        <button type="button">Add Product</button>
        <br/><br/>
        
        <TablePrices/>
      </div>
    )
  }
})

const TablePrices = React.createClass({
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price $$$</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
      </table>
    )
  }
})

export default Prices;