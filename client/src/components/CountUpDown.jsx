import React from 'react';

export default class CountUpDown extends React.Component {
  constructor(props) {
    super(props)
    //初期値を0にする
    this.state = {count: 0};
  }

  //カウントを1増加
  countUp() {
    this.setState({count: this.state.count + 1});
  }

  //カウントを1減少
  countDown() {
    this.setState({count: this.state.count - 1});
  }

  render() {
    return (
      <div className="count-up-down">
        <h1>CountUpDown</h1>
        <p>{this.state.count}</p>
        <button onClick={()=>{this.countUp()}}>CountUp</button>
        <button onClick={()=>{this.countDown()}}>CountDown</button>
      </div>
    );
  }
}