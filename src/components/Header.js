import { Link } from "react-router-dom"

function Header(props) {
  return (
    <div>
      <nav className="nav" style={{backgroundColor: 'lightblue'}}>
        <Link to="/">
          <div>Around the World</div>
        </Link>
      </nav>
      {/* <div className="banner" style={{position: 'fixed', top: '0', left: '0', width: '100%', height: '50px', backgroundColor: 'lightblue', fontFamily: 'Arial Narrow'}}>
        <h1>Welcome to Around the World!</h1>
      </div> */}
    </div>
  )
}

export default Header