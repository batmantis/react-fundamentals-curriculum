import React from 'react';
import {Link} from 'react-router';

class CenterBox extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      location: ''
    }
  }
  onUpdateLocation (e) {
    this.setState({
      location: e.target.value
    })
  }
  goToForecast () {
    console.log(this.context.router)
    this.context.router.push({pathname: `/forecast/${this.state.location}`})
  }
  render () {
    return (
      <div className="center-box" style={{paddingTop: '40%', paddingBottom: '40%'}}>
        <h2 style={{color:'#fff'}}>Enter a City and State</h2>
        <div className="center-box">
          <input className="form-control" placeholder="New York, NY" type="text" onChange={this.onUpdateLocation.bind(this)} value={this.state.location} />
          <button type="button" style={{marginTop: '10px'}} className="btn btn-success" onClick={this.goToForecast.bind(this)}>Get Weather</button>
        </div>
      </div>
    )
  }
}

CenterBox.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default CenterBox
