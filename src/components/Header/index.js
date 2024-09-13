import {Component} from 'react'
import { Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
//import Cookies from 'js-cookie'
import './index.css'

// import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'

class Header extends Component {
  state = {
    navItem: false,
  }

 
  onClickMenu = () => {
    this.setState(prevState => ({navItem: !prevState.navItem}))
  }

  onClickClose = () => {
    this.setState({navItem: false})
  }

  render() {
    
    return (
      <div className='header-cont'>
          <ul className="ActionsCont">
            <Link className="LogoLink" to="/">
              <li className="listing">Jobs</li>
            </Link>
            <Link className="LogoLink" to="/bookmark">
              <li className="listing">BookMarks</li>
            </Link>
            
          </ul>
        
      
      </div>
    )
  }
}
 
export default withRouter(Header)