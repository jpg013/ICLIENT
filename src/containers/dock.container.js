import React, { Component, PropTypes } from 'react';
import GraphIcon from '../icons/graph.icon';
import GraphFilter from '../components/graph-filter.component';
import SubjectCarousel from '../components/subject-carousel.component';
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

  renderSubjectCarousel() {
    return this.props.dockActive ? <SubjectCarousel /> : undefined
  }

  render() {
    return (
      <div className={this.getDockClass()}>
        <div className={this.getGraphBtnClassNames()}>
          <GraphIcon />
        </div>

        {this.renderSubjectCarousel()}

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
  routeName: PropTypes.string
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
