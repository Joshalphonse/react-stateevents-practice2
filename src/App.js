import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import beyImages from "./beyImages"//import the data
import BeyContainer from "./BeyContainer"
import Favorites from "./Favorites"

class App extends Component {
  state = {
    beyImages: beyImages
  }

  // makeFavesReRender = () => {
  //   return <Favorites beyImages={this.makeFilteredBeys()} />
  // }

 thatFunction = receivedBey =>{
   //Find object in this.state.beyImages and update it
   const foundBeyIndex = this.state.beyImages.findIndex(beyImage => beyImage.id === receivedBey.id)
   const newBeys = [...this.state.beyImages]
   newBeys[foundBeyIndex] = receivedBey
   this.setState({
     beyImages: newBeys
   })
   // console.log(this.state.favoritedImages);
   // this.makeFavesReRender();
 }


  render() {
    return (
      <div className="container">
        <BeyContainer thatFunction ={this.thatFunction} beyImages={this.state.beyImages} />
        <Favorites thatFunction ={this.thatFunction} beyImages={this.state.beyImages} />
      </div>
    );
  }
}

export default App;
