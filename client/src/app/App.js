import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import RoomSchedule from './RoomSchedule';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Moka 会议室排位系统</h1>
        <div>
          这里是最外层的 Component，放一些基本的路由，或者外层通用的背景图
        </div>

        <Link to='/room-schedule'>
          单个房间日程安排
        </Link>

        <Route path='/room-schedule' component={RoomSchedule}/>
      </div>
    );
  }
}

export default App;
