import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component{
  constructor(props)
  {
    super();
    this.state = {
      age:props.age,
      status:0,
      homeLink: props.newLinkname
    };
    setTimeout(() =>{
      this.setState({
        status:1
      });
    }, 10);
    console.log("Constructor");
  }
  componentWillMount(){
    console.log("Component will mount");
  }
  componentDidMount(){
    console.log("component did mount");
  }
  componentWillReceiveProps(nextProps)
  {
    console.log("component will receive",nextProps);
  }
  shouldComponentUpdate(nextProps, nextState)
  {
    console.log("should component udate",nextProps,nextState);
      /*if(nextState.status==1)
      {
        return false;
      }*/
    return true;
  }
  componentWillUpdate(nextProps,nextState)
  {
    console.log("component will update",nextProps,nextState);
  }
  componentDidUpdate(preProps, prevState)
  {
    console.log("component did update",preProps,preProps);
  }
  componentWillUnmount()
  {
    console.log("component will unmount");
  }
  onMakeOlder()
  {
    this.setState(
      {
        age:this.state.age+3
      }
    );
  }
  onChangeLink()
  {
    this.props.changeLink(this.state.homeLink);
  }
  onHandleChange(event)
  {
    this.setState({
      homeLink:event.target.value
    });
  }
  render()
  {
    return(
      <div>
        <p>In Component</p>
        <p>your name is {this.props.name},your age is {this.state.age}</p>
        <p>Status:{this.state.status}</p>
        <hr/>
        <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary"> Make me old!!!</button>
        <hr/>
        <button onClick={this.props.greet} className="btn btn-primary">GREET!!!</button>
        <hr/>
        <input type="text" value={this.state.homeLink} onChange={(event)=>this.onHandleChange(event)}/>
        <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change link Name!!</button>
      </div>
    );
  }
}

Home.propTypes={
  name: PropTypes.string,
  age:  PropTypes.number,
  greet : PropTypes.func,
  newLinkname : PropTypes.string
};
