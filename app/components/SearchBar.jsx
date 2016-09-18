var React = require('react')

var SearchBar = function () {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
        <input className="form-control" placeholder="New York, NY" type="text" />
        <button type="button" style={{marginLeft: '10px'}}className="btn btn-success">Get Weather</button>
    </div>
  )
}

export default SearchBar
