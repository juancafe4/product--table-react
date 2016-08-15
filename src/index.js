import React from 'react';
import ReactDOM from 'react-dom';
import Prices from './components/Prices'
const App = React.createClass({
  render() {
    return ( <div>
      <Prices />
    </div>
    )
  }
})


ReactDOM.render(<App />, document.getElementById('root')) 