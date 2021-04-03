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
                <Link to="/cinema/about">About Us</Link>
                <Link to="/cinema/contacts">Contacts</Link>
                <Link to="/cinema/policy">Privacy police</Link>
              </ul>
              <div className="footer__copyright">
                © BNNCINEMA, 2021
                <br/>
                Create by <a href="https://www.facebook.com/nguyenducthinh48/" className="text-warning">Nguyễn Thịnh</a>
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
