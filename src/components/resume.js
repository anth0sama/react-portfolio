import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
          
            </div>

            <h2 style={{paddingTop: '2em'}}>Anthony Leduc</h2>
            <h4 style={{color: 'grey'}}>Développeur Web</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Je suis à la recherche d'un poste de développeur Web Full Stack.
                 Après 10 ans dans la grande distribution, je me suis lancé le défi de devenir développeur Web. Je suis un passionné d'informatique depuis tout petit. Durant mes études, j'ai longuement hésité entre faire une carrière dans l'informatique ou dans le management. J'ai opté pour le management après une longue réflexion.
                 J'ai beaucoup appris et je me suis énormément épanoui dans mon métier de manager. Cependant, une petite pointe de regret est apparue au cours des dernières années. J'ai eu l'opportunité de rentrer dans le bootcamp d'IronHack, j'ai donc saisi ma chance. Cette formation n'a fait que confirmer que j'avais fait le bon choix et aujourd'hui je suis fin prêt à démarrer ma carrière. </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Adresse</h5>
            <p>22 Avenue Emile Zola 75015 Paris</p>
            <h5>Téléphone</h5>
            <p>(33) 766445234</p>
            <h5>Email</h5>
            <p>aleduc88@gmail.com</p>  
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2020} 
              endYear={2020}
              schoolName="Ironhack"
              schoolDescription="10 semaines de cours intensifs en développement web (+400h en anglais) :
              - FrontEnd: HTML5, CSS3, JavaScript and Git
              - BackEnd: NodeJS - Express - MongoDB
              - FrontEnd: Framework, MERN Stacks
              - Développement de bonnes pratiques : code basé sur les normes en vigueur, schémas de conception et développement basé sur les tests (TDD)."
            />

            <Education
                 startYear={2008}
                 endYear={2010}
                 schoolName="Licence Management et Sciences Economiques"
                 schoolDescription="Economie, Droit, Management, Marketing."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2018}
              endYear={2019}
              jobName="Responsable Secteur chez Continental Foods"
              jobDescription="Gestion d'un parc de magasins situés dans les départements : 78 partiels, 92 partiels et 95 partiels.
                - Référencement d'un assortiment de produits (Partie PGC et partie Frais).
                - Ventes et Mise en place des promos.
               - Proposition d'opérations aditionnelles.
                - Réimplantation ou recadrage de rayon."
              />

              <Experience
                startYear={2011}
                endYear={2018}
                jobName="Responsable Epicerie Centre Leclerc Margon"
                jobDescription="Gestion d’une équipe de 12 personnes.
                  Commade des catalogues.
                  Gestion des stocks et des prix.
                  Gestiondu recrutement.
                  Négociation Fournisseurs."
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={60}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={70}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={60}
                    />
                    <Skills
                      skill="React"
                      progress={50}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
