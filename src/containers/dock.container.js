import React, { Component } from 'react';
import GraphIcon from '../icons/graph.icon';
import GraphFilter from '../components/graph-filter.component';
import SubjectCarousel from '../components/subject-carousel.component';
import { browserHistory } from 'react-router';
import './dock.container.css';

class GraphDock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 'closed'
    }

    const onRouteChange = location => {
      this.setState({
        position: location.pathname === '/influencers' ? 'open' : 'closed'
      });
    }

    browserHistory.listen(onRouteChange);
  }

  getDockClass() {
    let dockClass = 'dock ';
    if (this.state.position === 'open') {
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

export default GraphDock;
