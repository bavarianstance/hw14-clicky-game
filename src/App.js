import React, { Component } from "react";
import './App.css';
import Navbar from "./components/navbar";
import Container from "./components/container";
import Footer from "./components/footer";
import Jumbotron from "./components/jumbotron";
import imgs from "./imgs/"
export default App;

class App extends Component {
  state = {
    score:0,
    highScore:0,
    navMsgLogic: "",
    navMsg: "Click on any logo to start the game.",
    allMakes: this.shuffle(),
    clicked: [],
    wobble: false
  };

  clickEvent = this.chkClicked.bind(this);

  shuffle() {
    let newArray = imgs.slice();
    let shuffledArray = [];

    while (newArray.length > 0) {
      shuffledArray.push(newArray.splice(Math.floor(Math.random() * newArray.length), 1)[0]);
    }
   return shuffledArray; 
  }

  chkClicked(clickedElement) {
    let lastState = this.state.clicked.slice();
    let shuffled = this.shuffle();

    let score = this.state.score;
    let highScore = this.state.highScore;

    if (!this.state.clicked.includes(clickedElement)) {
      if (score === highScore) {
        score++;
        highScore++;
      } else {
        score++;
      }
      lastState.push(clickedElement);
    }

    if (this.state.clicked.includes(clickedElement)) {
      let score = 0;
      return this.setState({
        score: score,
        highScore: highScore,
        navMsgLogic: "falsey",
        navMsg: "Dang it. You done messed up!",
        allMakes: shuffled,
        clicked: [],
        wobble: true
      });
    }

    this.setState({
      score: score,
      highScore: highScore,
      navMsgLogic: "truthy",
      navMsg: "Nice one bruva!",
      allMakes: shuffled,
      clicked: lastState,
      wobble: false
    });

    return setTimeOut( () => this.setState({ navMsgLogic: ""}), 500);
  }

  render() {
    let state = this.state;
    return (
      <div>
        <Navbar
        score= {state.score}
        highScore={state.highScore}
        navMsg={state.navMsg}
        navMsgLogic={state.navMsgLogic}
        />
        <Jumbotron />
        <Container
        wobble={state.wobble}
        makes={state.allMakes}
        clickEvent={this.clickEvent}
        />
        <Footer />
      </div>
    );
  }
}

export default App;