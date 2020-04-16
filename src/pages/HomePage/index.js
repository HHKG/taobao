import React, { Component } from 'react';
import Header from '../../components/Header';
import Advertisement from '../../components/Advertisement';

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
       {/* 广告位置 */}
       <Advertisement></Advertisement>
       </div>
      </React.Fragment>
      );
  }
}

export default HomePage;