import React, {Component} from 'react';
import './App.css';
import dataset from './data'
import arraySearch from './Algorithms/ArraySearch'
import binarySearch from './Algorithms/BinarySearch'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      arraySearch: null,
      binarySearch: null
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(event.target.number.value)
    let targetNumber = event.target.number.value
    let arrayResult = arraySearch(targetNumber,dataset)
    let sortedDataset = dataset.sort((a,b) => a - b)
    let binaryResult = binarySearch(targetNumber,sortedDataset)
    console.log(binaryResult)
    this.setState({
      arraySearch: arrayResult,
      binarySearch: binaryResult
    })
  }

  render(){
    return (
      <div className="App">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="number"> Enter a number:   
            <br/>
            <input type="text" id="number" name="number" required></input>
          </label>
          <br/>
          <button type="submit">Look it up!</button>
        </form>
        <h2>Using the array to search:</h2>
        <p>{this.state.arraySearch}</p>
        <h2>Using the binary search tree to search:</h2>
        <p>{this.state.binarySearch}</p>
      </div>
      );
    }
}

export default App;
