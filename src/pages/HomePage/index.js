import React, { Component } from 'react';
import Header from '../../components/Header';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <React.Fragment>
       <div className="homePage-container">
       <Header></Header>
       </div>
      </React.Fragment>
      );
  }
}

export default HomePage;