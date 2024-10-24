// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onGenerateRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * 100) + 1
    this.setState(prevState => ({
      randomNumber: prevState.randomNumber + newRandomNumber,
    }))
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="container">
        <div className="small-container">
          <h1 className="h1">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button
            type="button"
            className="button"
            onClick={this.onGenerateRandomNumber}
          >
            Generate
          </button>
          <p className="h1">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
