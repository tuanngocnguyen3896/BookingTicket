import React, { Component, PureComponent } from 'react'
// PureComponent giống component tuy nhiên PureComponent sẽ xét lại giá trị đầu vào của props có thay đổi hay k => có thì render lại
// shouldComponentUpdate không tồn tại trong PureComponent (PureComponent dẵ xử lý render tự động tương đương với lifecycle này)
export default class ChildComponents extends PureComponent {
    setInterval = {};
    constructor(props){
        super(props);
        this.state= {
           
        }
        console.log('constructor child')
    }

    static getDerivedStateFromProps(newProps, currentState) {
        console.log('getDedriveStateFromProps Child');
        return currentState;
    }

    // chạy sau khi state hoặc props của component thay đổi và trước render
    // shouldComponentUpdate(newProps,newState) {
    //     console.log('shouldComponentUpdate child');
    //     // false thì giao diện k render lại
    //     return true;
    // }
    render() {
        console.log('re-render-------------------')
        return (
            <div>
                <br/>
                Props child:
                {this.props.stateNumber.number}
            </div>
        )
    }
    componentDidMount(){
        console.log('componentDidMount child');
       
    };
    // componentDidUpdate chạy kể từ lần thay đổi props hoặc state, chạy mỗi lần thay đổi state hoặc props
    componentDidUpdate(prevProps,prevState){
        //hạn chế setState trong compo này (muốn phải có đk if)
        console.log('componentDidUpdate child');
        
        this.setInterval = setInterval(() => {
            console.log('object')  
          },1000);
    }
    // life cycle chạy trước khi component mất khỏi giao diện
    componentWillUnmount(){
        clearInterval(this.setInterval);
    }
}
