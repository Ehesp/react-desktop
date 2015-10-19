import React, { Component, PropTypes } from 'react';

class Ref extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div style={{position: 'relative'}}>
        <video width="200" height="203" autoPlay loop style={{position: 'absolute', right: 0, top: '-200px'}}>
          <source src="ref.mp4" type="video/mp4"/>
        </video>
      </div>
    );
  }
}

export default Ref;
