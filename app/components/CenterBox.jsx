var React = require('react')
import {Link} from 'react-router'

var CenterBox = function () {
  return (
    <div className="center-box" style={{paddingTop: '40%', paddingBottom: '40%'}}>
      <h2 style={{color:'#fff'}}>Enter a City and State</h2>
      <div className="center-box">
        <input className="form-control" placeholder="New York, NY" type="text" />
        <Link to="/forecast/denver">
          <button type="button" style={{marginTop: '10px'}}className="btn btn-success">Get Weather</button>
        </Link>
      </div>
    </div>
  )
}

export default CenterBox
