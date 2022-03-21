import React from "react";
import "./Track.css";

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }
  renderAction = () => {
    return this.props.isRemoval ? (
      <button onClick={this.removeTrack} className="Track-action">
        -
      </button>
    ) : (
      <button onClick={this.addTrack} className="Track-action">
        +
      </button>
    );
  };
  addTrack = () => {
    this.props.onAdd(this.props.track);
  };
  removeTrack = () => {
    this.props.onRemove(this.props.track);
  };
  render() {
    const { track } = this.props;
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>
            {track.artist} | {track.album}
          </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}
export default Track;
