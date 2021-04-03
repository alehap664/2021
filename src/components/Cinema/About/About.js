import { IoIosFilm, IoIosTrophy, IoIosNotifications, IoIosRocket, IoIosGlobe } from "react-icons/io"
import { IoTv } from 'react-icons/io5'
const About = () => {
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
                <div className="section__title">About Us</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section__title --mb">
                BNN CINEMA – Best Place for Movies
              </div>
            </div>
            <div className="col-12">
              <p className="section__text">It is a long <strong>established</strong> fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
              <p className="section__text">'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="feature">
                <div className="feature__icon">
                  <IoTv />
                </div>
                <div className="feature__content">
                  <div className="feature__title">Ultra HD</div>
                  <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                </div>
              </div>
            </div>
            
            <div className="col-12 col-md-6 col-lg-4">
              <div className="feature">
                <div className="feature__icon">
                  <IoIosFilm />
                </div>
                <div className="feature__content">
                  <div className="feature__title">Film</div>
                  <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first.</p>
                </div>
              </div>
            </div>
            
            <div className="col-12 col-md-6 col-lg-4">
              <div className="feature">
                <div className="feature__icon">
                  <IoIosTrophy />
                </div>
                <div className="feature__content">
                  <div className="feature__title">Awards</div>
                  <p>It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining.</p>
                </div>
              </div>
            </div>
            
            <div className="col-12 col-md-6 col-lg-4">
              <div className="feature">
                <div className="feature__icon">
                  <IoIosNotifications />
                </div>
                <div className="feature__content">
                  <div className="feature__title">Notifications</div>
                  <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
                </div>
              </div>
            </div>
            
            <div className="col-12 col-md-6 col-lg-4">
              <div className="feature">
                <div className="feature__icon">
                  <IoIosRocket />
                </div>
                <div className="feature__content">
                  <div className="feature__title">Rocket</div>
                  <p>It to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                </div>
              </div>
            </div>
            
            <div className="col-12 col-md-6 col-lg-4">
              <div className="feature">
                <div className="feature__icon">
                  <IoIosGlobe />
                </div>
                <div className="feature__content">
                  <div className="feature__title">Multi Language Subtitles</div>
                  <p>Various versions have evolved over the years, sometimes by accident, sometimes on purpose.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--border">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section__title">
                How it works?
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="how">
                <span className="how__number">01</span>
                <span className="how__title">Create an account</span>
                <p>It has never been an issue to find an old movie or TV show on the internet. However, this is not the case with the new releases.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="how">
                <span className="how__number">02</span>
                <span className="how__title">Choose your Movie</span>
                <p>It has never been an issue to find an old movie or TV show on the internet. However, this is not the case with the new releases.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="how">
                <span className="how__number">03</span>
                <span className="how__title">Enjoy MovieGo</span>
                <p>It has never been an issue to find an old movie or TV show on the internet. However, this is not the case with the new releases.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--border">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section__title --mb">
                Our Partners
              </div>
            </div>
            <div className="col-12">
              <p className="section__text">It is a long <strong>established</strong> fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
              </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
              <a href="#" className="partner"><img src="https://dmitryvolkov.me/demo/hotflix2.1/main/img/partners/themeforest-light-background.png" alt=""/></a>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
              <a href="#" className="partner"><img src="https://dmitryvolkov.me/demo/hotflix2.1/main/img/partners/audiojungle-light-background.png" alt=""/></a>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
              <a href="#" className="partner"><img src="https://dmitryvolkov.me/demo/hotflix2.1/main/img/partners/codecanyon-light-background.png" alt=""/></a>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
              <a href="#" className="partner"><img src="https://dmitryvolkov.me/demo/hotflix2.1/main/img/partners/photodune-light-background.png" alt=""/></a>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
              <a href="#" className="partner"><img src="https://dmitryvolkov.me/demo/hotflix2.1/main/img/partners/activeden-light-background.png" alt=""/></a>
            </div>
            <div className="col-6 col-sm-4 col-md-3 col-lg-2">
              <a href="#" className="partner"><img src="https://dmitryvolkov.me/demo/hotflix2.1/main/img/partners/3docean-light-background.png" alt=""/></a>
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default About
