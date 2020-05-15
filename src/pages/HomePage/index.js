import React, { Component } from 'react';
import Header from '../../components/Header';
import Advertisement from '../../components/Advertisement';
import styles from './test.css';
import PropTypes from 'prop-types';


class HomePage extends Component {
  static childContextTypes = {
    color:PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
    }
  }



  getChildContext() {
    return {
      color: 'red',
    }
  }

  render() {
    return (
      <React.Fragment>
       <div className="homePage-container">
       <Header></Header>
       <div className={styles.normal}>测试一下</div>
       {/* 广告位置 */}
       <Advertisement></Advertisement>
       </div>
      </React.Fragment>
      );
  }
}

export default HomePage;