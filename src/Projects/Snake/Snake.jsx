import React, { Component } from 'react';

// import ReactAux from '../../Hoc/ReactAux/ReactAux';
import './snake.css';

// directions

class Snake extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // set up the event listeners for controls
    // update the state with the new direction
    const canv = document.getElementById('gc');
    const ctx = canv.getContext('2d');
    let gs = 20;
    let tc = 20;
    let ax = 15;
    let ay = 15;
    let xv = 0;
    let yv = 0;
    let px = 10;
    let py = 10;
    let trail = [];
    let tail = 5;
    const keyPush = evt => {
      // eslint-ignore-next-line
      switch (evt.keyCode) {
        case 37:
          xv = -1;
          yv = 0;
          break;
        case 38:
          xv = 0;
          yv = -1;
          break;
        case 39:
          xv = 1;
          yv = 0;
          break;
        case 40:
          xv = 0;
          yv = 1;
          break;
        default:
          console.log('hmm');
      }
    };
    document.addEventListener('keydown', keyPush);

    const game = () => {
      px+=xv;
    py+=yv;
    if(px<0) {
        px= tc-1;
    }
    if(px>tc-1) {
        px= 0;
    }
    if(py<0) {
        py= tc-1;
    }
    if(py>tc-1) {
        py= 0;
    }
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canv.width,canv.height);
 
    ctx.fillStyle="lime";
    for(var i=0;i<trail.length;i++) {
        ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
        if(trail[i].x===px && trail[i].y===py) {
            tail = 5;
        }
    }
    trail.push({x:px,y:py});
    while(trail.length>tail) {
    trail.shift();
    }
 
    if(ax===px && ay===py) {
        tail++;
        ax=Math.floor(Math.random()*tc);
        ay=Math.floor(Math.random()*tc);
    }
    ctx.fillStyle="red";
    ctx.fillRect(ax*gs,ay*gs,gs-2,gs-2);
}
    setInterval(game, 1000 / 15);
  }

  render() {
    return (
      <div className="container snake">
        <canvas id="gc" className="snake-canvas" width="400" height="400" />
      </div>
    );
  }
}

export default Snake;
