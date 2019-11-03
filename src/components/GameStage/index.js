import React, { Component } from "react";
import FriendCard from "../FriendCard";
import Wrapper from "../Wrapper";
import Footer from "../Footer";
import friends from "../../friends.json";
import Header from "../Header";

class Game extends Component {
  state = {
      friends,
      score: 0,
      topScore: 0,
      ids: []
  };

  handleClick = id => {
      let ids = this.state.ids;
      let score = this.state.score;
      let topScore = this.state.topScore;

      if (ids.indexOf(id) === -1) {
          console.log("You Did It");
          this.setState({
              score: score + 1,
              topScore: score > topScore ? score : topScore,
              friends: this.shuffle(friends)
          });
          ids.push(id);
      } else {
          console.log("Wrong");
          this.setState({ score: 0, ids: [] });
      }
  };

  shuffle = array => {
      let count = array.length, temp, rand;
      while (count) {
          // Pick a remaining element…
          rand = Math.floor(Math.random() * count--);
          // And swap it with the current element.
          temp = array[count];
          array[count] = array[rand];
          array[rand] = temp;
      }
      return array;
  };

  render() {
      return (
          <div>
              <Header score={this.state.score} highscore={this.state.topScore} />
              <Wrapper>
                  {this.state.friends.map(friend => (
                      <FriendCard
                          id={friend.id}
                          key={friend.id}
                          image={friend.image}
                          handleClick={this.handleClick}
                      />
                  ))}
              </Wrapper>
              <Footer>2019</Footer>
          </div>
      )
  }
}

export default Game;