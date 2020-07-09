import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Projet 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png) center / cover'}} >Sawvivor</CardTitle>
            <CardText>
              Jeu comprenant une escape room et un mastermind. 
            </CardText>
            <CardActions border>
              <a href="https://anth0sama.github.io/game/">  <Button colored>Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Projet 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url( https://cdn-media-1.freecodecamp.org/images/1*DF0g7bNW5e2z9XS9N2lAiw.jpeg) center / cover'}} >FacePlant</CardTitle>
            <CardText>
              Réseau social sur les plantes. Ce projet a également un but pédagogique.
            </CardText>
            <CardActions border>
              <a href="https://faceplantfrance.herokuapp.com/">  <Button colored>Demo</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          

          {/* Projet 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Chris Marker's project</CardTitle>
            <CardText>
              Projet pour découvrir l'univers de Chris Marker. Base de données intéractives. 
            </CardText>
            <CardActions border>
             <a href="https://ihcm.herokuapp.com/">  <Button colored>Demo</Button></a>
              
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Javascript</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is NodeJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is React</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Projets IronHack</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
