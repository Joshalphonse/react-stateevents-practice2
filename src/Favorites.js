import React, { Component } from "react";
import BeyCard from "./BeyCard"

export default class Favorites extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     beyImages: this.props.beyImages // from parent
  //   };
  // }



  beyComponents = (someBeys) => {
    return someBeys.map(beyImage => <BeyCard key= {beyImage.id} beyImage ={beyImage} />);
  }


   makeFilteredBeys = (newBeys) => {
     return newBeys.filter(beyImage => beyImage.favorite === true)
   }

  render() {
    // console.log(this.);
    return (
      <div className="favorites">
        <h1>Favorites</h1>
          {this.beyComponents(this.makeFilteredBeys(this.props.beyImages))}
      </div>
    );
  }
}
