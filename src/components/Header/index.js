import {Component} from 'react'
import { Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
//import Cookies from 'js-cookie'
import './index.css'

// import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import {FiMenu} from 'react-icons/fi'
import {RiCloseCircleFill} from 'react-icons/ri'

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
    const {navItem} = this.state
    return (
      <div>
        <div className="NavbarHeader">
          
          <ul className="ActionsCont">
            <Link className="LogoLink" to="/">
              <li className="listing">Jobs</li>
            </Link>
            <Link className="LogoLink" to="/shelf">
              <li className="listing">BookMarks</li>
            </Link>
            <li className="listing">
              <button
                type="button"
                className="LogoutBtn"
                onClick={this.onClickLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
        <div>
          <div className="menu">
            <Link className="LogoLink-1" to="/">
              <img
                src="https://res.cloudinary.com/dujs7naih/image/upload/v1707140583/Group_7731mini_op3wtc.png"
                alt="website logo"
                className="HeaderLogo"
              />
            </Link>
            <button
              type="button"
              onClick={this.onClickMenu}
              className="menu-icon"
            >
              <FiMenu />
            </button>
          </div>
          {navItem && (
            <div className="nav-items">
              <div className="nav-item-cont">
                <Link className="LogoLink" to="/">
                  <li className="listing">Jobs</li>
                </Link>
                <Link className="LogoLink" to="/shelf">
                  <li className="listing">Book Marks</li>
                </Link>
                <div className="row">
                  <button
                    type="button"
                    className="LogoutBtn"
                    onClick={this.onClickLogout}
                  >
                    Logout
                  </button>
                </div>
                <div className="close-cont">
                  <RiCloseCircleFill
                    onClick={this.onClickClose}
                    className="Close"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
 
export default withRouter(Header)