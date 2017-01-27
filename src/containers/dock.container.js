import React, { Component, PropTypes } from 'react';
import GraphIcon from '../icons/graph.icon';
import GraphFilter from '../components/graph-filter.component';
import SubjectCarousel from '../components/subject-carousel.component';
import { browserHistory } from 'react-router';
import GraphFilterStateAction from '../actions/graph-filter.actions'
import { connect } from 'react-redux';
import './dock.container.css';

class GraphDock extends Component {
  constructor(props) {
    super(props);
  }

  getDockClass() {
    let dockClass = 'dock ';

    if (this.props.dock.get('state') === 'active') {
      dockClass += 'dock_open';
    } else {
      dockClass += 'dock_closed';
    }
    return dockClass;
  }

  render() {
    return (
      <div className={this.getDockClass()}>
        <div className="dock-graphBtn activeItem">
          <GraphIcon />
        </div>
        <SubjectCarousel />
        <GraphFilter />
      </div>
    );
  }
}

GraphDock.propTypes = {
  dock: PropTypes.object,
  graphFilter: PropTypes.object
};

const mapStateToProps = state => {
  return {
    dock: state.dock,
    graphFilter: state.graphFilter
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onFilterClick: () => {
      alert('holy moly!!!!');
      dispatch(GraphFilterStateAction());
    }
  }
}

const ConnectedGraphDock = connect(mapStateToProps, mapDispatchToProps)(GraphDock);

export default ConnectedGraphDock;
