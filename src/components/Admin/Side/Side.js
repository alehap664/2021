import {Link} from "react-router-dom";
import { FaUser, FaSignInAlt } from "react-icons/fa";
const Side = () => {

  const nav = [
    {link : "/admin/add", icon: "apps-sharp" ,name: "Book"},
    {link : "/admin/film", icon: "accessibility-outline" ,name: "Add Film"},
    {link : "/admin/nav3", icon: "archive-outline" ,name: "Nav 3"},
    {link : "/admin/nav4", icon: "albums-outline" ,name: "Nav 4"},
    {link : "/admin/nav5", icon: "alarm-outline" ,name: "Nav 5"},
  ]

  return (
    <div className="sidebar w-280px h-100vh d-flex flex-column text-light">
      <div className="sidebar_logo text-light text-uppercase d-flex align-items-center">
        <span className="text-orange">Chuối</span> Cinema
      </div>

      <div className="sidebar_user d-flex align-items-center flex-nowrap">
        <div className="sidebar_user-avatar">
          <FaUser />
        </div>
        <div className="sidebar_user-title">
          <span>Admin</span>
          <p className="m-0 font-weight-bold">Thịnh</p>
        </div>
        <button className="sidebar_user-btn ml-auto">
          <FaSignInAlt />
        </button>
      </div>

      <div className="sidebar_nav">
        <nav>
          {nav.map( (nav, index) => (
              <li className="sidebar_nav-item" key={index}>
                <Link to={nav.link} className="d-inline-flex align-items-center text-decoration-none text-orange">
                  <ion-icon name={nav.icon} style={{marginRight: 15}}></ion-icon>{nav.name}
                </Link>
              </li>
          ))}
          
        </nav>
      </div>
    </div>
  )
}

export default Side
