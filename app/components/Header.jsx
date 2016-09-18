var React = require('react');
import SearchBar from '../components/SearchBar.jsx'

function Header (props) {
  return (
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', background:"rgba(252, 90, 44, 0.89)", color:'#fff', padding:'5px'}}>
      <h2>Header</h2>
      <SearchBar />
    </div>
  )
}

export default Header
