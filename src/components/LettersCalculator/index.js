import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0, inputString: ''}

  onInputStringChange = event => {
    const input = event.target.value
    this.setState({inputString: input, count: input.length})
  }

  render() {
    const {count, inputString} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="title">Calculate the Letters you enter</h1>
          <label htmlFor="inputEl" className="label">
            Enter the phrase
          </label>
          <input
            id="inputEl"
            className="inputEl"
            type="text"
            placeholder="Enter the phrase"
            value={inputString}
            onChange={this.onInputStringChange}
          />
          <p className="letter-count">No.of Letters: {count}</p>
        </div>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}
export default LettersCalculator
