import React, { Component } from 'react';
import anime from 'animejs';
import './fakeloading.css';

export default class FakeLoading extends Component {
  componentDidMount = () => {
    const loadingBar = anime.timeline();
    loadingBar
      .add({
        targets: '.fakeloading-bar-inner',
        width: 320,
        loop: false,
        easing: 'linear',
        duration: 1500,
        borderRadius: 10,
        backgroundColor: 'rgb(31, 31, 31)'
      })
      .add({
        targets: '.fakeloading-bar-inner',
        borderRadius: '100%',
        width: 50,
        translateX: 160,
        backgroundColor: 'rgb(53,53,53)',
        borderLeft: '5px solid rgb(56, 165, 255)'
      })
      .add({
        targets: '.fakeloading-bar-inner',
        backgroundColor: '#fafafa',
        width: 50,
        loop: false,
        translateX: 160,
        borderLeft: '5px solid rgb(56, 165, 255)',
        rotate: 2880,
        duration: 1500,
        easing: 'easeInQuad',
        opacity: 0.5
      })
      .add({
        targets: '.fakeloading-bar-inner',
        easing: 'easeInQuart',
        translateX: 160,
        duration: 250,
        scale: 70,
        backgroundColor: 'rgb(230, 230, 230)',
        borderLeft: '0px solid #fafafa',
        opacity: 0.1
      });

    const loadingText = anime.timeline();
    loadingText
      .add({
        duration: 1500,
        targets: '#num',
        easing: 'easeInQuart',
        innerHTML: '100%',
        round: 1,
        color: 'rgb(230,230,230)'
      })
      .add({
        duration: 50,
        targets: '#num',
        opacity: 0.3,
        color: 'rgb(230,230,230)'
      })
      .add({
        duration: 250,
        fontWeight: 700,
        targets: '#num',
        opacity: 1,
        color: 'rgb(230, 230, 230)',
        scale: 2.5
      })
      .add({
        duration: 800,
        targets: '#num',
        opacity: 0,
        scale: 1
      });
  };

  render() {
    return (
      <div className="fakeloading">
        <div className="fakeloading-bar">
          <div className="fakeloading-bar-inner">
            <span id="num">1</span>
          </div>
        </div>
      </div>
    );
  }
}
