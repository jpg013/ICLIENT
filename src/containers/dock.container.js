import React, { Component, PropTypes } from 'react';
import GraphIcon from '../icons/graph.icon';
import GraphFilter from '../views/graph-filter.view';
import SubjectCarouselContainer from './subject-carousel.container';
import { graphFilterStateAction } from '../actions/graph-filter.actions';
import { connect } from 'react-redux';
import classNames from 'classnames';
import './dock.container.css';

class GraphDock extends Component {
  getDockClass() {
    let dockClass = 'dock ';
    return dockClass += this.props.dockActive ? 'dock_open' : 'dock_closed';
  }

  getGraphBtnClassNames() {
    return classNames(
      'dock-graphBtn',
       'actionItem',
       {'actionItem_inactive': !this.props.dockActive}
    );
  }

  render() {
    return (
      <div className={this.getDockClass()}>
        <div className={this.getGraphBtnClassNames()}>
          <GraphIcon />
        </div>
        <SubjectCarouselContainer active={this.props.dockActive} />
        <GraphFilter
          handleFilterClick={() => this.props.onFilterClick()}
          dockActive={this.props.dockActive}
          graphFilter={this.props.graphFilter}
          />
      </div>
    );
  }
}

GraphDock.propTypes = {
  dock: PropTypes.object,
  graphFilter: PropTypes.object,
  onFilterClick: PropTypes.func.isRequired,
  routeName: PropTypes.string,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    dockActive: state.getIn(['route', 'name']) === 'influencers',
    graphFilter: state.get('graphFilter')
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onFilterClick: () => {
      dispatch(graphFilterStateAction());
    }
  }
}

const ConnectedGraphDock = connect(mapStateToProps, mapDispatchToProps)(GraphDock);

export default ConnectedGraphDock;
