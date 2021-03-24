import React, { Component } from "react";
import ChildComponents from "./ChildComponents";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      color: "",
      stateNumber: {
        number: 1,
      }
    };
    console.log('contructor');
  }

  static getDerivedStateFromProps(newProps,currentState){
    console.log('getDedriveStateFromProps');
    return currentState;
  }

  // chạy sau khi state hoặc props của component thay đổi và trước render
  shouldComponentUpdate(newProps,newState) {
    //Xử lý => return false giao diện không render lại, return true giao diện render lại (default)
    return true; 
  }

  render() {
    console.log("render");
    return (
      <div className="container">
        <h1 style={{ color: this.state.color }}>
          {this.state.stateNumber.number}
        </h1>
        <br />
        <button
          onClick={() => {
            // this.setState({
            //     number: this.state.number + 1,
            //     color: 'red'
            // })
            let newStateNumber = {...this.state.stateNumber};
            newStateNumber.number += 1;
            this.setState({
              stateNumber: newStateNumber,
              color: "red",
            });
          }}
        >
          Click +
        </button>
        
        {this.state.stateNumber.number < 3 ? (
          <ChildComponents stateNumber={this.state.stateNumber} />
        ) : (
          ""
        )}
      </div>
    );
  }
  //lifecycle dùng để goi api
  componentDidMount() {
    console.log("componentDidMount");
  }
  // componentDidUpdate chạy kể từ lần thay đổi props hoặc state, chạy mỗi lần thay đổi state hoặc props
  componentDidUpdate(prevProps, prevState) {
    //hạn chế setState trong compo này (muốn phải có đk if)
    console.log("componentDidUpdate");
  }
}
