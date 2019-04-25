// import components
import React, { Component } from "react";
import './App.css';
import Navbar from "./components/navbar";
import Container from "./components/container";
import Footer from "./components/footer";
import Jumbotron from "./components/jumbotron";
import imgs from "./imgs"

// init app component
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
// assign and bind clickEvent to chkClicked var 
  clickEvent = this.chkClicked.bind(this);
// shuffle function
  shuffle() {
    let newArray = imgs.slice();
    let shuffledArray = [];

    while (newArray.length > 0) {
      shuffledArray.push(newArray.splice(Math.floor(Math.random() * newArray.length), 1)[0]);
    }
   return shuffledArray; 
  }
// init chkClicked function
  chkClicked(clickedElement) {
    let lastState = this.state.clicked.slice();
    let shuffled = this.shuffle();
// assigns scores
    let score = this.state.score;
    let highScore = this.state.highScore;
// logic to determine score counting 
    if (!this.state.clicked.includes(clickedElement)) {
      if (score === highScore) {
        score++;
        highScore++;
      } else {
        score++;
      }
      lastState.push(clickedElement);
    }
// logic for incorrect guess
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
// logic for correct guess
    this.setState({
      score: score,
      highScore: highScore,
      navMsgLogic: "truthy",
      navMsg: "Nice one bruva!",
      allMakes: shuffled,
      clicked: lastState,
      wobble: false
    });
// this function returns navmsg to default after 500 ms
    return setTimeout( () => this.setState({ navMsgLogic: ""}), 500);
  }
// init render for main page incl navbar, jumbotron and primary container + footer
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