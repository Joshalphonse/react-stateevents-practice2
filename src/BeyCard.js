import React, { Component } from "react";

class BeyCard extends React.Component {

state ={
clicked: false,
favorite: this.props.beyImage.favorite,
beyImage: this.props.beyImage

}
beyImageClickHandler = (event) =>{
  this.setState({
    clicked: !this.state.clicked,
    favorite: !this.state.favorite
  })
  this.state.beyImage.favorite = this.state.favorite
  console.log(this.state.beyImage);
  this.props.thatFunction(this.state.beyImage)

}
// console.log(this.props);
  render() {
    return (
      <div>
        <h3>{this.state.beyImage.name}</h3>
        <img onClick= {this.beyImageClickHandler} alt = "" src ={this.state.beyImage.img}/>
      </div>
    );
  }
}

export default BeyCard;
