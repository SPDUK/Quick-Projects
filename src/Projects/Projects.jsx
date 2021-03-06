import React, { Component } from 'react';

import Navbar from '../Hoc/Navbar/Navbar';
import ReactAux from '../Hoc/ReactAux/ReactAux';

import HoverText from './HoverText/HoverText';
import ProjectCard from './ProjectCard/ProjectCard';
import './projects.css';

export default class Projects extends Component {
  componentDidMount() {
    console.log(
      `%c ________________________________________
<  Email Me : spdevuk@gmail.com           >
 ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`,
      'font-family:monospace'
    );
  }
  render() {
    return (
      <ReactAux>
        <Navbar />
        <div className="container projects">
          <HoverText />
          <p className="super-sekret-msg">
            Open your console for a secret message
          </p>
          <section className="section">
            <div className="columns  is-multiline projects-grid">
              <div className="column projects-grid-item  is-one-third-tablet">
                <ProjectCard
                  imageURL="https://res.cloudinary.com/dmjolhdaq/image/upload/v1531614389/QuickProjects/snake-4by3.jpg"
                  name="Snake"
                  desc="The classic snake game, with an easy and hard mode, made with HTML canvas"
                  link="/snake"
                />
              </div>
              <div className="column projects-grid-item  is-one-third-tablet">
                <ProjectCard
                  imageURL="https://res.cloudinary.com/dmjolhdaq/image/upload/v1531614390/QuickProjects/gravity-4by3.jpg"
                  name="Gravity"
                  desc="Lines drawn on the HTML canvas that move in circles, while following the mouse like they are being pulled by gravity around your mouse"
                  link="/gravity"
                />
              </div>
              <div className="column projects-grid-item is-one-third-tablet">
                <ProjectCard
                  imageURL="https://res.cloudinary.com/dmjolhdaq/image/upload/v1531616439/QuickProjects/bouncingballs-4by3.jpg"
                  name="Bouncing Balls"
                  desc="200 balls that bounce around the HTML canvas, if they hit a wall they bounce off them, when your mouse goes near them, they grow."
                  link="/bouncingballs"
                />
              </div>
              <div className="column projects-grid-item is-half-tablet">
                <ProjectCard
                  imageURL="https://res.cloudinary.com/dmjolhdaq/image/upload/v1532545980/QuickProjects/visualizedsort.jpg"
                  name="Visualized Sort"
                  desc="A very weird example of an algorithm, using flexbox orders to sort the items into the correct positions"
                  link="/visualizedsort"
                />
              </div>
              <div className="column projects-grid-item is-half-tablet">
                <ProjectCard
                  imageURL="https://res.cloudinary.com/dmjolhdaq/image/upload/v1531616439/QuickProjects/bouncingballs-4by3.jpg"
                  name="Title"
                  desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum id ad aliquam incidunt nostrum, maiores in nihil iure voluptate neque  sapiente!"
                  link="/visualizedsort"
                />
              </div>
            </div>
            <div className="columns  projects-grid" />
          </section>
        </div>
      </ReactAux>
    );
  }
}
