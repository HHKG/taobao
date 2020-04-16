import React, { Component } from 'react';
import '../pages/HomePage/homePage.less';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentId:''
    };
  }

  mouseEnter = (e) => {
    e.persist();
    
    if (e.target.className === '') {
      e.target.className = 'position-li';
    }
    
    this.setState({
      currentId: e.target.id
    },()=>{
      console.log(e,this.popViewTag)
    })
  }
  // 弹窗
  popView = () => {
    return (
      <div id="pop" style={{width:'100px'}} ref={(ref)=>this.popViewTag=ref} className="slecttion">
        <p>中国大陆</p>
        <p>香港</p>
        <p>美国</p>
        <p>欧洲</p>
        <p>法国</p>
      </div>
    );
  }


  mouseOut = (e) => {
    e.target.className = "";
    let currentItem=document.getElementById(e.target.id);
    currentItem.style.borderBottom='';
    this.setState({
      currentId: ''
    })
  }

  render() {
    let { currentId } = this.state;
    return (
      <React.Fragment>
        <div className="header">
          <div className="header-container">
            <ul>
              <li className="" onMouseOver={this.mouseEnter} onMouseOut={this.mouseOut} id="address">中国大陆
              {currentId==='address' ? this.popView() : null}
              </li>
              <li className="" id="login">请登录
              {currentId==='login' ? this.popView() : null}
              </li>
              <li className="" id="mobileTaobao">手机逛淘宝
              {currentId==='mobileTaobao' ? this.popView() : null}
              </li>
            </ul>
            <ul>
              <li className="" id="myTaobao" onMouseOver={this.mouseEnter} onMouseOut={this.mouseOut}>我的淘宝
              {currentId==='myTaobao' ? this.popView() : null}
              </li>
              <li className="" id="shopCar" onMouseOver={this.mouseEnter} onMouseOut={this.mouseOut}>购物车
              {currentId==='shopCar' ? this.popView() : null}
              </li>
              <li className="" id="bookMark" onMouseOver={this.mouseEnter} onMouseOut={this.mouseOut}>收藏夹
              {currentId==='bookMark' ? this.popView() : null}
              </li>
              <li className="" id="goodsCategory" onMouseOver={this.mouseEnter} onMouseOut={this.mouseOut}>商品分类
              {currentId==='goodsCategory' ? this.popView() : null}
              </li>
              <li className="" id="qianNiu" onMouseOver={this.mouseEnter} onMouseOut={this.mouseOut}>千牛卖家中心
              {currentId==='qianNiu' ? this.popView() : null}
              </li>
              <li className="" id="cantactServer" onMouseOver={this.mouseEnter} onMouseOut={this.mouseOut}>联系客服
              {currentId==='cantactServer' ? this.popView() : null}
              </li>
              <li className="" id="navigation" onMouseOver={this.mouseEnter} onMouseOut={this.mouseOut}>网站导航
              {currentId==='navigation' ? this.popView() : null}
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Header;