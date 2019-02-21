import React, { Component } from "react";

class BeyCard extends React.Component {

// state ={
// clicked: false,
// favorite: this.props.beyImage.favorite,
// beyImage: this.props.beyImage
// }

beyImageClickHandler = (event) =>{
  // this.setState({
  //   clicked: !this.state.clicked,
  //   favorite: !this.state.favorite
  // })
  this.props.beyImage.favorite = !this.props.beyImage.favorite
  console.log(this.props.beyImage);
  this.props.thatFunction(this.props.beyImage)

}
  render() {
    console.log(this.props);

    return (
      <div>
        <h3>{this.props.beyImage.name}</h3>
        <img onClick={this.beyImageClickHandler} alt="" src={this.props.beyImage.img} />
      </div>
    );
  }
}

export default BeyCard;
