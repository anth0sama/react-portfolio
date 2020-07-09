import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>

          <img
              src='https://www.reussirmavie.net/photo/art/default/4917219-7338890.jpg?v=1517524283'
              alt="avatar"
              className="avatar-img"
            />
          
            <h2>Anthony LEDUC</h2>
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Je suis à la recherche d'un poste de développeur Full Stack.
              Après avoir réalisé la première partie de ma carrière dans le commerce où je me suis beaucoup épanoui, l'envie de me lancer dans le développement est devenu grandissante.
              Je suis depuis tout jeune un grand passionné d'informatique. C'est pourquoi l'opportunité de faire de ma passion mon métier est une grande motivation. J'ai réalisé le boot camp d'Ironhack pour apprendre et me familiariser à l'univers du code. Cela m'a également permis de me conforter sur mon choix. Je suis maintenant prêt à me lancer dans ma nouvelle carrière.</p>

          </Cell>
          <Cell col={6}>
            <img
              src='https://christianmomthoughts.com/wp-content/uploads/contactme.jpg'
              alt="avatar"
              className="avatar-img"
              />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (33) 766445234
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    aleduc88@gmail.com
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
