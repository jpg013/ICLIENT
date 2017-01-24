import React, { Component } from 'react';
import GraphIcon from '../icons/graph.icon';
import GraphFilter from '../components/graph-filter.component';
import SubjectCarousel from '../components/subject-carousel.component';

import './graph-dock.container.css';

class GraphDock extends Component {
  render() {
    return (
      <div className="graphDock graphDock_closed">
        <div className="graphDock-graphBtn activeItem">
          <GraphIcon />
        </div>
        <SubjectCarousel />
        <GraphFilter />
      </div>
    );
  }
}

export default GraphDock;
