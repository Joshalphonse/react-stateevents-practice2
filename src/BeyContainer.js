import React from "react";
import BeyCard from "./BeyCard"
// import beyImages from "./beyImages"; COMMENTED OUT

class BeyContainer extends React.Component {
  // state = {
  //   beyImages: this.props.beyImages // from parent
  // };
  render() {
    let beyComponents = this.props.beyImages.map(beyImage => <BeyCard thatFunction ={this.props.thatFunction} key= {beyImage.id} beyImage ={beyImage} />);
    // console.log(this.state.beyImages);
    return (
      <div className="index">
        <h1>Index</h1>
        {beyComponents}
      </div>
    );
  }
}

export default BeyContainer;
