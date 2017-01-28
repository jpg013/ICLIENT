import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Influencers extends Component {
  render() {
    return (
      <div>
      
      </div>
    );
  }
}

Influencers.propTypes = {
  type: PropTypes.string
}


const mapStateToProps = state => {
  return {
    type: state.getIn(['influencers', 'type'])
  };
}

const ConnectedInfluencers = connect(mapStateToProps)(Influencers);

export default ConnectedInfluencers;
