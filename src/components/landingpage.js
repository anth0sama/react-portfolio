import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--1qh6DPJg--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/code_review_l1q9.svg"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | JavaScript | React | NodeJS | Express | MongoDB</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/%E2%9A%A1%EF%B8%8Fanthony-leduc-216b74193/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* CodePen */}
          <a href="https://codepen.io/anth0sama" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-codepen" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/anth0sama" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* CV */}
          <a href="https://drive.google.com/file/d/1qJE_nVpeT9oSZC_36rE2_I1LPRGZRR-i/view?usp=sharing" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-file" aria-hidden="true" />
          </a>


        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
