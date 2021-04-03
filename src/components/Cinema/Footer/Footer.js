import { Link } from 'react-router-dom';
import { IoIosArrowUp } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer__content">
              <Link to="/cinema" className="logo">
                <span className="text-orange">BNN</span>CINEMA
              </Link>
              <ul className="footer__nav">
                <Link to="#">About Us</Link>
                <Link to="#">Contacts</Link>
                <Link to="#">Privacy police</Link>
              </ul>
              <div className="footer__copyright">
                © BNNCINEMA, 2021
                <br/>
                Create by <span className="text-warning">Nguyễn Thịnh</span>
              </div>
              
              <button className="footer--btn"
                onClick={() => {window.scrollTo({top: 0, behavior: "smooth"})}}>
                <IoIosArrowUp />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
