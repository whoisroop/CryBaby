import React from 'react'
import "../css/team.css"

function Team() {
  return (
    <div>
      <>
  {/* Our team Section */}
  <body id="teambody">
  <section id="team" className="team content-section">
    <div className="container">
      <div className="row text-center">
        <div className="col-md-12">
          <h2>TRIO</h2>
          <h3 className="caption gray">
            We are the team!
          </h3>
        </div>
        {/* /.col-md-12 */}
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="team-member">
                <figure>
                  <img
                    src="http://www.mauritiusdsilva.com/themes/hallooou/assets/images/lauren-cox.jpg"
                    alt=""
                    className="img-responsive"
                  />
                  <figcaption>
                    <p>
                      UI20CS60 <br/>
                      BackEND & Machine Learning
                    </p>
                    <ul>
                      <li>
                        <a href="">
                          <i className="fa fa-facebook fa-2x" />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa fa-twitter fa-2x" />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa fa-linkedin fa-2x" />
                        </a>
                      </li>
                    </ul>
                  </figcaption>
                </figure>
                <h4 className='green'>Roop Kumar Lala</h4>
                {/* <p>Creative Director</p> */}
              </div>
              {/* /.team-member*/}
            </div>
            {/* /.col-md-4 */}
            <div className="col-md-4">
              <div className="team-member">
                <figure>
                  <img
                    src="http://www.mauritiusdsilva.com/themes/hallooou/assets/images/jessie-barnett.jpg"
                    alt=""
                    className="img-responsive"
                  />
                  <figcaption>
                    <p>
                      UI20CS19 <br/>
                      FrontEND & Machine Learning
                    </p>
                    <ul>
                      <li>
                        <a href="">
                          <i className="fa fa-facebook fa-2x" />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa fa-twitter fa-2x" />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa fa-linkedin fa-2x" />
                        </a>
                      </li>
                    </ul>
                  </figcaption>
                </figure>
                <h4 className='pink'>Dhvani Shah</h4>
                {/* <p>UI/UX Designer</p> */}
              </div>
              {/* /.team-member*/}
            </div>
            {/* /.col-md-4 */}
            <div className="col-md-4">
              <div className="team-member">
                <figure>
                  <img
                    src="http://www.mauritiusdsilva.com/themes/hallooou/assets/images/terry-fletcher.jpg"
                    alt=""
                    className="img-responsive"
                  />
                  <figcaption>
                    <p>
                      UI20CS38 <br/>
                      BackEND & FrontEND
                    </p>
                    <ul>
                      <li>
                        <a href="">
                          <i className="fa fa-facebook fa-2x" />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa fa-twitter fa-2x" />
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa fa-linkedin fa-2x" />
                        </a>
                      </li>
                    </ul>
                  </figcaption>
                </figure>
                <h4 className='yellow'>Harsh Mavani</h4>
                {/* <p>Web Developer</p> */}
              </div>
              {/* /.team-member*/}
            </div>
            {/* /.col-md-4 */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container */}
      </div>
      {/* /.row */}
    </div>
    {/* /.container */}
  </section>
  {/* /.our-team */}
  </body>
</>

    </div>
  )
}

export default Team
