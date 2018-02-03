import React from "react";
import {render} from "react-dom";
import {Header} from "./components/Header";
import {Home} from "./components/Home";
import {Router,Route, browserHistory} from "react-router";
class App extends React.Component{
  constructor()
  {
    super();
    this.state = {
      homeLink:"Hello",
      homeMounted : true
    };
  }
  onGreet(){
    alert("hello!!");
  }
  onChangeLinkname(newName)
  {
      this.setState({
        homeLink:newName
      });
  }
  onChangeMounted(){
    this.setState({
      homeMounted:!this.state.homeMounted
    });
  }
  render()
  {
    let homeComp = "";
    if(this.state.homeMounted)
    {
      homeComp=(<Home name={"teja"} age={22} greet={this.onGreet}
                 changeLink={this.onChangeLinkname.bind(this)}
                 newLinkname={this.state.homeLink}/>
               );
    }
    return(
      <div className="container">
               <div className="row">
                   <div className="col-xs-10 col-xs-offset-1">
                       <Header homeLink={this.state.homeLink}/>
                   </div>
               </div>
               <div className="row">
                   <div className="col-xs-10 col-xs-offset-1">
                    {homeComp}
                  </div>
               </div>
               <div className="row">
                   <div className="col-xs-10 col-xs-offset-1">
                      <button onClick={this.onChangeMounted.bind(this)} className="btn btn-primary">Change Mount</button>
                  </div>
               </div>
      </div>
    );
  }
}

render(<App/>, window.document.getElementById("app"));
