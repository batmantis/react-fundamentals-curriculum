var React = require('react')
import Header from '../components/Header.jsx'

class Main extends React.Component {
  render () {
    return (
      <div style={{height: '100%', width: '100%', display: 'block'}}>
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default Main
