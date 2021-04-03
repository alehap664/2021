import { 
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWeibo } from 'react-icons/fa';
import { IoLogoTiktok } from 'react-icons/io5';
const Contact = () => {
  return (
    <>
      <section className="section section--details">
        <div className="header__bg--wrap">
          <div className="header__bg">
            <div 
            className="header__bg--item header__bg--active"
            style={{
              background: `url("https://lh3.google.com/u/0/d/1VxjniMxY8M9CP9YN6fCQAlXU5mpS0LNM=w0-nu-iv1") center center / cover no-repeat`,
            }}
            >
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section--wrap">
                <div className="section__title">Contacts</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      <section className="content" style={{marginTop: "70px"}}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8">
              <div className="contact">
                <div className="contact__title">
                  <h1>Contact From</h1>
                </div>
                <form className="contact__form">
                  <div className="row">
                    <div className="col-12 col-lg-6 contact__input">
                      <div className="form-group">
                        <input 
                        className="form-control bg-sub text-light rounded-lg" 
                        type="text" name="name" id="form__name" placeholder="Name"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-lg-6 contact__input">
                      <div className="form-group">
                        <input 
                        className="form-control bg-sub text-light rounded-lg" 
                        type="mail" name="mail" id="form__mail" placeholder="Mail"
                        />
                      </div>
                    </div>
                    <div className="col-12 contact__input">
                      <div className="form-group">
                        <input 
                        className="form-control bg-sub text-light rounded-lg" 
                        type="text" name="subject" id="form__subject" placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-12 contact__input">
                      <div className="form-group">
                        <textarea
                          className="form-control bg-sub text-light rounded-lg"
                          name="message" id="form__message" rows="5" placeholder="Type your message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12 contact__input">
                      <button className="contact__btn">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="info">
                <div className="info__title">
                  Info
                </div>
                <div className="info__text">
                  It is a long fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.
                </div>
                <a href="#" className="info__phone">
                  +1 234 567-89-10
                </a>
                <a href="mailto:support@bbncinema.cinema" className="info__mail">
                  support@bbncinema.cinema
                </a>
                <div className="info__social">
                  <a href="#" id="fb"><FaFacebookF /></a>
                  <a href="#" id="tw"><FaTwitter /></a>
                  <a href="#" id="ins"><FaInstagram /></a>
                  <a href="#" id="wb"><FaWeibo /></a>
                  <a href="#" id="tik"><IoLogoTiktok /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
  </>
  )
}

export default Contact
