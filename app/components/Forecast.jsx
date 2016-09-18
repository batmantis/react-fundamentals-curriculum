var React = require('react')

class Forecast extends React.Component {
  componentWillMount () {
    console.log(this)
  }
  render() {
    return (
      <div className='forecast-container'>
        <h2>{this.props.params.location}</h2>
      </div>
    )
  }
}

export default Forecast
